#!/bin/bash
docker-compose -f ./docker/dev/docker-compose.yml up -d

docker exec -it dev-rt-website-container bash

docker-compose -f ./docker/dev/docker-compose.yml down