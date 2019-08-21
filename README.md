# Dockerfiles

## `TIL`

### Dockerfile

-   `Dockerfile`

```docker
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
docker biuld -t <tag name> .
```
