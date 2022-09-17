import React from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import withAuth from "../components/utils/isAuth";
import { useState } from "react";
import { useEffect } from "react";

const Loading = dynamic(() => import("../components/loading/Loading"), {
    ssr: false,
});
const Jumbotron = dynamic(() => import("../components/jumbotron/Jumbotron"), {
    ssr: false,
});
const Branding = dynamic(() => import("../components/card_branding/Branding"), {
    ssr: false,
});
const Content = dynamic(() => import("../components/Content/Content"), {
    ssr: false,
});
const Admin = dynamic(() => import("../components/admin/Admin"), {
    ssr: false,
});

function Home() {
    const user = useSelector((state) => state.userLogin);
    const [mounted, setMounted] = useState(false);
    const { userInfo } = user;
    const isAdmin = userInfo?.userData.admin;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !userInfo) return <Loading />;
    return (
        <div>
            {isAdmin && <Admin />}
            {!isAdmin && (
                <>
                    <Jumbotron />
                    <Branding />
                    <Content />
                </>
            )}
        </div>
    );
}

export default withAuth(Home);
