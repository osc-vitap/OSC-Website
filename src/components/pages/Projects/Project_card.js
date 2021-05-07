import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 40px 5px",
  },
});

function Project_card({imgurl, title, caption, githublink, link}) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea href = {link}>
          <CardMedia
            component="img"
            alt={title}
            height="100%"
            image={imgurl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{"minHeight" :"150px"}}>
            {caption}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing ="true">
          
          <Button variant = "outlined" color="primary" href = {githublink} target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project_card;
