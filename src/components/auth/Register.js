import React, { useState } from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../../firebase';

import './auth.css';



const Register = ({ firebase }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitting = () => {
        firebase.doCreateUserWithEmailAndPassword(email, password)
    }
    return (

        <>
            <form noValidate autoComplete="off" onSubmit={submitting()} >
                <Paper className="paper">
                    <Grid container direction="column" justify="center" alignItems="center">
                        <FormControl className="input">
                            <InputLabel htmlFor="component-helper">User Name</InputLabel>
                            <Input
                                type="text"
                                id="component-helper"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-describedby="component-helper-text"
                            />
                        </FormControl>
                        <FormControl className="input">
                            <InputLabel htmlFor="component-helper">Email</InputLabel>
                            <Input
                                type="email"
                                id="component-helper"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-describedby="component-helper-text"
                            />
                        </FormControl><FormControl className="input">
                            <InputLabel htmlFor="component-helper">Password</InputLabel>
                            <Input
                                type="password"
                                id="component-helper"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-describedby="component-helper-text"
                            />
                        </FormControl>
                        <Button variant="contained" color="primary" type="submit" >  Register</Button>

                    </Grid>
                </Paper>
            </form>
        </>

    )
}

export default withFirebase(Register) 