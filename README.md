# Job Offer Comparison Tool

Our Job Offer Comparison Tool is designed to support individuals who are evaluating multiple employment opportunities. By providing a structured way to input and compare job offers, the tool helps users analyze key factors side-by-side. Such as salary, benefits, location, equity, and growth potential. Allowing users to make a well informed decision about which offer best aligns with their personal and professional goals.

## Table of Contents
- [Description](#description)
- [Project Functionality](#project-functionality)
- [Installation Guide](#installation-guide)
- [Troubleshooting](#troubleshooting)
- [Contributing](/CONTRIBUTING.md)

## Description
This is repository contains ia group project developed during our senior year in the Bachelor of Science in Computer Science program at North Seattle College, as part of the Project Management in Software Development course. 

The goal of this project is twofold: 

1. **Project Management Practice**: Apply industry-standard tools and methodologies such as Jira, Confluence, Agile frameworks, Software Development Life Cycle (SDLC), backlog grooming, and sprint planning to gain hands-on experience in collaborative software development.

2. **Web Development Practice**: Strengthen our technical skills by building a functional web application using React & Vite, while following best practices in version control, documentation, and team-based workflows

This project serves as both a learning exercise in modern project management and a practical opportunity to design and implement a web application in a collaborative environment. 

## Project Functionality
- Once the project is in a more complete stage I (Tinisha) will update this with a step by step guide of the different features and how to use them including screenshots, diagrams, and a video demo.

## Installation Guide
1. Create a new Vite project:

    `npm create vite@latest my-react-app`

2. When prompted:
    - Choose `React`
    - Choose `JavaScript`

3. Navigate into your project folder:

    `cd my-react-app`

4. Install dependencies:

    `npm install`

5. Start the development server:

    `npm run dev`

6. Open your browser and go to **http://localhost:5173** to view your app

## Troubleshooting
- `npm: command not found`

Ensure Node.js and npm are installed:
``` bash
node -v
npm -v
```

If no version is present, download from [Node.js official site](https://nodejs.org/en)

- Port already in use (e.g., localhost:5173)

Run Vite on a different port:
``` bash
npm run dev -- --port=3000
```

- Dependencies not installing correctly

Delete `node_modules`  and reinstall:
``` bash
rm -rf node_modules
npm install
```
- App won't start / blank screen
    1. Check terminal error
    2. Verify you selected **React + JavaScript** when creating the project
    3. Ensure you're inside the correct folder (`cd my-react-app`)

- Browser not updating after changes
    1. Restart the browser (`CTRL + C` then `npm run dev`)
    2. Clear browser cache if changes don't appear



