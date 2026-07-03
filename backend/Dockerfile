FROM php:8.4-fpm

# Install dependencies sistem dan ekstensi PHP yang dibutuhkan Laravel & PostgreSQL
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libonig-dev \
    libzip-dev \
    libpq-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install php extensions (sangat penting libpq-dev & pdo_pgsql untuk PostGIS)
RUN docker-php-ext-install pdo_pgsql mbstring zip exif pcntl

# Install Composer di dalam container
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory di dalam container
WORKDIR /var/www

# Salin semua source code backend ke dalam container
COPY . .

# Set permission agar web server bisa membaca file storage Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]