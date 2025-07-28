# PKDNS/PKARR Lugano Hackathon 2025

> Pubky Tech Preview

Public Key Domains (PKD) provide self-sovereign and censorship-resistant domain names. They resolve records hosted on the Mainline DHT, the biggest DHT on the planet with ~10M nodes that have been servicing torrents for 15 years.

[pkarr](https://github.com/pubky/pkarr/) is a mainline DHT IO library that stores and reads DNS zones. Create your own public key domain DNS records.

[pkdns](https://github.com/pubky/pkdns/) is a DNS server that supports Public Key Domains. Add it to your browser (DNS-over-HTTPS) or run it locally. Browse domains like [http://7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy/](http://7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy/).


## Why Public Key Domains?

Think of it like a TOR onion address but with full internet speed.

- Domains are independent of a central authority like ICANN.
- Censorship-resistant - Nobody can block the 10M Mainline DHT nodes.
- Free - No need to purchase a domain.
- No need to dox your contact address like with regular domains.
- TLS certificates without a Certificate Authority (Rust only).
- In the future: Key delegation.


## Usage

1. Add `https://pkdns.pubky.org/dns-query` as DNS server to your browser. See [guide](https://support.privadovpn.com/kb/article/848-how-to-enable-doh-on-your-browser/).

2. Resolve http://7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy/ to see if it is working.

3a. Use the [JS examples](./nodejs/) to publish your own DNS records.

3b. Use the [pkdns-cli](https://github.com/pubky/pkdns/tree/master/cli/sample) to publish your own DNS records.

## PKDNS DIG (Records Viewer)

https://pkdns.net/ provides a convenient DNS zone viewer to verify what you published.

Examples:
- [Demo Site](https://pkdns.net/?id=7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy) 7fmjpcuuzf54hw18bsgi3zihzyh4awseeuq5tmojefaezjbd64cy
- [Pubky Homeserver](https://pkdns.net/?id=8um71us3fyw6h8wbcxb5ar3rwusy1a6u49956ikzojg3gcwd1dty) 8um71us3fyw6h8wbcxb5ar3rwusy1a6u49956ikzojg3gcwd1dty
- [Severin's Pubky Account](https://pkdns.net/?id=ihgjy51fdnaingcp8rum1omfzd6p8bhm7usune41grd97dho5cwy) ihgjy51fdnaingcp8rum1omfzd6p8bhm7usune41grd97dho5cwy