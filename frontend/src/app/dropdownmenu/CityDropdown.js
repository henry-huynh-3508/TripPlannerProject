import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./CityDropdown.css";

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

export default function CityDropdown(props) {
  const classes = useStyles();
  const [city, setCity] = React.useState("Edmonton");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (cityID, cityName) => {
    setCity(cityName);
    props.onCityChange(cityID);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        <div className="citydropdownlabel">Please select a city</div>
      </Button>
      <FormControl className={classes.formControl}>
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
              onClick={() => handleChange(city.ID, city.Name)}
            >
              <div className="dropdowncitytext">{city.Name}</div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
