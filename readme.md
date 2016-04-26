# Simple Demonstration of Nginx sub_filter
This is a very simple demonstration of the nginx [sub_filter]() module
and how to use it to replace content served up by nginx. 

## Prerequisites

To run this demo you will need

- [docker](https://docs.docker.com/linux/step_one/)
- [docker-compose](https://docs.docker.com/compose/)
- a clear mind

## Running It

To run this demo simply run `docker-compose up` from the project base.
There are then two URLs:

- `http://<dockerhost>:5000` - direct node.js application
- `http://<dockerhost>:80` - nginx proxy

You can use [curl](https://curl.haxx.se/) or [httpie](https://github.com/jkbrzt/httpie) to test this all out.

### Directly Against the App
```bash
$ http http://$(docker-machine ip):5000
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: text/html
Date: Tue, 26 Apr 2016 03:28:43 GMT
Transfer-Encoding: chunked

<h1>Hello World</h1>

```

### Against the Nginx Proxy

```bash
$ http http://$(docker-machine ip):80
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: text/html
Date: Tue, 26 Apr 2016 03:28:47 GMT
Server: nginx/1.9.14
Transfer-Encoding: chunked

<h1>Goodbye World</h1>

```


