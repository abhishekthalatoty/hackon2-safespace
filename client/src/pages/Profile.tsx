import React from 'react'
import { Card, Typography, Grid } from '@material-ui/core'
import { Row, Col } from 'react-bootstrap'

const Profile = () => {
    return (
        <div>
            <Card>
                        <Grid container xs={12}>
                            <Grid item xs={6}>
                                Name
                        </Grid>
                            <Grid item xs={6}>
                                Prateek
                        </Grid>
                    </Grid>
                    <Grid xs={12} container>
                        <Grid item xs={6}>
                            Email
                    </Grid>
                        <Grid item xs={6}>
                            Prateek@gmail.com
                    </Grid>
                    </Grid>

            </Card>
        </div>
    )
}

export default Profile
