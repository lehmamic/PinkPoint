# Certificates

## How to generate a self signed certificate for RavenDB

I have found the tutorial [here](https://atos-csms.atlassian.net/wiki/spaces/CDC/pages/25690259/How+to...+Create+a+Self-Signed+Client+Authentication+Certificate+on+Unix).

### Step 1 - create an OpenSSL configuration file

Create a open ssl config file `ravendb.cnf` containing the required certifciate extension options:

```txt
[ ravendb_auth ]
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = clientAuth, serverAuth
```

### Step 2 - create a private key secured with a password

Execute the following command:

```bash
openssl genrsa -aes128 -passout pass:<password> -out <keyfilename>.key 2048
```

### Step 3 - create the certificate

We create a certificate with the extensions in the config file. The extensions flag refers to the corresponding section within the open ssl configuration.

Execute the following command:

```bash
openssl req -subj /CN=<domain> -key <keyfilename>.key -new -out <requfilename>.req
openssl x509 -sha256 -req -in <requfilename>.req -days 3650 -signkey <keyfilename>.key -out <certfilename>.crt -extensions ravendb_auth
```

### Step 4 - create a key store file

In order to use the generated certificate within a browser, it will need to be converted to a keystore.

```bash
openssl pkcs12 -export -out <certfilename>.pfx -inkey <keyfilename>.key -in <certfilename>.crt
```
