# Docker

## `TIL`

### Docker

-   `Dockerfile`

```dockerfile
FROM <base image>

ENV <key> <value>

WORKDIR <container dir>

COPY <dir> <container dir>

RUN <commands in the base image>

CMD <default command>
```

-   Build

```bash
docker build .
```

-   Tag

```bash
docker build -t <name> .
```

-   Shell

```bash
docker run -it <id/tag> sh
docker exec -it <id/tag> sh
```

-   Port Mapping

```bash
docker run -p 3000:3000 <id/tag>
```

### Docker Compose

-   `docker-compose.yml`

```yaml
version: '3.7'
services:
    node-webapp:
        restart: always
        depends_on:
            - redis-server
        restart: always
        build: .
        ports:
            - '3000:3000'
    redis-server:
        image: redis
```

-   Restart Policy
    -   "no", always, on-failure, unless-stopped
