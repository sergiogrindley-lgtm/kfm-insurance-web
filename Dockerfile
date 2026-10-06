# Dockerfile para KFM Insurance (Ligero, Rápido y Optimizado para Dokploy)
FROM nginx:alpine

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos estáticos de la web
COPY . /usr/share/nginx/html

# Exponer puerto HTTP estándar
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
