# JobFinder

A modern React-based web application that allows users to search for jobs by category and location, view job details, and access external job postings. JobFinder integrates with the **Active Jobs API** to fetch real-time job listings.

---

## Table of Contents

- [Features](#features)  
- [Demo](#demo)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage) 
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Search jobs by **category** and **location**.  
- Fetch and display **real-time job listings** from an external API.  
- View job **title, organization, location, posting date**, and a link to apply.  
- Responsive and clean **UI with FontAwesome icons**.  
- Environment variables for secure API key management.  

---

## Demo

<img width="939" height="393" alt="image" src="https://github.com/user-attachments/assets/b371713a-45be-429a-82a8-84cc523535b3" />
<img width="925" height="482" alt="image" src="https://github.com/user-attachments/assets/c26aae06-2968-442e-a1a6-34b39f8d555f" />
<img width="904" height="437" alt="image" src="https://github.com/user-attachments/assets/dc88f730-71b5-4cd9-b956-2ecc75ffc012" />
<img width="887" height="523" alt="image" src="https://github.com/user-attachments/assets/0fb5d3be-fc10-4d29-8b3f-1ea16dec2b00" />


---

## Tech Stack

- **Frontend:** React.js, CSS  
- **Icons:** FontAwesome  
- **Routing:** React Router  
- **API:** Active Jobs API (via RapidAPI)  
- **State Management:** React Hooks (`useState`)  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sparsharya503/jobfinder.git
```
2.  Install the dependencies
```bash
npm install
```
3. Create a .env file in the project root to store your API keys securely:
```bash
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
REACT_APP_RAPIDAPI_HOST=active-jobs-db.p.rapidapi.com
```
4. Start the server
```bash
npm start
```

## Environment Variables

REACT_APP_RAPIDAPI_KEY: Your RapidAPI key for accessing the Active Jobs API.
REACT_APP_RAPIDAPI_HOST: API host for the Active Jobs API.
Never commit .env to GitHub.

## Usage

Enter a job category (e.g., "Data Engineer") and a location (e.g., "United States").
Click the search icon.
Browse job results, view details, and click "View Job" to open the posting in a new tab.

## Contributing
1. Fork the repository
2. Create a new feature branch
   ```bash
   git checkout -b your-new-branch
   ```
3. Make your changes and commit
   ```bash
   git commit -m "Added Features"
   ```
4. Push to your branch and create a pull request

## License
This project is licensed under the MIT License.
