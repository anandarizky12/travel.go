import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import AOS from "aos";
import Rating from "@material-ui/lab/Rating";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 38,
        fontWeight: "thin",
        fontFamily: "poppins",
        color: "#757575",
        [theme.breakpoints.down("xs")]: {
            fontSize: 30,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 23,
        },
    },
    subs: {
        color: "#ababab",
        fontSize: 22,
        margin: "5px 0 15px 0",
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        },
    },
    image: {
        width: "100%",
        height: 400,
        borderRadius: 7,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        [theme.breakpoints.down("xs")]: {
            height: 180,
            width: "100%",
        },
    },
    screen: {
        width: 330,
        height: 163,
        borderRadius: 5,
        backgroundColor: "hsl(220, 20%, 90%)",
        animation: "loading 0.8s infinite alternate",

        [theme.breakpoints.down("md")]: {
            height: 400,
            borderRadius: 7,
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            height: 180,
            borderRadius: 7,
            width: "100%",
        },
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
        },
    },
    reviews: {
        fontFamily: "poppins",
        color: "#757575",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
    },
    icons: {
        fontSize: "17px",
    },
    "@keyframes loading": {
        "0%": {
            backgroundColor: "hsl(220, 10%, 75%)",
        },
    },
}));

export default function Content({ item }) {
    const classes = useStyles();
    React.useEffect(() => {
        if (AOS) {
            AOS.init({
                once: true,
            });
        }
    }, [AOS]);
    return (
        <Grid container spacing={1}>
            <Grid item lg={12}>
                <Grid className={classes.titleContainer}>
                    <Typography variant="h4" className={classes.title}>
                        {item.title}
                        &nbsp;
                    </Typography>
                    <Rating
                        size="small"
                        name="read-only"
                        value={item.rating}
                        readOnly
                    />
                    &nbsp;
                    <Typography className={classes.reviews}>
                        {" "}
                        {item.numReviews}{" "}
                        <PersonIcon className={classes.icons} />
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md={12} lg={12}>
                <img
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    src={`${process.env.NEXT_API}/images/${item.image}`}
                    className={classes.image}
                    alt=""
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} className={classes.screenWrap}>
                <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    src={`${process.env.NEXT_API}/images/${item.screen1}`}
                    className={classes.screen}
                    alt=""
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} className={classes.screenWrap}>
                <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    src={`${process.env.NEXT_API}/images/${item.screen2}`}
                    className={classes.screen}
                    alt=""
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} className={classes.screenWrap}>
                <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    src={`${process.env.NEXT_API}/images/${item.screen3}`}
                    className={classes.screen}
                    alt=""
                />
            </Grid>
            {/* </div> */}
        </Grid>
    );
}
