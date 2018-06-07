#!/bin/sh
set -e

#waiting for postgres
until psql \
    -h $PG_HOST \
    -U $PG_USER \
    $PG_DB -w &>/dev/null
do
  echo "Waiting for PostgreSQL..."
  sleep 1
done

echo "Postgres is ready, running the migrations..."

exec "$@"
