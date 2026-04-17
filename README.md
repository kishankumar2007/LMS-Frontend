# Ed. Tech - LMS Frontend

This repository contains the source code for the frontend of "Ed. Tech", a modern, full-stack Learning Management System (LMS). The platform is built with React, Vite, and Tailwind CSS, offering a responsive and intuitive user experience for both students and administrators. It provides a seamless interface for users to discover, purchase, and consume educational courses, alongside a powerful dashboard for administrators to manage all aspects of the course content.

## ✨ Features

The platform is divided into two main roles: the student-facing application and the administrative panel.

### For Students
-   **User Authentication**: Secure sign-up and login functionality.
-   **Course Discovery**: Browse a rich catalog of courses on the homepage, dedicated courses page, and category-specific pages.
-   **Detailed Course Previews**: View comprehensive details for each course, including description, price, and a full curriculum outline before purchasing.
-   **Course Enrollment**: Seamlessly purchase and enroll in courses.
-   **Personal Dashboard**: Access all enrolled courses from a personalized "My Courses" page.
-   **Interactive Learning Interface**: An integrated learning page with a video player for streaming course content and easy navigation through chapters and topics.
-   **Teacher Profiles**: Explore profiles of instructors to learn more about their expertise and course offerings.

### For Administrators
-   **Protected Admin Route**: A secure admin panel accessible only to users with an 'admin' role.
-   **Admin Dashboard**: A central dashboard to get an overview of key metrics like total courses, students, and revenue.
-   **Course Management (CRUD)**:
    -   Create new courses with a title, description, price, category, and instructor name.
    -   Upload custom course thumbnails.
    -   View, manage, and delete existing courses.
-   **Content Management**:
    -   Add, edit, and delete chapters within each course.
    -   Add video topics to each chapter, including title and video file.
    -   Direct video uploads to Cloudinary with progress tracking.
-   **Status Control**: Easily toggle a course's visibility between 'Public' and 'Private'.

## 🛠️ Tech Stack

-   **Frontend**: React (with Vite)
-   **Styling**: Tailwind CSS
-   **Routing**: React Router DOM v7
-   **State Management**: React Context API
-   **API Client**: Axios
-   **Icons**: Lucide React
-   **Notifications**: React Hot Toast
-   **Deployment**: Configuration for Vercel

## 📂 Project Structure

The project follows a modular structure to keep the codebase organized and maintainable.

```
└── src/
    ├── Admin/        # Components and pages for the admin panel
    ├── Api/          # Functions for making API calls to the backend
    ├── assets/       # Static assets (currently empty)
    ├── components/   # Reusable UI components (Cards, Navbar, Footer, etc.)
    ├── context/      # React Context providers for global state
    ├── layout/       # Layout components for auth and page structure
    ├── pages/        # Main application pages/views
    └── utils/        # Constants and utility functions
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm (or a compatible package manager like yarn or pnpm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/kishankumar2007/LMS-Frontend.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd LMS-Frontend
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

> **Note:** The application is configured to connect to a live backend API hosted on Render. The API base URL is defined in `src/utils/constant.js`. No local `.env` file or backend setup is required for the frontend to run.
