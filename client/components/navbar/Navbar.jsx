import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import SearchBar from "./SearchBar";
import { logout } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Router from "next/router";
import { Grid } from "@material-ui/core";
import { useLoaded } from "../../utils/hook";
import UserMenu from "./User";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: 70,
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
    bottom: {
        display: "flex",
        justifyContent: "center",
        height: 4,
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            justifyContent: "space-around",
        },
    },
    ul: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
        width: "30%",
        fontWeight: "light",
        color: "#757575",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    ulIcons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
        width: "70%",
        fontWeight: "light",
        color: "#757575",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    searchIcon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "65%",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        right: 50,
        justifyContent: "space-between",
        alignItems: "center",
        width: "10%",
    },
    logo: {
        fontFamily: "Poppins",
        [theme.breakpoints.down("xs")]: {
            fontSize: 25,
        },
        "&:hover": {
            cursor: "pointer",
        },
    },
    user: {
        marginLeft: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        color: "#757575",
        fontFamily: "Poppins",
        "&:hover": {
            color: "#bdbdbd",
            cursor: "pointer",
        },
    },
    text1: {
        fontFamily: "Poppins",
    },
    nav: {
        "&:hover": {
            color: "#bdbdbd",
            cursor: "pointer",
        },
    },
}));

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar(props) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const loaded = useLoaded();

    const logoutHandler = () => {
        dispatch(logout(dispatch));
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.top}>
                        <Typography
                            onClick={() => Router.push("/")}
                            className={classes.logo}
                            variant="h3"
                        >
                            TRAVEL.go
                        </Typography>
                        <Grid className={classes.icons}>
                            {/* Search Bar Drawer one pack*/}
                            <SearchBar
                                openDrawer={openDrawer}
                                setOpenDrawer={setOpenDrawer}
                                drawerState=""
                            />
                            {userInfo && loaded ? (
                                //  <Grid onClick={()=>Router.push('/profile')} className={classes.user}>
                                //      <PersonOutlineIcon />
                                //      <Typography className={classes.text1} variant="subtitle2" > {userInfo.userData.username}</Typography>
                                //  </Grid>
                                <UserMenu
                                    user={userInfo.userData}
                                    logout={logoutHandler}
                                />
                            ) : (
                                <Grid
                                    onClick={() => Router.push("/login")}
                                    className={classes.user}
                                >
                                    <ExitToAppIcon />
                                    <Typography
                                        className={classes.text1}
                                        variant="subtitle2"
                                    >
                                        Login
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Toolbar>

                    {/* <Toolbar className={classes.bottom}>
                <div className={classes.ulIcons}>
                      <HomeIcon className={classes.navIcon}/>
                      <HomeIcon className={classes.navIcon}/>
                      <HomeIcon className={classes.navIcon}/>
                      <HomeIcon className={classes.navIcon}/>
                </div>
                <div className={classes.ul}>
                    <Typography className={classes.nav} onClick={()=>Router.push('/')} variant="subtitle1">Home</Typography>
                    <Typography className={classes.nav} onClick={()=>Router.push('/profile')} variant="subtitle1">Profile</Typography>
                    <Typography className={classes.nav} variant="subtitle1">Transaction</Typography>
                    <Typography className={classes.nav} variant="subtitle1">Order</Typography>
                </div>
          </Toolbar> */}
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
