# **Online Course Platform**

![Screenshot 2024-12-14 at 14 15 52](https://github.com/user-attachments/assets/8d2c8ac3-04e2-462b-9159-e5f72dc73b53)

![Uploading Screenshot 2024-12-14 at 14.16.12.png…]()


A modern, responsive platform for hosting and managing online courses. This project combines cutting-edge web development technologies to deliver a seamless user experience, including a landing page for showcasing courses and an admin panel for content management.

---

## **Features**

- **Landing Page**: Promotes courses and highlights their features.
- **Admin Panel**: Tools for managing course content.
- **Responsive Design**: Built with TailwindCSS to ensure compatibility across devices.
- **State Management**: Efficiently handled with Redux.
- **Routing and Data Fetching**:
  - **Routing**: Powered by React Router for seamless navigation.
  - **HTTP Queries**: Managed via React Query for optimal data handling.

---

## **Tech Stack**

### **Frontend**
- **Framework**: React with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router
- **HTTP Requests**: React Query
- **State Management**: Redux

### **Build Tool**
- **Vite**: For fast and efficient project bundling.

### **Hosting and Deployment**
- **Hosting**: [Vercel](https://vercel.com/)
- **Domain**: [freelancematt.pl](https://freelancematt.pl)

### **Version Control**
- **Git**: Source code managed with Git.
- **Repository**: Hosted on GitHub.

### **CI/CD**
- **GitHub Actions**: Automates testing and deployment workflows.

### **Testing**
- **Unit Testing**: Implemented using Jest.
- **End-to-End Testing (E2E)**: Powered by Playwright.

---

## **Setup and Installation**

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ol1mowski/Course-Landing-Page.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Course-Landing-Page
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Development Workflow**

1. **Feature Development**: Create feature branches from `main`.
2. **Testing**:
   - Run unit tests with Jest:
     ```bash
     npm run test
     ```
   - Run E2E tests with Playwright:
     ```bash
     npx playwright test
     ```
3. **CI/CD Pipeline**: Automatically triggered by pushes to `main`. Includes testing and deployment to Vercel.

---

## **Contributing**

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your branch and submit a pull request.
