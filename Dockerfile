# --- 1. Stage: Build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren und Build ausführen
COPY . .
RUN npm run build

# --- 2. Stage: Runner (Nginx) ---
FROM nginx:alpine

# Standard-Inhalte löschen
RUN rm -rf /usr/share/nginx/html/*

# Nginx-Konfiguration kopieren
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Statische Dateien aus der Build-Stage kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# Port freigeben und Nginx starten
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]