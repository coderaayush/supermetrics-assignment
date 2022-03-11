# Supermetrics - Assignment!

Commands for setting up the app:
 - `npm install` - To install the packages 
 - `npm run build` - To compile typescript and build
 - `npm start` - To run application
 - `npm run test` - To run test

Endpoints:
- URL - http://localhost:3000/api/stats
- METHOD - GET
- SAMPLE RESPONSE: {"per_month_data":[{"month":"March","average_character_length_of_posts":372.5,"longest_post_by_character":{"id":"post6229fd699c16e_ebd248c1","from_name":"Mandie Nagao","from_id":"user_17","message":"kinship sailor relation element acceptance leak thick AIDS visible tile diameter recruit adventure ally tin hike body food boat bay control sow environmental withdrawal clinic bullet modernize far rare date pray broadcast restrict skeleton attention passage pardon bend virtue literature rib host beer straw rhythm calculation tape cruelty courage participate design bell avenue rise prescription union stress raid reconcile expression definite abortion bracket despise shake flavor platform invisible connection fly fan insert lose desert skeleton reptile button rubbish curl climb save execute cave message decorative leader trick carve relax permission plane survivor beautiful promotion race dorm default chain breed color","type":"status","created_time":"2022-03-07T14:17:20.000Z","character_count":726},"average_number_of_posts_per_user_this_month":1.8}],"weeks_data":[{"week":25,"total_posts":7},{"week":26,"total_posts":10},{"week":27,"total_posts":19},{"week":28,"total_posts":7}]}

Added a basic integration test to validate the endpoint response

Please ensure you have .env file on your project root folder with correct configurations. Thanks