import { Box } from '@mui/system';
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const Search = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'cener', alignItems: 'center'}}>
        <TextField
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined"
          sx={{ borderTopLeftRadius: '5vh',borderBottomRadius: '5vh', width: '30vw'}}
        />
        <SearchOutlinedIcon sx={{backgroundColor: 'black', height:'8vh', width:'10vh',padding:'5px',color: 'whitesmoke', borderTopRightRadius: '5vh',borderBottomRightRadius: '5vh'}} />
    </Box>
  )
}

export default Search



// catagory search



const filter = createFilterOptions();

