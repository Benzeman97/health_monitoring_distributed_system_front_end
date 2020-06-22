import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Typography from '@material-ui/core/Typography';
import { makeStyles, emphasize } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Keto=() =>{
  const classes = useStyles();

  const [keto,setKeto]=useState({pActivity:'',meat:'',veggies:'',products:'',day:'',which:''})

  const submitHandler= event =>
  {
             event.preventDefault();
             axios.get('http://localhost:8092/common/keto',keto);
             console.log(keto);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
           <FastfoodIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Keto Planing
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <label>Physical Activity</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="pactivity"
              name="pactivity"
            placeholder="Ex : No Physical Activity or Exercise 1-2/weeks or Exercise 5-6/weeks"
            value={keto.pActivity} onChange={e=>setKeto({...keto,pActivity:e.target.value})}
            />
          
             <label>Meat</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="meat"
              name="meat"
            placeholder="Ex : Chicken, Pork, Beef, Fish, Bacon or No Meat"
           value={keto.meat} onChange={e=>{setKeto({...keto,meat:e.target.value})}}
            />
              <label>Veggies</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="veggies"
              name="veggies"
            placeholder="Ex : Broccoli, Mushrooms, Zucchini, Cauliflower, Avocado"
            value={keto.veggies} onChange={e=>{setKeto({...keto,veggies:e.target.value})}}
            />
              <label>Products</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="products"
              name="products"
            placeholder="Ex : Egg, Nuts, Cheese, Butter, Coconut, Tofu"
            value={keto.products} onChange={e=>{setKeto({...keto,products:e.target.value})}}
            />
              <label>Describe A Typical Day For You</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="day"
              name="day"
            placeholder="Ex : At The Office or Manual Labor or I Mostly Stay At Home"
            value={keto.day} onChange={e=>{setKeto({...keto,day:e.target.value})}}
            />
              <label>Which Of The Following Is True For You</label>
          <input
              variant="outlined"
              margin="normal"
              required
              type="text"
              id="which"
              name="which"
            placeholder="Ex : I do not get enough sleep or I ate at night or None of the above"
            value={keto.which} onChange={e=>{setKeto({...keto,which:e.target.value})}}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Get Your Plan
            </Button>
           
          
          </form>
        </div>
      </Grid>
    </Grid>
  );
}