# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --production=false

COPY . .
RUN npm run build

# Stage 2: Runtime minimal
FROM node:20-alpine

WORKDIR /app

# Salin hanya yang dibutuhkan dari builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node_modules/.bin/next", "start"]
