FROM php:8.3-fpm-alpine3.20

RUN apk update && apk upgrade

RUN apk add --no-cache \
    build-base \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install --no-interaction --prefer-dist --optimize-autoloader

RUN chmod -R 775 storage bootstrap/cache

ENV PORT=10000
EXPOSE 10000

CMD ["sh", "-c", "php artisan serve --host=0.0.0.0 --port=$PORT"]
