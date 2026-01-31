# Docker / Compose for unisex_saloon 🚀

## Build and run (production)

- Build image:

  ```bash
  docker build -t unisex_saloon .
  ```

- Run container (example using an env file):

  ```bash
  docker run -p 3000:3000 --env-file .env --name unisex_saloon unisex_saloon
  ```

- Or use compose:
  ```bash
  docker compose up --build
  docker compose down
  ```

## Development

Start the `dev` service (hot-reloads, uses volume mount):

```bash
docker compose up dev
```

Notes:

- Ensure any required environment variables (e.g., NEXT*PUBLIC*\*) are provided via your `.env` or `docker compose` environment settings.
- For production, use the `web` service that runs `npm start` (built `.next` files).
