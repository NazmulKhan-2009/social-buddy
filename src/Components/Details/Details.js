import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth:'275',
    
    
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
    
  },
});
const Details = ({data,text}) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;


  return (
    <Grid container spacing={2}>

  <Grid item xs={10} style={{margin:"auto"}}>

    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        <Typography className={classes.pos} color="textSecondary">
        {data.title}
        </Typography>
        <Typography variant="body2" component="p">
        {data.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <div style={{margin: 'auto'}}>

      <a href={`detailsinfo/${data.id}`}><Button  size="small">{text}</Button> </a>  
      
      </div>
        
      </CardActions>
    </Card>

    </Grid>
    </Grid>
  );
};

export default Details;