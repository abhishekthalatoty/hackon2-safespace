import React from 'react'
import { Card, Typography, Grid, Button } from '@material-ui/core'
import { Row, Col } from 'react-bootstrap'

const Profile = () => {
    return (
        <div  style={{position:'absolute', top:'30%', bottom:'30%', left:'35%', right:'35%'}}>
            <Card elevation={5} style={{padding:30,backgroundColor:'#dab4e5'}}>
                <Typography variant="h4" style={{textAlign:"center",marginBottom:20}}>User Profile</Typography>
                <Grid container xs={12}>
                    <Grid item xs={4}>
                        <Typography> Name</Typography>
                        </Grid>
                    <Grid item xs={8}>
                        <Typography>Prateek</Typography>
                        </Grid>
                </Grid>
                <Grid xs={12} container>
                    <Grid item xs={4}>
                        <Typography>Email</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>  prateek@gmail.com</Typography>                    </Grid>
                </Grid>
                <Button style={{float:'right',marginTop:10}} variant='outlined' color="default">Done</Button>
            </Card>
        </div>
    )
}

export default Profile
