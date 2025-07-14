# PKDNS/PKARR Lugano Hackathon 2025

Public Key Domains (PKD) provide self-sovereign and censorship-resistant domain names. It resolves records hosted on the Mainline DHT, the biggest DHT on the planet with ~10M nodes that services torrents since 15 years.

[pkarr](https://github.com/pubky/pkarr/) is a mainline DHT IO library that stores and reads DNS zones. Create your own public key domain DNS records. See [web demo](https://pkdns.net/).

[pkdns](https://github.com/pubky/pkdns/) is a DNS server that supports Public Key Domains. Add it to your browser (DNS-over-HTTPS) or run it locally and browse domains like [http://7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy./](http://7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy./).

## Rust Examples

- [1_publish_dns_zone](./examples/1_publish_dns_zone.rs) Publish your own Public Key Domain.
- [2_http_request](./examples/2_http_request.rs) Make a HTTP request to a PKD.
- [3_https_serve](./examples/3_https_serve.rs) Create a server protected by HTTPS without a Certificate Authority.