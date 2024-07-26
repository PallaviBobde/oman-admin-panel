import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

const SearchComponent = ({handleSearchChange,addProject,handleAddProjectClick}) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          style={{ width: '60%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <FilterListIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleSearchChange}
        />
        {addProject &&  <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddProjectClick}
        >
          Add Project
        </Button>
        }
       
      </div>
  );
};

export default SearchComponent;
