import React, {useState} from "react";
import { withFirebase } from '../../firebase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';





const Login = ({firebase}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitting = () => {
        firebase.doSignInWithEmailAndPassword(email, password)
    }
  return (

    <>
      <form  onSubmit={submitting}>
        <Paper className="paper">
          <Grid container direction="column" justify="center" alignItems="center">
            <FormControl className="input">
              <InputLabel htmlFor="component-helper">email</InputLabel>
              <Input
                type="text"
                id="component-helper"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl className="input">
              <InputLabel htmlFor="component-helper">password</InputLabel>
              <Input
                type="text"
                id="component-helper"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="component-helper-text"
              />
            </FormControl>
            
            <Button variant="contained" color="primary" type="submit">  Register</Button>

          </Grid>
        </Paper>
      </form>
    </>

  )
}

export default withFirebase(Login) 