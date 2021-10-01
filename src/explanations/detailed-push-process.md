# Epinio Push in Detail

Epinio strives to make use of well supported, well known, and loved projects instead of re-inventing the wheel ([link](principles.md#guidelines-soft-principles)).
But while doing so, it makes sure those components are deployed correctly and work together seamlessly. Let's go through the `epinio push` process in detail,
so you can understand what each components does. You may also want to read the description of every component outside the push process here: [Epinio components](advanced.md#epinio-installed-components).

You can see an image that visualises the process later in this page. Refer to it while reading the text to help you understand the process more.
The numbers on the various arrows on the image indicate the order of the various steps.

## 1. Epinio Push

Epinio exposes an API server running inside the kubernetes cluster for all clients including cli to talk to it. When you run the `epinio push` command, the first thing the cli is going to do, is to hit the relevant api endpoint for pushing apps. (1a) There is a Traefik ingress which sits in front of the Epinio API server which does BasicAuth for all the requests. (1b) After successful authentication, it routes the request to the Epinio API server. The cli puts your code inside a tarball and sends it to the `upload` endpoint of the Epinio API server which is running inside the Kubernetes cluster.

## 2. Copying the code to S3

One of the components Epinio installs on your cluster is [Minio](https://min.io/) (unless you [configured external S3](../howtos/setup-external-s3.md)).
Minio is an S3 compatible storage solution. Epinio uses it to store the application's source code. It will later be used by the staging pipeline.

So the first thing the Epinio API server does when it receives the upload request (the previous step), is to store the source code tarball on S3.

## 3. Staging the App

When the upload request is complete, the cli will send a request to the `stage` endpoint of the Epinio API server. This will instruct the server to start the staging of the uploaded code.

## 4. Trigger the Pipeline

When the Epinio API server receives the stage request, it will create a [`PipelineRun`](https://github.com/tektoncd/pipeline/blob/main/docs/pipelineruns.md) that will run the staging Tekton pipeline using the version of the code referenced in the request. This pipeline has 3 steps. Their role is described in the following 3 sections.

## 5. Fetch the code

The first step of the staging Tekton pipeline downloads the code from the S3 storage to a [workspace](https://github.com/tektoncd/pipeline/blob/main/docs/workspaces.md). This makes the code available to the following steps.

## 6. Stage

The second step of the staging Tekton pipeline uses the [paketo buildpacks](https://paketo.io/) to create a container image for your application. The definition of this Tekton task can be found [in the relevant upstream repo](https://github.com/tektoncd/catalog/tree/main/task/buildpacks/0.2) (though a copy of that is embedded in the Epinio binary).
The result of a successful staging process is a new image pushed to the Registry component of Epinio.

This component is installed as part of the `epinio install` command and it is where the application images are stored. This makes the setup easier (by not having to configure an external registry) and staging faster (by keeping all image transferring local to the cluster).
There is not much to tell about it but if you want to look at how the registry is installed, have a look at the helm chart here:
https://github.com/epinio/epinio/tree/main/assets/container-registry/chart/container-registry

## 7. Run

To run a workload on Kubernetes having a container image is not enough. You need at least a Pod running with at least one container running that image.

The last step of the staging Tekton pipeline creates the runtime Kubernetes resources that are needed to make your application available to the users outside the Kubernetes cluster. The most important resources that are created are a [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), a [Service](https://kubernetes.io/docs/concepts/services-networking/service/) and an [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) resource.

## 8. Pull Image

The Deployment uses the image that was pushed as part of the staging step (see arrow 6). Now, the kubelet will pull the image from the registry for the deployment resource to use it.

You can read how these resources work in Kubernetes following the provided links but if you have to know one thing is that Ingress is the thing that describes how a request that uses the Application's url is routed to the application container. In Kubernetes, the thing that reads that description and implements the routing is called an Ingress Controller. Such an Ingress Controller is provided by [Traefik](https://doc.traefik.io/traefik/providers/kubernetes-ingress/).

## Ingress Implementation (Traefik)

When you installed Epinio, it looked at your cluster to see if you had [Traefik](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) running. If it wasn't there it installed it. Traefik among other things, is an Ingress Controller. As explained above, the Ingress Controller reads your Ingress Resource Definitions and implements the desired routing to the appropriate Services/Pods.

In Epinio, for every application we create an Ingress that routes the traffic for this application through a subdomain that looks something like this:

```
myapplication.my_epinio_system_domain.com
```

You can get the route of your application with `epinio apps list` or `epinio apps show myapplication`

## Additional Things

During installation, if you specified a system domain using the `--system-domain` parameter, then your application routes will be subdomains of that domain.
Epinio considers this domain to be a production server and thus creates a production level TLS certificate for your application using [Let's Encrypt](https://letsencrypt.org/). This is done by the [cert-manager](https://cert-manager.io/docs/installation/kubernetes/), which is one more of the components Epinio installs with `epinio install`.

If you didn't specify a system domain then Epinio uses a "magic DNS" service running on the `omg.howdoi.website` which is similar to [nip.io](https://nip.io/), and [xip.io](http://xip.io/).
These services resolve all subdomains of the root domain to the subdomain's IP address. E.g. `1.2.3.4.omg.howdoi.website` simply resolves to `1.2.3.4`. They are useful when you don't have a real domain but you still need a wildcard domain to create subdomains for. Depending on your setup, the IP address of the cluster which Epinio discovers automatically may not be accessible by your browser and thus you may need to set the system domain when installing to use another IP. This is the case for example when you run a Kubernetes cluster with docker (e.g. [k3d](https://k3d.io/) or [kind](https://github.com/kubernetes-sigs/kind)) inside a VM (for example when using docker on Mac). Then the IP address which Epinio detects is the IP address of the docker container but that is not accessible from your host. You will need to bind the container's ports `80` and `443` to the VMs ports `80` and `443` and then use the VMs IP address instead.


## The Process Visualized

![epinio-push-detailed](epinio-push-detailed.svg?raw=true "Epinio push")

## Credits

- Icons from: https://materialdesignicons.com/ (Source: https://github.com/Templarian/MaterialDesign)
