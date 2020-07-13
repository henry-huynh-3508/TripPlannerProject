import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 120,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DailyWeatherCard(props) {
  const classes = useStyles();
  const mintemperature = Math.round(props.mintemperature);
  const maxtemperature = Math.round(props.maxtemperature);
  const description = props.description;
  const dayofweek = props.dayofweek;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {mintemperature}
          {"\xB0"}C - {maxtemperature}
          {"\xB0"}C
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {dayofweek}
        </Typography>
      </CardContent>
    </Card>
  );
}
