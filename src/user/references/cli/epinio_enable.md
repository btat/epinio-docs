---
title: "epinio enable"
linkTitle: "epinio enable"
weight: 1
---
## epinio enable

enable Epinio features

### Synopsis

enable Epinio features that are not enabled by default

```
epinio enable [flags]
```

### Options

```
  -h, --help   help for enable
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
* [epinio enable services-google](../epinio_enable_services-google)	 - enable Google Cloud services in Epinio
* [epinio enable services-incluster](../epinio_enable_services-incluster)	 - enable in-cluster services in Epinio

