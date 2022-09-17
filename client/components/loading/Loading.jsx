import { CircularProgress } from "@material-ui/core";
import React from "react";

const style = {
    containerLoading: {
        display: "flex",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        background: "white",
        zIndex: 10000,
    },
};

function Loading() {
    return (
        <div style={style.containerLoading}>
            <CircularProgress size={96} style={{ color: "blue" }} />
        </div>
    );
}

export default Loading;
