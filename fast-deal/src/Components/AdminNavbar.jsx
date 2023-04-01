import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
 import { useEffect, useState } from 'react'
 import { useSearchParams } from 'react-router-dom'

export const AdminNavbar = () => {
    const [searchParams,setSearchParams] = useSearchParams();
        const initialCategory = searchParams.getAll("category");
        //const initialOrder = searchParams.get("order");
        const [category, setCategory] = useState(initialCategory || [])
        //const [order, setOrder] = useState(initialOrder || "");
    
        const handleChange = (e) => {
            let newCategory = [...category];
            const value = e.target.value;
    
            if(newCategory.includes(value)){
                newCategory = newCategory.filter((el) => el !== value)
            }else{
                newCategory.push(value);
            }
            setCategory(newCategory);
            
        }
        
    
        useEffect(() => {
            let params = {
                category,
            };
    
            
    
            setSearchParams(params);
        }, [category]);
  return <>
  
  <DIV>
      
      <h3>Shoping App</h3>
        <h4><Link to={"/admindashboard"}>Dashboard</Link></h4>
        <h4><Link to={"/admin"}>Admin</Link></h4> 
          <div className='prodCategory'>
              <h3>Filter By</h3>
            <div>
              <input type="checkbox" value={"Mens"} onChange={handleChange} checked={category.includes("Mens")}/>
              <label>Men</label>
            </div>
            <div>
              <input type="checkbox" value={"Womens"} onChange={handleChange} checked={category.includes("Womans")}/>
              <label>Women</label>
            </div>
            <div>
              <input type="checkbox" value={"children"} onChange={handleChange} checked={category.includes("children")}/>
              <label>Kids</label>
            </div>
          </div>
  </DIV>

    
  </>
  
  
}

const DIV = styled.div`

  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid gray;
  .prodCategory{
    display: flex;
  align-items: center;
  margin-left: 50%;
  gap: 10px;
  }

/* Style for the dashboard and admin links */
nav a {
  color: #333; /* Change this to the desired link color */
  text-decoration: none;
  margin-right: 20px;
}

/* Style for the filter category section */
.prodCategory {
  display: flex;
  flex-direction: row;
  margin-left: 40%;
}

/* Style for the category checkboxes */
.prodCategory input[type="checkbox"] {
  margin-right: 5px;
}

/* Style for the category labels */
.prodCategory label {
  font-weight: bold;
  margin-right: 10px;
} 

`;