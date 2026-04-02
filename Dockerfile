# Multi-stage Dockerfile for Next.js app

# 1) Build stage
FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Remove dev dependencies to keep production image small
RUN npm prune --production

# 2) Production image
FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user/group
RUN groupadd -r next && useradd -r -g next -d /home/next -m -s /sbin/nologin next

# Copy built assets and node modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set ownership and drop to non-root user
RUN chown -R next:next /app
USER next

EXPOSE 3000

# Healthcheck: verifies the server responds with HTTP 200
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "require('http').get('http://localhost:3000',res=>process.exit(res.statusCode===200?0:1)).on('error',()=>process.exit(1))"

# Start the Next.js server
CMD ["npm", "start"]
