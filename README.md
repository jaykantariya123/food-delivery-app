# 🍔 Food Delivery App

## 📖 Introduction

Welcome to the Food Delivery App! This application provides a platform for users to browse, add, and remove food items in their cart, make payments, and view all their orders. Admins have the ability to add or remove food items and view the list of all user orders. The app is built to be responsive, ensuring a smooth experience across all devices.

## 📋 Table of Contents

- [⭐ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🔧 Installation](#-installation)
- [🚀 Usage](#-usage)
- [🛠️ Troubleshooting](#-troubleshooting)
- [👥 Contributors](#-contributors)
- [📜 License](#-license)

## ⭐ Features

- **User Role**:

  - Add and remove food items from the cart.
  - Make payments for the selected items.
  - View the list of all previous orders.

- **Admin Role**:

  - Add new food items to the platform.
  - Remove existing food items.
  - View the list of all user orders.

- **Responsive Design**: The app is designed to be responsive and works seamlessly on different devices.

## 🛠️ Tech Stack

- **Frontend**: ![React](https://img.shields.io/badge/-ReactJS-61DAFB?style=flat&logo=react&logoColor=white)
- **Backend**: ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white)
- **Database**: ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
- **Image Storage**: ![AWS S3](https://img.shields.io/badge/-AWS_S3-232F3E?style=flat&logo=amazon-aws&logoColor=white)
- **Payment Processing**: ![Stripe](https://img.shields.io/badge/-Stripe-008CDD?style=flat&logo=stripe&logoColor=white)

## 🔧 Installation

To get the project up and running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jaykantariya123/food-delivery-app.git
   cd food-delivery-app
   ```

2. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Install admin dependencies:**

   ```bash
   cd admin
   npm install
   ```

5. **Setup MongoDB:**

   - Ensure you have MongoDB installed and running.

   - Create a .env file in the backend directory with the following content:
     ```bash
     JWT_SECRET=your_secret
     PORT=your_port
     MONGO_URI=your_mongodb_connection_string
     AWS_ACCESS_KEY_ID=your_aws_access_key_id
     AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
     S3_BUCKET=your_s3_bucket_name
     AWS_REGION=your_aws_region
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

6. **Run the application:**
   - **Backend**
     ```bash
     cd backend
     npm start
     ```
   - **Frontend**
     ```bash
     cd backend
     npm start
     ```
   - **Admin**
     ```bash
     cd admin
     npm start
     ```

## 🚀 Usage

- **User**:

  - Register or log in to access the food catalog.
  - Add items to the cart and proceed to checkout.
  - View order history in your account section.

- **Admin**:

  - Log in to the admin panel.
  - Manage food items by adding new items or removing outdated ones.
  - View user order details.

## 🛠️ Troubleshooting

- If you encounter issues starting the backend server, ensure MongoDB is running and the URI is correct.
- For AWS-related issues, double-check your credentials and bucket permissions.
- For Stripe-related issues, ensure your API keys are correctly set up and that you have activated your account.

## 👥 Contributors

- [Jay Kantariya](https://github.com/jaykantariya123)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jaykantariya123/food-delivery-app/blob/main/LICENSE) file for details.



https://github.com/user-attachments/assets/eb851dd8-9c01-4489-97d9-704f4e802876


