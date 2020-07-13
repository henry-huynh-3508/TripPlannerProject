import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CityDropdown2(props) {
  const classes = useStyles();
  const [city, setCity] = React.useState("Edmonton");
  const [open, setOpen] = React.useState(false);

  const handleClose = (cityID, cityName) => {
    setOpen(false);
    setCity(cityName);
    props.onCityChange(cityID);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Please select a city
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
        >
          {props.cities.map((city, index) => (
            <MenuItem
              value={city.Name}
              key={index}
              onClick={() => handleClose(city.ID, city.Name)}
            >
              <ListItemText primary={city.Name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
