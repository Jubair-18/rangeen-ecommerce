import { Box } from '@mui/material'
import React from 'react'

import Card from './Card'

const Policy = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection:{xs: 'column', md: 'row'}, justifyContent: 'space-between', alignItems:'center', padding: '0 10vw 0 10vw'}}>
        <Card title="money back gurenty" paragraph="THis is the title writen by the author" />
        <Card title="money back gurenty" paragraph="THis is the title writen by the author"/>
        <Card title="money back gurenty" paragraph="THis is the title writen by the author"/>
    </Box>
  )
}

export default Policy