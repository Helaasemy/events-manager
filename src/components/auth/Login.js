import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const Login = () => {

  return (

    <>
      <form noValidate autoComplete="off">
                <Paper className="paper">
                    <Grid container direction="column" justify="center" alignItems="center">
                        <TextField label="Username" className="input" />
                        <TextField label="Password" className="input" />
                        <Button variant="contained" color="primary">  Register</Button>

                    </Grid>
                </Paper>
            </form>
    </>

  )
}

export default Login