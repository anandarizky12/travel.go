import React from "react";
import SearchResult from "../../components/search/SearchResult";
import withAuth from "../../components/utils/isAuth";

function Search() {
    return (
        <div>
            <SearchResult />
        </div>
    );
}

export default withAuth(Search);
