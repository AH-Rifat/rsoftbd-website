<?php

namespace Database\Seeders;

use App\Models\ProductPricePlan;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        ProductPricePlan::insert([
            [
                'product' => 'gym-software',
                'name' => 'Basic',
                'price' => 19500.00,
                'period' => 'One-Time',
                'popular' => false,
                'features' => json_encode([
                    "Can manage 2,000 members",
                    "Can accept payments offline",
                    "Member attendance can be tracked",
                    "SMS system integrated",
                    "Membership package tracking",
                    "2 users can use simultaneously",
                    "24/7 customer support",
                    "Basic financial reporting",
                ]),
            ],
            [
                'product' => 'gym-software',
                'name' => 'Premium',
                'price' => 29500.00,
                'period' => 'One-Time',
                'popular' => true,
                'features' => json_encode([
                    "Can manage 5,000 members",
                    "Can accept payments online/offline",
                    "Member attendance can be tracked",
                    "SMS system integrated",
                    "Membership package tracking",
                    "5 users can use simultaneously",
                    "24/7 priority support",
                    "Advanced financial reporting",
                    "Business growth analytics",
                ]),
            ],
            [
                'product' => 'gym-software',
                'name' => 'Enterprise',
                'price' => 99500.00,
                'period' => 'One-Time',
                'popular' => false,
                'features' => json_encode([
                    "Can manage 20,000+ members",
                    "Can accept payments online/offline",
                    "Member attendance can be tracked",
                    "SMS system integrated",
                    "Membership package tracking",
                    "10+ users can use simultaneously",
                    "24/7 dedicated support",
                    "Complete business intelligence",
                    "Customized reporting",
                    "API access",
                ]),
            ],
        ]);
    }
}
