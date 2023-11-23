# Readable Types Website

## prod
```bash
docker compose -f ./docker/prod/docker-compose.yml up
```

## dev
```bash
git config core.hooksPath git-hooks
docker-compose -f ./docker/dev/docker-compose.yml up
```