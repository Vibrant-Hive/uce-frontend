# Stage 1: Build Angular App
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve Angular App
FROM nginx:alpine
COPY --from=builder /app/dist/vehicle-evaluator/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
