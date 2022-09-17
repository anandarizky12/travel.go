import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";

const UserOrderTable = dynamic(
    () => import("../../components/profile/UserOrder"),
    {
        ssr: false,
        // eslint-disable-next-line react/display-name
        loading: () => <CircularProgress size={12} />,
    }
);

const useStyles = {
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
};
function Index() {
    return (
        <div style={useStyles.container}>
            <Typography style={useStyles.title} variant="h4">
                Your Order
            </Typography>
            <UserOrderTable />
        </div>
    );
}

export default Index;
