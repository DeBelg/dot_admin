import { GoogleApiWrapper } from "google-maps-react";

const GoogleMapsClient = GoogleApiWrapper({
  apiKey: "AIzaSyA4NfZiXPXkw7vgViW_vGgYOzwl8NUlT9E",
  libraries: ["places", "visualization"]
});

export default GoogleMapsClient;
