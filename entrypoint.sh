#!/bin/sh
set -e

#waiting for postgres
until psql \
    --host=$POSTGRES_HOST \
    --username=$POSTGRES_USER \
    $POSTGRES_DB -w &>/dev/null
do
  echo "Waiting for PostgreSQL..."
  sleep 1
done

echo "Postgres is ready, running the migrations..."

exec "$@"
