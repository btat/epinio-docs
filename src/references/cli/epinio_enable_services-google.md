---
title: "epinio enable services-google"
linkTitle: "epinio enable services-google"
weight: 1
---
## epinio enable services-google

enable Google Cloud services in Epinio

### Synopsis

enable Google Cloud services in Epinio which allows provisioning those kind of services.

```
epinio enable services-google [flags]
```

### Options

```
  -h, --help                          help for services-google
      --service-account-json string   the path to the service_account_json for Google Cloud authentication [required]
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

* [epinio enable](../epinio_enable)	 - enable Epinio features

