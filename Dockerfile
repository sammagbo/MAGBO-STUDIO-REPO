# STAGE 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# STAGE 2: Runner
FROM nginx:alpine

# Security: Hardening
# Create nginx user/group if not exists (alpine nginx usually has it)
# We use the built-in 'nginx' user.

# Change ownership of necessary directories to nginx user
RUN touch /var/run/nginx.pid && \
      chown -R nginx:nginx /var/run/nginx.pid && \
      chown -R nginx:nginx /var/cache/nginx && \
      chown -R nginx:nginx /etc/nginx/conf.d

# Switch to non-root user
USER nginx

# Copy build artifacts
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (as configured in nginx.conf)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
