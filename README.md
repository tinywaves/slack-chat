# @dhzh/http-server

A lightweight HTTP server for local development, written in TypeScript. It serves static files and provides an in-memory REST API from a JSON file.

## Features

- Static file serving and directory listings
- In-memory REST API with `GET`, `POST`, `PUT`, and `DELETE`
- Custom JSON data sources
- Optional CORS support
- ETag-based caching for static files
- gzip, deflate, and Brotli compression for static files
- CLI and programmatic APIs

> This package is intended for local development and prototyping. API changes are stored in memory and are not written back to the data file.

## Installation

Run it without installing:

```bash
pnpm dlx @dhzh/http-server
```

Or install it globally:

```bash
pnpm add --global @dhzh/http-server
htttp-server
```

> The CLI command is `htttp-server` with three `t` characters.

## Quick Start

Serve the current directory on port `8080`:

```bash
htttp-server
```

Serve a specific directory with CORS and compression enabled:

```bash
htttp-server --directory ./public --port 3000 --cors --compress
```

The server prints the available local and network URLs after it starts.

## CLI Options

```text
Usage: htttp-server [options]

Options:
  -p, --port <port>            Port to listen on (default: 8080)
  -d, --directory <directory>  Directory to serve (default: current directory)
  --data <data>                JSON data file for the REST API
  --cors                       Enable CORS
  --disable-cache              Disable static-file caching
  --max-age <maxAge>           Cache max-age in seconds (default: 5)
  --compress                   Enable static-file compression
  -h, --help                   Display help
```

The path passed to `--data` is resolved relative to `--directory`, unless it is absolute.

For example:

```bash
htttp-server \
  --directory ./fixtures \
  --data ./data.json \
  --port 3000 \
  --cors \
  --compress \
  --max-age 3600
```

## Mock REST API

The REST API is available under `/api`. Provide a JSON object whose keys are resource names and whose values are arrays of records:

```json
{
  "users": [
    {
      "id": "1",
      "name": "Ada Lovelace",
      "age": 36
    }
  ],
  "posts": [
    {
      "id": "1",
      "title": "Hello world"
    }
  ]
}
```

Start the server with the data file:

```bash
htttp-server --data ./data.json
```

If no data file is supplied, the server exposes a small built-in `users` collection.

### Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/:resource` | List all records |
| `GET` | `/api/:resource/:id` | Get one record by ID |
| `POST` | `/api/:resource` | Create a record with a generated UUID |
| `PUT` | `/api/:resource/:id` | Merge fields into an existing record |
| `DELETE` | `/api/:resource/:id` | Delete a record |

### Examples

```bash
# List users
curl http://localhost:8080/api/users

# Get one user
curl http://localhost:8080/api/users/1

# Create a user
curl --request POST http://localhost:8080/api/users \
  --header 'Content-Type: application/json' \
  --data '{"name":"Grace Hopper","age":85}'

# Update a user
curl --request PUT http://localhost:8080/api/users/1 \
  --header 'Content-Type: application/json' \
  --data '{"age":86}'

# Delete a user
curl --request DELETE http://localhost:8080/api/users/1
```

## Programmatic Usage

Install the package in your project:

```bash
pnpm add @dhzh/http-server
```

Then create and start a server:

```ts
import HttpServer from '@dhzh/http-server';

const server = new HttpServer({
  port: 3000,
  baseDir: './public',
  dataPosition: './data.json',
  cors: true,
  cache: true,
  maxAge: 3600,
  compress: true,
});

server.start();
```

### Server Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `port` | `number` | `8080` | Port to listen on |
| `baseDir` | `string` | `process.cwd()` | Directory used for static files |
| `dataPosition` | `string` | - | JSON data file, relative to `baseDir` or absolute |
| `cors` | `boolean` | `false` | Enable CORS response headers |
| `cache` | `boolean` | `true` | Enable ETag and Cache-Control headers for static files |
| `maxAge` | `number` | `5` | Cache lifetime in seconds |
| `compress` | `boolean` | `false` | Compress static files when supported by the client |

## Development

This repository uses Node.js 24 and pnpm 11.

```bash
pnpm install
pnpm build
pnpm lint
```

## License

[MIT](./LICENSE)
