import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RadioGroup, Radio,FormLabel } from '@material-ui/core';
import Axios from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const BMI = () =>{
  const classes = useStyles();

  const [bmi,setBMI]=useState({height:'',weight:'',age:'',gen:''})

 const submitHandler=(event)=>
  {
    event.preventDefault();
    Axios.get('http://localhost/8092/common/bmi',bmi);
    console.log(bmi);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <DirectionsRunIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          BMI Checker
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="height"
                name="height"
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                autoFocus
                value={bmi.height}
                onChange={e=>{
                     e.preventDefault();
                     setBMI({...bmi,height:e.target.value})
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="weight"
                label="Weight"
                name="weight"
                autoComplete="weight"
                value={bmi.weight}
                onChange={e=>{
                  e.preventDefault();
                  setBMI({...bmi,weight:e.target.value})
                }}
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                value={bmi.age}
                onChange={e=>{
                  e.preventDefault();
                  setBMI({...bmi,age:e.target.value})
                }}
              />
            </Grid>
           
            <Grid item xs={12}>
            <FormLabel component="legend">Gender</FormLabel>
   <RadioGroup aria-label="gender" name="gender1" >
    <FormControlLabel value="female" control={<Radio value="female" id="gen" name="gender" onClick={()=>setBMI({...bmi,gen:'female'})} />} label="Female" />
    <FormControlLabel value="male" control={<Radio value="male" id="gen" name="gender" onClick={()=>setBMI({...bmi,gen:"male"})} />} label="Male"/>
   
  </RadioGroup>
  
  
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            BMI Check
          </Button>
          <Grid container justify="flex-end">
           
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}