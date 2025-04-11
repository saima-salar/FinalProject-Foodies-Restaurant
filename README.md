Foodies Restaurant App


The Foodies Restaurant App is an interactive and dynamic platform that allows food enthusiasts to explore various food, discover popular dishes, and make reservations for their dining experience. The app features a smooth user interface with responsive design, making it easy to browse menus, view restaurant details, and book a table.

Features

Hero Section: A visually striking section at the top of the homepage that highlights the restaurant's dishes with images and catchy titles.

Popular Dishes Menu: A collection of popular dishes, dynamically rendered from a JSON data file, showcasing images, titles, and categories for each dish.

Responsive Navbar: A mobile-friendly navigation bar with smooth scrolling, allowing users to easily navigate through different sections such as "Menu", "Popular Dishes", and "Reservation".

Reservation System: Customers can make a reservation by providing their first name, last name, date, time, email, and phone number. The reservation details are stored in a MongoDB database, and validation ensures that all inputs are correct.

Smooth Scrolling: Implemented smooth scrolling using react-scroll for seamless navigation between sections.

Tech Stack
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose for managing reservations

Icons: react-icons for the hamburger menu

Validation: validator for email and phone validation

Installation
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
Install dependencies:

bash
Copy
Edit
npm install
Set up your MongoDB database and update the connection URI in your configuration.

Start the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view the app.

Reservation System
The app features a reservation system where users can book a table by providing the following details:

First Name and Last Name

Reservation Date and Time

Email (validated to ensure it's a valid email address)

Phone Number (validated to be exactly 11 digits)

The data is saved in a MongoDB database using a Mongoose schema, ensuring proper validation for each field.

