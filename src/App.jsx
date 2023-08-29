import { useState } from "react";

function App() {
  const [newJob,setNewJob]= useState("");
  const [jobs,setJobs]=useState(['a','b'])
  

  const handleSubmit = ()=>{
    setJobs(jobs=>[...jobs,newJob]);
    setNewJob("")
  }

  // delete
  const deleteJob=(index)=>{
    const updateJobs=jobs.filter((_,i)=>i!==index)
    setJobs(updateJobs)
  }
  return (
    <div className="App">
      <h1>Todo List add delete done </h1>
      
        <input type="text" 
        placeholder="enter a new job"
        onChange={e=>setNewJob(e.target.value)}
        value={newJob}/>
        <button onClick={handleSubmit}>add</button>
        
        <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{job} 
          <button onClick={()=>deleteJob(index)}>delete</button></li>
          
        ))}
      </ul>
     
      
    </div>
  );
}

export default App;
