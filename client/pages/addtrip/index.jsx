import React from "react";
import dynamic from "next/dynamic";
import MyAlert from "../../components/alert/Alert";

const FormInput = dynamic(() => import("../../components/addTrip/addTrip"), {
    ssr: false,
});

export default function Index() {
    return (
        <div style={{ minHeight: "81.9vh", marginTop: "70px" }}>
            <MyAlert />
            <FormInput />
        </div>
    );
}
