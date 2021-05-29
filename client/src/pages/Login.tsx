import React from 'react'
import { FormControl, FormGroup, FormHelperText, Input, InputLabel,FormLabel, Grid ,Box,  Card, Button,Link ,Typography} from '@material-ui/core';
// import './Login.css'

const handleFormSubmit = (e) => {
    console.log("Submitted" + e);

}

const Login = () => {
    return (
        <div className="outerbox"  style={{position:'absolute', top:'30%', bottom:'30%', left:'35%', right:'35%',}}>   
            {/* <Grid justify="center" alignContent="center" direction="column"> */}
            {/* <Box display="flex" alignItems="center" justifyContent="center"> */}
            <Card elevation={5} style={{padding:30}}>
                <Typography style={{textAlign:'center',padding:10}} variant='h4'>Login</Typography>
            <FormGroup>
                <FormControl style={{margin:10}}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input  id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl style={{margin:10}}>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </FormGroup>
            <Typography style={{fontSize:15, color:"grey", position: "absolute", top:"80%" }}>New User? 
                <Link>
        Signup</Link>
            </Typography>
            <Button
            style={{ float: "right", marginTop:10}}
            color="primary"
            variant="outlined"
          >
           Login
          </Button>
            {/* </Box> */}
            </Card>
            {/* </Grid> */}
        </div>
    )
}

export default Login
