import React from "react";
import UserOrderTable from "../../components/profile/UserOrder";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",

        margin: "30px",
        marginTop: "30px",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 300,
        marginBottom: "30px",
    },
}));
function Index() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h4">
                Your Order
            </Typography>
            <UserOrderTable />
        </div>
    );
}

export default Index;
