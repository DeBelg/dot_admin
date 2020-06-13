import React from "react";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import styles from "./styles";

const Item = ({ classes, data }) => {
  return (
    <Card className={classes.card}>
      <CardHeader title={`${data.address}`} subheader={""} />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.pics[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            €{data.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.place.sublocality_level_1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.place.administrative_area_level_1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.place.administrative_area_level_2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.place.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/admin/apartments/details/${data.id}`}>
          <Button size="small" color="primary">
            Show Data
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const ItemWithStyles = styles(Item);

export default withTheme(ItemWithStyles);
