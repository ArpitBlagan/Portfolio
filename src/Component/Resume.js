import { Typography,Grid,Card,CardMedia,CardContent, Container} from '@mui/material'
import React from 'react';
import data from '.././Data.json';
export const Resume = () => {
  return (
    <Container style={{textAlign:"center",backgroundColor:"black",borderRadius:"6px",padding:"10px",marginTop:"10px"}}>
        <Typography variant='h4'>Skills</Typography>
        <Grid container spacing={2}>
            {data.length?
              data.map((ele,index)=>{
                return <Grid item key={index} xs={2} md={4}>
                          <Card style={{height:"200px"}}>
                            <CardMedia
                              component="img"
                              height="100"
                              image={ele.image}
                              alt="TEACH"
                            ></CardMedia>
                            <CardContent height="50"><Typography variant="h5">{ele.name}</Typography></CardContent>
                          </Card>
                </Grid>
              }) 
            :<Grid item></Grid>}
        </Grid>
    </Container>
  )
}
