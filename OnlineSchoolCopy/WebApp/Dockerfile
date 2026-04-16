# ЭТАП 1: Сборка приложения
FROM node:lts-alpine as build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы манифестов для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта
COPY . .

# Собираем проект для продакшена (создает папку dist)
RUN npm run build

# ЭТАП 2: Раздача статики через Nginx
FROM nginx:stable-alpine as production-stage

# Копируем собранные файлы из первого этапа в папку Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Для SPA на Vue важно, чтобы Nginx перенаправлял все запросы на index.html
# Создаем минимальный конфиг для внутреннего Nginx
RUN echo 'server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Открываем порт 8080 (как указано в вашем основном nginx.conf)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]