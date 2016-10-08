const elixir = require('laravel-elixir');
const path = require('path');

require('laravel-elixir-vue-2');
require('laravel-elixir-webpack-official');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

Elixir.webpack.config.module.loaders = [];

Elixir.webpack.mergeConfig({
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
});

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});
