import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const DropdownComponent = () => {
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>Status</InputLabel>
      <Select
        value={status}
        onChange={handleChange}
        label="Status"
      >
        <MenuItem value="accepted">Accepted</MenuItem>
        <MenuItem value="onHold">On Hold</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
      </Select>
      {status && <Typography variant="body2" style={{ marginTop: '10px' }}>Selected: {status.charAt(0).toUpperCase() + status.slice(1)}</Typography>}
    </FormControl>
  );
};

export default DropdownComponent;
