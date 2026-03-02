# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

RUN npm run build

# Serve stage
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (Cloud Run expects 8080 by default)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
