<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
	    <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel SPA</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ (env('APP_ENV') === 'local') ? mix('css/app.css') : asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
        </div>
		<script src="{{ (env('APP_ENV') === 'local') ? mix('js/app.js') : asset('js/app.js') }}"></script>
    </body>
</html>
