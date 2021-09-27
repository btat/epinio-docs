---
title: "epinio install-ingress"
linkTitle: "epinio install-ingress"
weight: 1
---
## epinio install-ingress

install Epinio's Ingress in your configured kubernetes cluster

### Synopsis

install Epinio Ingress controller in your configured kubernetes cluster

```
epinio install-ingress [flags]
```

### Options

```
  -h, --help                     help for install-ingress
  -i, --interactive              Whether to ask the user or not (default not)
      --loadbalancer-ip string   IP address to be assigned to ingress loadbalancer service
      --skip-linkerd             Assert to epinio that Linkerd is already installed.
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

* [epinio](../epinio)	 - Epinio cli

