# 💰 React Tip Calculator

A simple **React app** that helps you and a friend calculate how much to tip based on your satisfaction with the service.

## 📌 Features

- Enter the **bill amount** 💵
- Select **service rating** for you and your friend ⭐
- App calculates the **average tip %** and shows the total amount to pay
- **Reset button** to clear all inputs

## 🖼️ Demo

The app asks:

1. How much was the bill?
2. How did you like the service?
3. How did your friend like the service?

It then shows the total payment = `Bill + Tip`.

## 🛠️ Technologies Used

- 🎨 CSS for styling

- 📜 JavaScript (ES6+)

## ⚛️ React Functionalities Used

- **useState hook** → to manage bill, service ratings, and reset functionality
- **Props** → passing data and functions between components (`bill`, `onSelect`, `handleReset`)
- **Children prop** → used in `ServiceRating` to display custom label text
- **Conditional rendering** → showing the output and reset button only if a bill is entered

## 👨‍💻 Author

**Muhammad Muzammil Ijaz** – Frontend Developer 🚀
