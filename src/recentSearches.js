import React, { useEffect, useState } from "react";
import axios from "axios";


const RecentSearches=()=>{
    const[recent,setRecent]=useState([]);
    useEffect(() => {
       fetch("http://localhost:3001/searches")
         .then((res) => res.json())
         .then((data) => setRecent(data))
         .catch((err) => console.error("Error fetching Data:", err));
     }, []);
 

 const handleDelete = async (id) => {
       try {
       await axios.delete(`http://localhost:3001/searches/${id}`);
       setRecent(recent.filter((form) => form.id !== id)); // Remove from UI after deletion
        alert("Post Deleted!");
      } catch (error) {
    console.error("Error deleting post:", error);
  }
};





    // const response= axios.get('http://localhost:3001/searches');
    // setRecent(response.data);

    return(
        <div>
            {/* <h4>Recent Searches</h4>
            <li>Id :{recent.id}</li>
            <li>City:{recent.city}</li>
            <li>Time:{recent.timestamp}</li> */}
            <h2>Recent Search's</h2>
      <table border="1" className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Date</th>
            <th></th>
      
          </tr>
        </thead>
        <tbody>
          {recent.map((form) => (
            <tr key={form.id}>
              <td>{form.city}</td>
              <td>{form.timestamp}</td>
              <td><button  className="btn btn-danger" onClick={() => handleDelete(form.id)} >Delete</button></td>
              </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
};
export default RecentSearches;