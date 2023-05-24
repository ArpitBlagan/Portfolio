import { Typography,Grid } from '@mui/material'
import React from 'react';
import data from '.././Data.json';
export const Resume = () => {
  return (
    <div style={{textAlign:"center",backgroundColor:"white",borderRadius:"6px",marginTop:"10px"}}>
        <Typography variant='h5'>Skills</Typography>
        <Grid container>
            {data.length?
              data.map((ele,index)=>{
                return <Grid item key={index} xs={2} md={4}>
                    <Typography >{ele.name}</Typography>
                    <img src={ele.image} style={{height:"60px"}}></img>
                </Grid>
              }) 
            :<Grid item></Grid>}
        </Grid>
    </div>
  )
}
