import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth:'275',
    border:"2px solid lightgray",
    boxShadow:"5px 5px 10px lightgray",
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.5)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 2,
    color:"black"
    
  },
});
const Details = ({data,button}) => {
  const {title,body}=data
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={10} style={{margin:"auto"}}>
        <Card className={classes.root}>

          <CardContent>           
            <Typography variant="h6" component="" className={classes.pos} color="textSecondary">
              {title}
              </Typography>
              <Typography  variant="p" component="p">
              {body}             
            </Typography>
          </CardContent>

          <CardActions>
            <div style={{margin: 'auto'}}>                
                {button && <a style={{textDecoration:"none"}} href={`detailsinfo/${data.id}`}><Button variant="contained" color="secondary" size="small">Know Details</Button> </a>   }
            </div>             
          </CardActions>

        </Card>
      </Grid>
    </Grid>
  );
};

export default Details;