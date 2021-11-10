---
title: "epinio install"
linkTitle: "epinio install"
weight: 1
---
## epinio install

install Epinio in your configured kubernetes cluster

### Synopsis

install Epinio PaaS in your configured kubernetes cluster

```
epinio install [flags]
```

### Options

```
      --access-control-allow-origin string   Domain allowed to access the API. Comma-separated.
      --email-address string                 The email address you are planning to use for getting notifications about your certificates (default "epinio@suse.com")
      --external-registry-namespace string   Provide a namespace (or organization) of the external registry to which you have push access. It can be left empty.
      --external-registry-password string    Provide a password for an external registry. This disables installation of the internal registry.
      --external-registry-url string         Provide a url for an external registry. This disables installation of the internal registry.
      --external-registry-username string    Provide a username for an external registry. This disables installation of the internal registry.
      --force-kube-internal-registry-tls     When true, the application images will be pulled by Kubernetes over TLS. Only applies to the internal registry.
  -h, --help                                 help for install
  -i, --interactive                          Whether to ask the user or not (default not)
      --loadbalancer-ip string               IP address to be assigned to ingress loadbalancer service
      --password string                      The password for authenticating all API requests
      --s3-access-key-id string              If you are using your own S3 compatible object storage for blobs, set the access key id with this setting.
      --s3-bucket string                     If you are using your own S3 compatible object storage for blobs, set the bucket with this setting.
      --s3-endpoint string                   If you are using your own S3 compatible object storage for blobs, set the S3 endpoint with this setting.
      --s3-location string                   If you are using your own S3 compatible object storage for blobs, set the S3 bucket location with this setting.
      --s3-secret-access-key string          If you are using your own S3 compatible object storage for blobs, set the secret access key with this setting.
      --s3-use-ssl                           If you are using your own S3 compatible object storage for blobs, toggle SSL on or off.
      --skip-cert-manager                    Assert to epinio that cert-manager is already installed.
  -s, --skip-default-namespace               Set this to skip the creation of a default namespace
      --skip-linkerd                         Assert to epinio that Linkerd is already installed.
      --skip-traefik                         Assert to epinio that there is a Traefik active, even if epinio cannot find it.
      --system-domain string                 The domain you are planning to use for Epinio. Should be pointing to the traefik public IP (Leave empty to use a omg.howdoi.website domain).
      --tls-issuer string                    The name of the cluster issuer to use. Epinio creates three options: 'epinio-ca', 'letsencrypt-production', and 'selfsigned-issuer'. (default "epinio-ca")
      --user string                          The user name for authenticating all API requests
```

### Options inherited from parent commands

```
      --config-file string       (EPINIO_CONFIG) set path of configuration file (default "~/.config/epinio/config.yaml")
  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster
      --no-colors                Suppress colorized output
      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates
      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)
      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 5, default 0, print nothing)
      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)
```

### SEE ALSO

* [epinio](epinio.md)	 - Epinio cli
