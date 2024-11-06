# Usar una imagen base de Node
FROM node:18 AS build

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Instalar @angular/cli para que ng esté disponible
RUN npm install -g @angular/cli

# Copiar todos los archivos del proyecto
COPY . .

# Ejecutar la construcción de la aplicación
RUN npm run build --prod

# Usar una imagen base ligera para el entorno de producción
FROM nginx:alpine AS production

# Copiar los archivos de build al servidor Nginx
COPY --from=build /app/dist/t08-utility-pay /usr/share/nginx/html

# Exponer el puerto en el que corre la aplicación
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]

