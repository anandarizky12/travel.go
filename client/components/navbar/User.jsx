import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import {
  IconButton,
  Collapse,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Avatar,
  Divider,
  Box,
} from "@material-ui/core";
import Link from "../../src/Link";

function randomColor(string) {
  return "#f" + string.slice(1, 6);
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  menuMobileWrapper: {
    backgroundColor: "#757575",
    color: "#ccc",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderBottom: "17px solid white",
    position: "absolute",
    top: -7,
    right: theme.spacing(2.7),
  },
  menu: {
    marginLeft: 13,
    fontSize: 16,
    fontFamily : 'poppins',
    fontWeight: "500",
    color: "black",
    [theme.breakpoints.down("md")]: {
      color: "gray",
      marginLeft: 5,
      fontSize: 14,
      fontFamily : 'poppins',
      fontWeight: "500",
      

    },
  },
  icon: { marginLeft: 20 },
  menuItem: {
    "&:hover": {
      backgroundColor: "#444",
    },
  },
  avatar: {
    fontWeight: "bold",
    fontSize: 15,
    [theme.breakpoints.up("lg")]: {
      width: 35,
      height: 35,
      // position: "absolute",
    },
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
      // position: "absolute",
    },
   
  },
  paper : {
      width: 220,
      marginTop: "3%",
      [theme.breakpoints.down("md")]: {
        width: 125,
        height : 200
      },
  },
  menuItem : {
    [theme.breakpoints.down("md")]: {
      height : 5,
    }
  },
  iconButton:{
    width : "7px",
    height : "4px"
}
}));

export default function UserMenu({ user, logout, drawerState }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const router = useRouter();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    };

    setOpen(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    router.push("/");
    logout();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        size = "small"
      >
        <Avatar
          className={classes.avatar}
          src={`http://localhost:5000/images/${user.profile}`}
          style={{
            backgroundColor: randomColor(user.phone ? user.phone : "pink"),
          }}
        >
          {user?.username?.slice(0, 1).toUpperCase()}
        </Avatar>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom-end"
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Collapse
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper} >
              <Box variant="div" className={classes.arrow} />
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown = {handleListKeyDown}
                >
                  {user.role === "Admin" ? (
                    <Box variant="div">
                      <MenuItem
                        component={Link}
                        href="/trip"
                        onClick={handleClose}
                        style={{ marginTop: 5 }}
                      >
                        <img
                          src="/journey.png"
                          className={classes.icon}
                          alt=""
                        />{" "}
                        <span className={classes.menu}>Trip</span>
                      </MenuItem>
                      <Divider
                        style={{ height: 3, marginTop: 10, marginBottom: 10 }}
                      />
                      <MenuItem onClick={handleLogout}>
                        <img
                          src="/logout.png"
                          className={classes.icon}
                          alt=""
                        />{" "}
                        <span className={classes.menu}>Logout</span>
                      </MenuItem>
                    </Box>
                  ) : (
                    <Box variant="div">
                      <MenuItem>
                        <span className={classes.menu}>-</span>
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href={`/profile`}
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        <img src="/user.png" className={classes.icon} alt="" />{" "}
                        <span className={classes.menu}>Profile</span>
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href={`/pay/`}
                        onClick={handleClose}
                      >
                        <img src="/bill.png" className={classes.icon} alt="" />{" "}
                        <span className={classes.menu}>Pay</span>
                      </MenuItem>
                      <Divider
                        style={{ height: 3, marginTop: 20, marginBottom: 10 }}
                      />
                      <MenuItem onClick={handleLogout}>
                        <img
                          src="/logout.png"
                          className={classes.icon}
                          alt=""
                        />{" "}
                        <span className={classes.menu}>Logout</span>
                      </MenuItem>
                    </Box>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Collapse>
        )}
      </Popper>
    
    </div>
  );
}