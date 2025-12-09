import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Search.css'
import { useState } from 'react';
const Search = () => {
  const [jobcatagory, setJobcatagory] = useState("");
  const [joblocation, setJoblocation] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () =>{
    const url = `https://active-jobs-db.p.rapidapi.com/active-ats-7d?limit=10&offset=0&title_filter=${jobcatagory}&location_filter=${joblocation}&description_type=text`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
		'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
	    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setJobs(result);
    } catch (error) {
        console.error(error);
    }

  }
    return (
    <div>
        <h1 style={{marginTop:"20px", marginLeft:"20px"}}>Search jobs</h1>
        <div className='job-search-filter'>
        <input type="text" placeholder='Search Job Catagory' value={jobcatagory} onChange={(e) => setJobcatagory(e.target.value)}/>
        <input type="text" placeholder='Search Job Location' value={joblocation} onChange={(e) => setJoblocation(e.target.value)} />
        <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={handleSearch} />
        </div>
        <div className='job-results'>
            {jobs.length === 0 ? (
                <p>No jobs found. Please try different search criteria.</p>
            ) : (jobs.map((job) =>( 
              <div key={job.id} className='job-card'>
              <h3>{job.title}</h3>
              <p><strong>Organization:</strong> {job.organization}</p>
              <p><strong>Location:</strong> {job.locations_derived?.join(", ") || "N/A"}</p>
              <p><strong>Posted on:</strong> {new Date(job.date_posted).toLocaleDateString()}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
            </div>)))}
        </div>
    </div>
  )
}

export default Search
