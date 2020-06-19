<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(Shop::class);
        $this->call(Option::class);
        $this->call(Option_item::class);
    }
}
