import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import logo from '../images/SmartDrink.jpg'
import TextField from '@material-ui/core/TextField';

// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin:'auto',
    padding:15,
    maxWidth:'25%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btnContainerLoginDer:{
    width: '50%',
    textAlign: 'right'
  },
  btnContainerLoginIzq:{
    width: '50%',
    textAlign: 'left'
  },
  textFielContent:{

  }
});

export default function Login() {
  const classes = useStyles();

  return (

    <form className={classes.root} noValidate autoComplete="off">
        <Card className={classes.card}>

          <CardMedia
            className={classes.media}
            image={logo}
            title="Smart Drink"
          />
          <CardContent>
          
            <TextField required fullWidth id="outlined-basic" label="Usuario o Mail" variant="outlined" />
          
          </CardContent>
          <CardContent>
            <TextField required fullWidth id="outlined-password-input" label="Password" type="password" 
                      autoComplete="current-password"
                      variant="outlined"
            />
          
          </CardContent>
          <CardActions>
            <div className={classes.btnContainerLoginIzq}>
              <Button variant="text" color="default">
                Crear Cuenta
              </Button>
            </div>
            <div className={classes.btnContainerLoginDer}>
              <Button variant="contained" color="primary">
                Siguiente 
              </Button>
            </div>
          </CardActions>
        </Card>
    </form>
  );
}
