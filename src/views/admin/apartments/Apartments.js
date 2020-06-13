import React from "react";
import {
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import ApartmentCardList from "../../../components/apartment_card_list";
import Snackbar from "../../../components/snackbar";

class ApartmentView extends React.Component {
  constructor(props) {
    super(props);
    props.actions.getCityList();
    props.actions.getApartments();
    const { state } = props.location;
    this.state = {
      open: state !== undefined ? state.save : false,
      city: props.apartments.cities[0]
    };
  }

  _handleClose = () => {
    this.setState({ open: !this.state.open }, () => {
      this.props.location.state = undefined;
    });
  };

  _handleChangeCity = event => {
    this.setState({ city: event.target.value });
    const { getApartmentsByCity } = this.props.actions;
    getApartmentsByCity(event.target.value);
  };

  render() {
    const { apartments, cities } = this.props.apartments;
    const { state } = this.props.location;
    const messageState =
      state !== undefined && state.save !== undefined ? state.save : undefined;
    console.log('APARTMENTS', apartments)
    return (
      <div>
        <h1>Apartments</h1>
        <div style={{ marginBottom: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <FormControl>
            <InputLabel htmlFor="city-simple">City</InputLabel>
            <Select
              value={this.state.city}
              onChange={this._handleChangeCity}
              inputProps={{
                name: "City",
                id: "city-simple"
              }}
            >
              {cities.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <Link to="/admin/apartments/add" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" style={{ marginTop: 30 }}>
                Add Apartment
              </Button>
            </Link>
          </FormControl>
        </div>
        <ApartmentCardList data={apartments} />
        <Snackbar
          open={this.state.open}
          message={
            messageState
              ? "The apartment was saved successfuly"
              : "There was an errorr while trying to save the apartment"
          }
          onClose={this._handleClose}
          type={messageState ? "success" : "error"}
        />
      </div>
    );
  }
}

export default withRouter(ApartmentView);
