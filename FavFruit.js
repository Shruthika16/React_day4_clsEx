import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Favfruit.css'

const fruitOpt=["Apple","Mango","Cherry","Banana","Durian"]
function FavFruit() {
  const hi=()=>
  {
    alert(`You have successfully submitted`)
  }
  return (
    <div className='box'>
        <b><h3>Enter your name and Favorite fruit</h3></b>
        <p><TextField placeholder='Name'></TextField></p>
        <Autocomplete
        options={fruitOpt}
        sx={{ width: 450 }}
        renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        style={{paddingLeft:"250px"}}
        ></Autocomplete>
        <br/><br/>
        <p><button onClick={hi} style={{width:'75px',height:'25px',backgroundColor:""}}>Submit</button></p>
    </div>
  )
}

export default FavFruit