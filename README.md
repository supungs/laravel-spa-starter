## About Laravel SPA Starter

This is a Laravel and Vue based Single Page Application starter project template. It has the basic things you will need to get started including an admin dashboard and user authentication. Admin dashboard is based on the [Nice Bootstrap Admin Lite](https://www.wrappixel.com/templates/niceadmin-lite/) theme. Authentication is using JWT.

## Installation
-  Clone or download the repository
- Edit  `.env`  and set your database connection details
- `composer install`
- `npm install`
- `php artisan key:generate` 
- `php artisan jwt:secret`
- Edit  `.env`  and set your database connection details
- `php artisan migrate`
- Seed the users table with `php artisan db:seed`. This will create a user with email: ``admin@admin.com`` and password: ``123123``.

## Usage


```bash
    # serve laravel
    php artisan serve
    
    # serve vue app with hot reloading
    npm run hot
```

## License

The framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
