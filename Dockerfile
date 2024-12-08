# Stage 1: Build Angular App
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve Angular App
FROM nginx:alpine
COPY --from=builder /app/dist/vehicle-evaluator/browser /usr/share/nginx/html
EXPOSE 80

COPY nginx.conf /usr/share/nginx/nginx.conf
 
# Working Directory
WORKDIR /usr/share/nginx/html
# WORKDIR /etc/nginx/html/
# CMD ["nginx", "-g", "daemon off;"]

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
 
# Health Check
HEALTHCHECK CMD curl -f http://localhost:80/health || exit 1
 