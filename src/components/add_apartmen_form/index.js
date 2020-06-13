import React, { Component } from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import { Map, Marker } from "google-maps-react";
import { storePicture, storePic } from "../../redux/actions/ApartmentsActions";
import GoogleMapsClient from "../../config/GoogleMaps";

class AddApartmentForm extends Component {
  constructor(props) {
    super(props);
    this.searchBox = null;
    this.map = null;
    this.location = {};
    this.state = {
      bounds: {},
      address: "",
      availableFrom: new Date(),
      bedrooms: 1,
      price: 0,
      place: {},
      pics: [],
      latitude: "",
      longitude: ""
    };
  }

  handleChange = where => event => {
    this.setState({ [where]: event.target.value });
  };

  _handleSearchBox = node => {
    const { google } = this.props;
    const searchBox = new google.maps.places.SearchBox(node);
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      const placeData = this._handleFilterAddressData(places[0]);
      this.setState({
        address: places[0].formatted_address,
        place: placeData
      });
      let markers = [];
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: this.map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        const location = place.geometry.location;
        this.location = location;
        this.setState({
          latitude: location.lat(),
          longitude: location.lng()
        });
      });
      this.setState({ bounds });
    });
  };

  _handleMap = node => {
    this.map = node;
  };

  getUrls = async item => { };

  _handleSubmit = async event => {
    event.preventDefault();
    const picsPromise = this.state.pics.map(async item => {
      return await storePic(item, this.state.place.locality);
    });
    const pics = await Promise.all(picsPromise);
    const {
      address,
      availableFrom,
      bedrooms,
      price,
      latitude,
      longitude,
      place
    } = this.state;
    const apartmentData = {
      address,
      availableFrom,
      bedrooms,
      price,
      latitude,
      longitude,
      place,
      pics
    };
    this.props.handleSubmit(apartmentData);
  };

  _handleFilterAddressData = (data = {}) => {
    const filteredData = Object.assign(
      {},
      ...data.address_components.map(item => ({
        [item.types[0]]: item.long_name
      }))
    );
    return filteredData;
  };

  _handleChangeFiles = event => {
    const files = event.target.files;
    this.setState({ pics: Array.from(files) });
  };

  render() {
    const { address, availableFrom, bedrooms, price } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Paper
          elevation={2}
          style={{
            padding: "40px 40px 40px 40px",
            display: "flex",
            flexDirection: "column",
            width: 400
          }}
        >
          <form
            autoComplete="off"
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this._handleSubmit}
          >
            <span>New Apartment</span>
            <TextField
              id="address-textfield"
              required
              fullWidth
              label="Address"
              value={address}
              onChange={this.handleChange("address")}
              margin="normal"
              style={{ marginTop: 20 }}
              inputRef={this._handleSearchBox}
            />
            <TextField
              id="availableFrom-textfield"
              required
              fullWidth
              type={"date"}
              label="Available From"
              value={availableFrom}
              onChange={this.handleChange("availableFrom")}
              margin="normal"
              style={{ marginTop: 20 }}
            />
            <TextField
              id="bedrooms-textfield"
              required
              fullWidth
              type={"number"}
              label="Beedrooms"
              value={bedrooms}
              onChange={this.handleChange("bedrooms")}
              margin="normal"
              style={{ marginTop: 20 }}
            />
            <TextField
              id="price-textfield"
              required
              fullWidth
              type={"number"}
              label="Price From"
              value={price}
              onChange={this.handleChange("price")}
              margin="normal"
              style={{ marginTop: 20 }}
            />
            <label htmlFor="file-input-pics">
              <Button
                variant="contained"
                color="secondary"
                component="span"
                style={{ marginTop: 30 }}
                fullWidth
              >
                Select Pictures
                <input
                  id="file-input-pics"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  multiple
                  onChange={this._handleChangeFiles}
                />
              </Button>
            </label>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 30 }}
              fullWidth
              onClick={this._handleSubmit}
            >
              Save
            </Button>
          </form>
        </Paper>
        <div style={{ marginLeft: 50 }}>
          <Map
            google={this.props.google}
            style={{ width: "50%", height: 400 }}
            ref={this._handleMap}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}
            zoom={15}
            bounds={this.state.bounds}
          >
            <Marker position={this.location} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleMapsClient(AddApartmentForm);
