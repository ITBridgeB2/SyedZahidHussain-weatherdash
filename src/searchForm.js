import React from "react";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };
const styles = {
        container: {
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "500px",
        
        margin: "auto",
      },
      button: {
        backgroundColor: "#008080",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "15px",
      }
    };
  return (
    <div style={styles.container}>
      <input
      autoFocus
      className='form-control'
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br/>
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
