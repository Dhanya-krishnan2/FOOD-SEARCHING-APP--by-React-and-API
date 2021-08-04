
import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';
import Recipes from './Components/Recipes';
import {v4 as uuidv4 } from "uuid";


function App() { 
  const APP_ID = "64ef53e1";
  const APP_KEY = 
  "bd4e9506ef5f0ecc30fd2416a557fb47";
  
  // as I have used the variables for id and key in the
  //  I am replacing that with the template literals in the url
  // here we are passing only a value of chicken to the
  // to make the value dynamic I wanat to set the query to setvalue
  // by using a useState method
  const [query, setQuery] = useState('');
  const[recipes, setRecipes] = useState([]);
  const url =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
   // I am making as aync await junction for that  
  const getApiData =  async(e) => {   

    const getInfo =  await Axios.get(url); 

    console.log(getInfo);
    
    setQuery("")


   }
  //  alert(getApiData);
  const onChange = e => { 
    // e.target.value = setQuery
    e.preventDefault();
    setQuery(e.target.value)
  }
  const onSubmit = (e) => { 
    e.preventDefault(); 
    getApiData();
  }
   
  return (
    <div className="App">
      <h1 > FOOD SEARCHING APP</h1>
      <form className="form-style" onSubmit={onSubmit}> 
      <input type="text"
       placeholder="search for food" 
       autoComplete="off
      " 
      value={query}
      onChange={onChange}/> 
      <input type="submit" value="search" />
      </form>  
      <div className="recipes">
        { 
        recipes !==[] && recipes.map( recipe =>  <Recipes key={uuidv4()} recipe={recipe}/> )

       
        }
      </div>
      
    </div>
  );
}

export default App;
