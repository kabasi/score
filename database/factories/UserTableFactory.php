<?php

use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => 'admin',
        'email' => 'admin@gmail.com',
        'password' => Hash::make('123456'),
        'remember_token' => str_random(10),
    ];
});
