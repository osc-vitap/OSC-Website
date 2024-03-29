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
    margin:30,
  },
  media: {
    height: 140,
  },
});

function Project_card({imgurl, title, caption, githublink, link}) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea href = {link}>
          <CardMedia
            className={classes.media}
            component="img"
            alt={title}
            image={imgurl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{"minHeight" :"200px"}}>
            {caption}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Button variant = "outlined" color="primary" href = {githublink} target="_blank">
            View on GitHub
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project_card;
