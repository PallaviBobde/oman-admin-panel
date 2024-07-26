import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const NumberBox = styled(Box)({
  // backgroundColor: 'green',
  color: 'white',
  padding: '8px',
  borderRadius: '4px',
  display: 'inline-block',
  minWidth: '30px',
  textAlign: 'center',
});

export const TextNumberDiv = ({ text, number,bgred=false }) => (
  <Box display="flex" alignItems="center"  margin="10px" width="20%">
    <Typography variant="body1" marginRight="8px">{text}</Typography>
    <NumberBox backgroundColor={bgred?"red":"green"}>{number}</NumberBox>
  </Box>
);