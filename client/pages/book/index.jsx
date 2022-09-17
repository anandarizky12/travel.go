import React from "react";
import Pay from "../../components/book/Pay";
import withAuth from "../../components/utils/isAuth";

function Book() {
    return (
        <div style={{ minHeight: "81.9vh", marginTop: "60px" }}>
            <Pay />
        </div>
    );
}

export default withAuth(Book);
