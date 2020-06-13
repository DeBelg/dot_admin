import React from "react";
import clsx from "clsx";
import { withTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
// Icons
// Icons
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  FirstPage as FirstPageIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// end Icons
import styles from "./styles";
// Components
import PrivateRoute from "../../../components/private_route";
import ApartmentView from "../apartments";
import AddApartment from "../add_apartments";
import ApartmentDetails from '../apartment_details';
import Breadcrumb from "../../../components/breadcrumb";

class Home extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  _handleLogout = () => {
    const { history, actions } = this.props;
    actions.logout(history);
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              DOT - Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerOpen}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/admin/apartments">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Apartments"} />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
            <ListItem button onClick={this._handleLogout}>
              <ListItemIcon>
                <FirstPageIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
          style={{ marginTop: 80, padding: "20px 20px 20px 20px" }}
        >
          <Breadcrumb />
          <div className={classes.drawerHeader} />
          <PrivateRoute
            exact
            path="/admin/apartments"
            logged={this.props.user.logged}
            component={ApartmentView}
          />
          <PrivateRoute
            path="/admin/apartments/add"
            logged={this.props.user.logged}
            component={AddApartment}
          />
          <PrivateRoute
            path="/admin/apartments/details/:id"
            logged={this.props.user.logged}
            component={ApartmentDetails}
          />
        </main>
      </div>
    );
  }
}

const HomeWithStyles = styles(Home);

export default withTheme(HomeWithStyles);
