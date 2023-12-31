
<img width="30" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/aae59060-2396-4b0b-882c-29f6867e64a0"> ﻿# Easy Shop Ecommerse App


Introduction
The EasyShop e-commerce app is an innovative and feature-rich platform designed to provide users with a convenient and delightful online shopping experience. With the rapid growth of e-commerce in recent years, this app aims to cater to the needs of both businesses and consumers by offering a wide range of products, a user-friendly interface, secure payment options, and efficient order management.

The Need for a Modern E-commerce App
In the digital age, consumers increasingly prefer shopping online due to its convenience and accessibility. Businesses, too, recognize the potential of e-commerce in reaching a global audience and increasing sales. However, with the ever-changing landscape of technology and consumer preferences, it becomes essential to develop an up-to-date e-commerce app that aligns with the latest trends and demands.

Key Features
1. User Registration and Authentication
To personalize the shopping experience and facilitate secure transactions, the app includes a user registration and authentication system. Users can easily create accounts using their email or social media credentials. The app ensures the security of user information by implementing JSON Web Tokens (JWT) for stateless and secure authentication.
<img width="379" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/a4985e3c-175a-4f08-ac83-3d0ddc8ff3bc">
<img width="370" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/b3e3cbbc-3ae9-4f4d-b5b6-982794f9d56d">

2. Product Browsing
A smooth and intuitive product browsing experience is crucial to keep users engaged. The app allows users to explore an extensive range of products, categorized logically for easy navigation. Advanced filtering options enable users to find products based on various attributes such as price, size, brand, and customer ratings.
<img width="763" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/6ab5e3d1-88ca-4bca-87b5-091ebeb044d0">


4. Product Details and Media
Each product page is designed to provide comprehensive information about the item. Users can access detailed product descriptions, prices, available sizes, customer reviews, and high-quality images to make informed purchasing decisions.
<img width="737" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/b7f61565-f9dd-4334-8c4a-0bdbce8ded33">

5. Shopping Cart
The shopping cart feature allows users to add products while browsing and view the contents of their cart at any time. Users can modify quantities, remove items, and check the total cost before proceeding to checkout.
<img width="756" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/df962a29-6df2-40eb-b93a-438c5881dae3">

6. Secure Checkout
The checkout process is optimized for security and simplicity. The app integrates with a reliable and secure payment gateway, ensuring that sensitive financial information is protected. Customers can choose from multiple payment options, including credit/debit cards, digital wallets, and cash on delivery, providing flexibility and convenience.
<img width="742" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/ab0927cd-6212-4036-8e89-be1edcde9988">

7. Order Tracking
To enhance transparency and build trust with customers, the app offers real-time order tracking. Users can monitor the status of their orders from the moment they are placed until delivery. Automated updates and notifications keep customers informed throughout the process.
<img width="212" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/a40c6f8a-6e15-4c54-9d5d-74f941b79246">

8. User Profiles
Registered users have access to personalized profiles, where they can manage their personal information, track order histories, and view previous purchases. Additionally, users can manage their shipping addresses, making the checkout process smoother for future purchases.
<img width="769" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/967e324a-f885-4fe2-a5e5-09c9a67e573c">

9. Product Reviews and Ratings
The app encourages customer feedback by enabling users to leave reviews and ratings for products they have purchased. This feature not only helps other users make informed decisions but also provides valuable insights to businesses for product improvement.
<img width="375" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/aadc0234-af12-4692-a29f-56fe462f7a32">

10. Search Functionality
A powerful search feature is crucial for a large e-commerce platform. The app incorporates an efficient search system, allowing users to quickly find products based on keywords, categories, or specific attributes.
<img width="326" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/d52777b3-1fc0-4876-a98e-e48b37eb701b">

11. Responsive Design
In the mobile-first era, responsive design is a must for any modern app. The e-commerce app is built using responsive design principles, ensuring that it adapts and functions seamlessly across various devices, including desktop computers, tablets, and smartphones.
<img width="188" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/a85c4b73-d09b-4932-9205-ca369275b421">

12. Admin Dashboard
For store administrators, the app includes an admin dashboard that grants access to various management functionalities. Admins can add or update product information, manage product categories, handle customer support requests, and monitor order status to ensure smooth operations.
<img width="783" alt="image" src="https://github.com/joinprakhar/ecommerse/assets/118005176/bd6a6298-c5d6-4766-945b-c46a93be0644">

13. Pagination
For better organisation of view pagination is implemented in the app

Technologies Utilized
The development of the modern e-commerce app leverages MERN technologies to ensure a robust and scalable platform:

Frontend Technologies
The frontend is developed using modern web technologies such as ReactJS, a popular JavaScript library known for its flexibility and performance. Redux is employed for state management, allowing for centralized data control and smooth data flow within the app. Bootstrap is used to design and style the user interface, creating an appealing and consistent look across the platform.

Backend Technologies
The app's backend is built using Node.js, a fast and efficient server-side JavaScript runtime, along with the Express.js framework to handle API requests and route management. The combination of Node.js and Express.js ensures rapid development and optimal performance.

Database Management
For storing and managing data, the app uses MongoDB, a NoSQL database known for its scalability and flexibility. MongoDB allows for the efficient storage of various types of data, including user profiles, product information, and order details. Mongoose, an Object Data Modeling (ODM) library, facilitates the interaction with the MongoDB database, making data manipulation straightforward and organized.

Authentication and Security
User authentication is a critical aspect of any e-commerce app. The use of JSON Web Tokens (JWT) ensures secure user login and access to protected routes. JWTs allow for stateless authentication, eliminating the need for session management on the server-side and enhancing security.

Payment Integration
To enable secure and smooth payment processing, the app integrates with a reliable and industry-standard payment gateway. The payment gateway securely handles financial transactions, ensuring that sensitive information is protected during the payment process.

Cloud Storage
To efficiently manage media assets like product images, the app employs cloud storage services like Cloudnary. Cloud storage allows for seamless access and delivery of media files, even during periods of high user traffic.

Installation and Setup
To run the app locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/joinprakhar/ecommerse.git
Install dependencies:

cd ecommerse
npm install
Set up environment variables:

cd app // install frontend dependencies
npm install

Create a .env file in the root directory. // An example of env file is attached in the root directory named .example.env
Define the necessary environment variables such as the database connection URL, payment gateway keys, and other configurations.
Run the app:

To run both backend and frontend //make sure to be in root directory 
npm run dev

To run frontend
cd app
npm start

to run backend
npm tun server


Deployment
The EasyShop app is  deployed render platforms, 
Link: https://easyshop-acsv.onrender.com/





License
This project is licensed under the ISC License.

Contact
For any inquiries or support, please contact us at pandeylive@gmail.com.

