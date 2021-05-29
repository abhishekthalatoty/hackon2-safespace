import { Card, Grid } from "@material-ui/core";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Card>
        <Grid xs={12}>
          <Grid item xs={6}>
            Name
          </Grid>
          <Grid item xs={6}>
            Prateek
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid item xs={6}>
            Email
          </Grid>
          <Grid item xs={6}>
            Prateek@gmail.com
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Profile;
