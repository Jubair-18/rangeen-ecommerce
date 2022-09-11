import React from 'react'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Box } from '@mui/material';
const LeftRight = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <ChevronLeftOutlinedIcon />
        <KeyboardArrowRightOutlinedIcon />
  </Box>
  )
}

export default LeftRight