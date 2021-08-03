import pic2 from '../../assets/gymgoer2.jpeg'
import pic3 from '../../assets/gymgoer3.jpeg'
import pic4 from '../../assets/gymgoer4.jpeg'
import pic5 from '../../assets/gymgoer5.jpeg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 550,
  },
  card: {
    // 'margin-left': '50%',
    // width: "90%",
  },
});
export default function ImgMediaCard() {
  const classes = useStyles();
  return (
      <div>
        <Container >
        <div style={{ fontSize: '30px' , color: 'white', textAlign: 'center', fontFamily: 'Encode Sans SC', display: 'inline-block' }}>
                    YOUR
          </div>
                {'   '}
                <div style={{ fontSize: '50px' ,fontFamily: "permanent marker", color: 'rgba(233, 214, 107, 0.637)', textAlign: 'center', display: 'inline-block' }}>
                    MuscleMates!
          </div>
        </Container>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="550"
          image={pic2}
          title="Contemplative Reptile"
        />
        <CardContent  >
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Encode Sans SC', fontSize:'40px'}}>
            Jacob Black
          </Typography>
          <Typography >
            This is my bio, I like to do lift and do cardio. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large"  style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC', textAlign: 'center' }}>
          More Info
        </Button>
      </CardActions>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          image={pic3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Encode Sans SC', fontSize:'40px'}}>
            Jacob Black
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my bio, I like to do lift and do cardio. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large"  style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC', textAlign: 'center' }} >
          More Info
        </Button>
      </CardActions>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          image={pic4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Encode Sans SC', fontSize:'40px'}}>
            Jacob Black
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my bio, I like to do lift and do cardio. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large"  style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC', textAlign: 'center' }} >
          More Info
        </Button>
      </CardActions>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          image={pic5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Encode Sans SC', fontSize:'40px'}}>
            Jacob Black
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my bio, I like to do lift and do cardio. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large"  style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC', textAlign: 'center' }}>
          More Info
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}