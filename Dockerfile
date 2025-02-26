FROM node:22.12.0-alpine AS base

# Install necessary dependencies
RUN apk add --no-cache libc6-compat

# Install dependencies and build the project
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install -g corepack@latest && corepack enable && pnpm i

COPY . .
RUN pnpm run build

EXPOSE 7891
ENV PORT 7891

# Start the app
CMD HOSTNAME="0.0.0.0" pnpm run start
