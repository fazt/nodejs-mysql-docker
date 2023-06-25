## Docker Compose Nodejs MysqL

This is a simple example of a docker-compose file that creates a nodejs and mysql container.

### Considerations

- When mysql container is created, it will create a root user and a another user in the `MYSQLDB_USER` environment variable, each with its own password

### Commands

```sh
docker-compose up # to execute development
docker-compose -f docker-compose.prod.yml up # to execute production
```