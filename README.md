# Docker

## `TIL`

### Docker

-   `Dockerfile`

```dockerfile
FROM <base image> as builder

ENV <key> <value>

WORKDIR <container dir>

COPY <dir> <container dir>

RUN <commands in the base image>

CMD <default command>


FROM <other base image> as serve

COPY --from=builder <builder dir> <serve dir>
```

-   Build

```bash
docker build .
docker build -f Dockerfile.dev .
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

-   Reference Files
    -   reference current working dir except node_modules

```
docker run -v /app/node_modules -v $(pwd):/app <image id>
```

### Docker Compose

-   `docker-compose.yml`

```yaml
version: '3'
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

-   Volumes

```yaml
volumes:
    - /app/node_modules
    - .:/app
```

-   Override docker file selection

```yaml
build:
    context: .
    dockerfile: Dockerfile.dev
```

-   Restart Policy

    -   `"no"`, `always`, `on-failure`, `unless-stopped`

-   Commands

```bash
docker-compose up # run
docker-compose up --build # rebuild
docker-compose up -d # in background
docker-compose down # stop
docker-compose ps # status
```
