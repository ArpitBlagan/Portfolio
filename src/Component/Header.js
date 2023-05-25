import React from 'react'
import { Link } from 'react-router-dom';
import { Stack,Item } from '@mui/material';
export const Header = () => {
  return (<Stack
    direction="row"
    spacing={2}
    style={{backgroundColor:"white",borderRadius:"6px",paddingRight:"20px",height:"40px",paddingTop:"20px"}}>
    <Link to="/"><h5>Skills</h5></Link>
    <Link to="/portfolio"><h5>Porject and Experince</h5></Link>
    <Link to="/cp"><h5>Extra</h5></Link>
  </Stack>
  )
}
