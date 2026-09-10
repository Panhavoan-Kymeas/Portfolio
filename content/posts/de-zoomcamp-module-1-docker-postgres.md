---
title: "DE Zoomcamp, Module 1: Docker and a Postgres ingestion script"
date: "2026-09-09"
description: "Notes from the first module of the DataTalks.Club Data Engineering Zoomcamp — standing up Postgres in Docker Compose and writing a chunked ingestion script for the NYC taxi data."
tags: [data-engineering, docker, postgres, zoomcamp]
# cover: "./de-zoomcamp-module-1-docker-postgres.webp"
# coverAlt: ""
draft: true
---

<!--
  SKELETON — fill each section in your own words, then delete these comments.
  The prompts point at decisions you actually made (I pulled them from
  ~/Desktop/Datatalks/1-Docker-Terraform). Keep it to what tripped you up or
  what you chose differently from the course — skip anything that was just
  "followed the video". Short is fine. Set draft: false when you're happy.
-->

<!--
  Intro (2–4 sentences): what the Zoomcamp is, why you're taking it, where
  you're starting from (you'd used FastAPI / pandas before, this is your first
  real data-pipeline work), and that these are running notes, not a tutorial.
-->

## Postgres and pgAdmin in Docker Compose

<!--
  - Why Compose instead of a long `docker run` line.
  - The user-defined network (`pg-network`) so the containers reach each other
    by name — what broke before you added it.
  - The named volume for `ny_taxi_postgres_data` — what "persistence" actually
    meant here (killed the container, data survived).
  - You mapped the DB to host port 5433, not 5432. Why? (something already on
    5432?) Did that bite you later when the script defaulted to 5432?
  - You used `postgres:18`; the course uses an older tag. Anything behave
    differently?
-->

```yaml
services:
  pgdatabase:
    image: postgres:18
    environment:
      POSTGRES_USER: "root"
      POSTGRES_PASSWORD: "root"
      POSTGRES_DB: "ny_taxi"
    volumes:
      - "ny_taxi_postgres_data:/var/lib/postgresql"
    ports:
      - "5433:5432"
    networks:
      - pg-network
```

## From a notebook to a script

<!--
  - You started poking at the CSV in `expore.ipynb`, then pulled the logic into
    `ingest_data.py`. What made you stop and turn it into a script?
  - Why a `click` CLI with --pg-user / --pg-host / --target-table instead of
    hardcoding — where did that pay off (running it locally vs in a container)?
  - psycopg 3 vs the course's psycopg2: your connection string is
    `postgresql+psycopg://...`. Why the newer driver, any friction installing
    or connecting?
-->

## Loading 1.4M rows without blowing up memory

<!--
  - The chunked read: `pd.read_csv(..., iterator=True, chunksize=100000)`.
    Explain why you can't just `read_csv` the whole file.
  - The "create schema, then append" trick: `df.head(0).to_sql(if_exists="replace")`
    on the first chunk, then `if_exists="append"` for the rest.
  - The explicit `dtype` map with nullable `Int64` and `parse_dates` — what
    went wrong without it (pandas guessing types / NaN forcing ints to floats)?
  - You read the gzipped CSV straight from the GitHub release URL. Worth a line.
  - Numbers: how long did the full load take, how many rows, how big was the
    table? A concrete figure makes the post.
-->

```python
df_iter = pd.read_csv(url, dtype=dtype, parse_dates=parse_dates,
                      iterator=True, chunksize=100_000)

first = True
for chunk in df_iter:
    if first:
        chunk.head(0).to_sql(target_table, engine, if_exists="replace")
        first = False
    chunk.to_sql(target_table, engine, if_exists="append")
```

## Putting the ingester in its own container

<!--
  - Your Dockerfile pulls `uv` from `ghcr.io/astral-sh/uv` and runs
    `uv sync --locked --no-install-project`. Why uv over plain pip here?
  - `ENTRYPOINT ["python"]` — how you actually invoke the container
    (script name + flags as `docker run` args).
  - Running that container on the same `pg-network` and pointing --pg-host at
    the service name instead of localhost. This is the bit that ties the
    module together — spend a couple of sentences here.
-->

## Looking at the data

<!--
  - `pgcli` / pgAdmin — a query or two you ran to sanity-check the load.
  - `zone_extract.py`: the taxi-zone lookup table, same chunked pattern, joined
    against the trips on PULocationID / DOLocationID.
  - `output_day_10.parquet` + the pyarrow dependency — you exported to Parquet.
    Why Parquet over CSV (columnar, types preserved, size)?
-->

## What I'd redo

<!--
  - `ingest_data.py` and `pipelines.py` are near-duplicates, and `pipelines.py`
    still has a hardcoded `name="yellow_taxi_data"` in the create branch instead
    of `target_table`. Note it — "leave the code better than the tutorial".
  - Anything about file permissions on the `ny_taxi_postgres_data` volume dir.
  - `to_sql` with no index=False → you're writing a pandas index column. Catch
    it here if you noticed.
-->

## Terraform, and what's next

<!--
  - You haven't done the Terraform / GCP half of the module yet — say so.
  - You're already into Module 2 (workflow orchestration with Kestra) — one
    sentence teaser so the series has a thread.
-->

<!--
  Close with a link to the repo:
  https://github.com/... (the 1-Docker-Terraform repo, once it's pushed)
-->
