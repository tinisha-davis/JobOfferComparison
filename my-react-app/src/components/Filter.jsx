import { jobListings } from '../data/jobListings.js'
import { useState } from "react";
import { jobFilter } from "../filter.js";

function Filter(props) {
    const [title, setTitle] = useState("")
    const [salaryMin, setSalaryMin] = useState("");
    const [salaryMax, setSalaryMax] = useState("");
    const [bonusMin, setBonusMin] = useState("");
    const [bonusMax, setBonusMax] = useState("");
    const [equityMin, setEquityMin] = useState("");
    const [equityMax, setEquityMax] = useState("");
    const [jobList, setJobList] = useState(jobListings);

    function handleApply() {
        setJobList(jobFilter(jobListings, {title, salaryMin, salaryMax, bonusMin, bonusMax, equityMin, equityMax}));
    }
    return (
        <div className="filter">
            <div className="filterForm">
                <p>Job title:</p>
                <input type="text" name="title" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>

                <p>Salary:</p>
                <input type="text" name="salaryMin" value={salaryMin} placeholder="Minimum" onChange={(event) => setSalaryMin(event.target.value)}/>
                <input type="text" name="salaryMax" value={salaryMax} placeholder="Maximum" onChange={(event) => setSalaryMax(event.target.value)}/>

                <p>Bonus:</p>
                <input type="text" name="bonusMin" value={bonusMin} placeholder="Minimum" onChange={(event) => setBonusMin(event.target.value)}/>
                <input type="text" name="bonusMax" value={bonusMax} placeholder="Maximum" onChange={(event) => setBonusMax(event.target.value)}/>

                <p>Equity:</p>
                <input type="text" name="equityMin" value={equityMin} placeholder="Minimum" onChange={(event) => setEquityMin(event.target.value)}/>
                <input type="text" name="equityMax" value={equityMax} placeholder="Maximum" onChange={(event) => setEquityMax(event.target.value)}/>
            </div>
            <button onClick={handleApply}>Apply filter</button>
            <div className="jobListings">
                <div>{jobList.map((job) => (
                        <div key={job.id}>
                            <h3>{job.title}</h3>
                            <p>Salary: ${job.salary}</p>
                            <p>Bonus: {job.bonus * 100}%</p>
                            <p>Equity: {job.equity * 100}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Filter