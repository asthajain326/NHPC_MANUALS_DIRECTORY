# NHPC Manuals Directory

A  a web portal for management & viewing of manuals was developed during my **7-week Industry Internship at NHPC Limited (National Hydroelectric Power Corporation)** to centralize the management, viewing, and downloading of technical manuals. The project provides an organized digital platform that allows users to browse manuals by category, search for relevant documents, and download PDF manuals through a responsive web interface.

---

# Project Overview

The NHPC Manuals Directory was developed to improve the accessibility and management of technical manuals across various departments within NHPC Limited.

Traditionally, users had to search through scattered folders or physical documents to locate manuals, making the process time-consuming and inefficient. This project addresses that challenge by providing a centralized web-based platform where manuals are categorized, searchable, and available for download in PDF format.

The application simplifies document retrieval, improves operational efficiency, and supports NHPC's digital transformation initiatives by replacing manual document management with an organized and scalable system.

---

# Project Objective

To design and develop a web-based directory system that enables users to:

- Browse manuals category-wise
- Search manuals efficiently
- View manuals under selected categories
- Download manuals in PDF format
- Improve accessibility to technical documentation
- Reduce the time required to locate operational manuals

---

# Features

- Category-wise manual browsing
- Dynamic search functionality
- Manual listing based on selected category
- PDF download support
- Responsive user interface
- REST API integration
- AJAX-based dynamic content loading
- Bootstrap responsive layout
- JSON-based data handling
- Modular backend architecture
- Easy navigation between categories

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript
- jQuery
- AJAX

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Other Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- JSON

---

# System Architecture

```text
User

↓

Frontend
HTML
CSS
Bootstrap
JavaScript
jQuery

↓

AJAX Request

↓

Node.js + Express.js

↓

REST API

↓

MySQL Database

↓

Manual Metadata

↓

PDF Manuals

↓

Download
```

---

# Project Workflow

1. User opens the NHPC Manuals Directory.
2. The application loads all available manual categories.
3. Users can search or select a category.
4. An AJAX request is sent to the backend.
5. The Node.js + Express server fetches manual details from the MySQL database.
6. Manual information is returned in JSON format.
7. The selected manuals are displayed dynamically.
8. Users click any manual to download the corresponding PDF.

---

# Activities Undertaken

During the internship, the following tasks were completed:

- Gathered functional requirements from NHPC IT staff.
- Designed the frontend interface using HTML, CSS, Bootstrap, and JavaScript.
- Developed backend APIs using Node.js and Express.js.
- Implemented category-based routing.
- Integrated AJAX for dynamic content loading.
- Built REST APIs for retrieving manual categories and manual files.
- Connected the application with a MySQL database.
- Tested API functionality using Postman.
- Organized manuals for easy downloading and management. :contentReference[oaicite:3]{index=3}

---

# Application Screenshots

## Manual Categories

The above interface represents the main category selection page of the NHPC Manuals Directory 
system. Users are presented with a clean, user-friendly dashboard that allows them to browse 
manuals by various categories such as Electrical, Mechanical, Civil, Hydropower, IT, 
Environment, and Safety. The page features a dynamic search bar to quickly filter categories and 
is styled with a blue gradient background that aligns with NHPC’s official branding. Clicking on 
any category navigates the user to a new page where they can access and download manuals 
relevant to that category in PDF format. This structure ensures efficient navigation and easy access 
to technical documentation for NHPC personnel and stakeholders.

![Manual Categories](Images/Manual%20Categories.png)

---

## Manual Files

Once a user clicks on a category from the previous page, they are redirected here to 
view specific manual files such as the Turbine Manual, Pump Manual, Compressor Manual, and 
others. Each manual name functions as a clickable link, enabling users to easily download the 
corresponding PDF file. A "Back to Categories" button is provided for smooth navigation, 
ensuring users can return to the main category page without refreshing or restarting their session.
The consistent design theme and structured layout improve usability and enhance the user 
experience.

![Manual Files](Images/Manual%20Files%20Download.png)

---

## Manual Download

After clicking on any manual link, such as Valve Manual or Turbine Manual, the corresponding 
PDF file is instantly downloaded to the user’s system, as seen in the browser’s recent download 
history. This feature ensures that critical documents are readily accessible offline, supporting 
operational efficiency. Each manual is neatly organized and named for easy identification. The 
design emphasizes quick access, seamless interaction, and an intuitive experience for NHPC 
personnel managing or referencing technical manuals

![Manual Download](Images/Manual%20Download.png)

---

# Key Observations

Through the development of this application, several important observations were made:

- Organizing manuals into categories significantly improves usability.
- Category-based routing keeps the interface clean and easy to navigate.
- Instant PDF downloads increase operational efficiency.
- Responsive Bootstrap design makes the application easy to use across devices.
- Centralized storage eliminates dependency on scattered folders and physical manuals.
- The modular architecture makes future enhancements easier.
- Authentication and role-based access can improve document security in future versions. :contentReference[oaicite:4]{index=4}

---

# Skills Demonstrated

- Full Stack Web Development
- HTML5
- CSS3
- Bootstrap
- JavaScript
- jQuery
- AJAX
- Node.js
- Express.js
- REST API Development
- MySQL
- JSON
- API Integration
- Client-Server Communication
- Responsive Web Design
- Git Version Control
- Problem Solving
- Software Development Lifecycle

---

# Learning Outcomes

This internship helped me gain practical experience in:

- Building complete full-stack web applications
- Designing RESTful APIs
- Working with client-server architecture
- Dynamic data loading using AJAX
- Backend routing using Express.js
- Database integration
- Modular project organization
- Version control using Git
- Requirement gathering
- Team collaboration
- Technical documentation
- Real-world software development practices

These experiences strengthened my understanding of full-stack development and improved my confidence in building scalable web applications. :contentReference[oaicite:5]{index=5}

---

# Future Enhancements

The application can be further enhanced by adding:

- Admin Login Panel
- Role-Based Authentication
- Manual Upload Portal
- Advanced Search Filters
- Cloud Storage Integration
- User Activity Logs
- Manual Version Control
- Better Security and Access Permissions

---

# Business Impact

The NHPC Manuals Directory improves document management by:

- Reducing manual effort in locating technical manuals
- Providing centralized access to documentation
- Improving operational efficiency
- Supporting NHPC's digital transformation initiatives
- Enabling quick and reliable access to engineering manuals
- Providing a scalable platform for future document management requirements

---

# Internship Details

**Organization:** NHPC Limited (National Hydroelectric Power Corporation)

**Duration:** 15 May 2025 – 04 July 2025 (7 Weeks)

**Location:** NHPC Office Complex, Santosh Nagar, Sector 33, Faridabad, Haryana

**Project:** NHPC Manuals Directory – Developing a Web Portal for Management & Viewing of Manuals 





