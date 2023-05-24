import React from 'react'
import { Grid,Card,CardContent,CardActions,CardMedia,Button,Typography } from '@mui/material'
export const Cp = () => {
  return (
    <Grid container  spacing={2} style={{marginTop:"5px"}}>
        <Grid item xs={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    width="250"
                    image='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/062020/codeforces_logo.png?25Whc0FssKcoh3UpkDc30_e5cJvgkTYZ&itok=Ct4aMOVC'
                    style={{ overflow:"hidden"}}

                />
                <CardContent>
                    <Typography variant='h5'>Codeforces</Typography>
                </CardContent>
                <CardActions>
                    <a href="https://codeforces.com/profile/arpitblagan27"><Button size="small">More</Button></a>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    width="250"
                    image='https://cdn.dribbble.com/users/70628/screenshots/1743345/media/584ad20c4711df6ab15612cc824d35d1.png?compress=1&resize=800x600&vertical=top'
                    style={{ overflow:"hidden"}}

                />
                <CardContent>
                    <Typography variant='h5'>Code Chef</Typography>
                </CardContent>
                <CardActions>
                    <a href="https://www.codechef.com/users/m_r_beginner69"><Button size="small">More</Button></a>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    width="250"
                    image='https://leetcode.com/static/images/LeetCode_Sharing.png'
                    style={{ overflow:"hidden"}}

                />
                <CardContent>
                    <Typography variant='h5'>Leet Code</Typography>
                </CardContent>
                <CardActions>
                    <a href="https://leetcode.com/arpit-_123/"><Button size="small">More</Button></a>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}
