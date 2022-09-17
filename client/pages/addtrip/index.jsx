import React from "react";
import dynamic from "next/dynamic";
import MyAlert from "../../components/alert/Alert";
import withAuth from "../../components/utils/isAuth";

const FormInput = dynamic(() => import("../../components/addTrip/addTrip"), {
    ssr: false,
});

function Index() {
    return (
        <div style={{ minHeight: "81.9vh", marginTop: "70px" }}>
            <MyAlert />
            <FormInput />
        </div>
    );
}

export default withAuth(Index);
