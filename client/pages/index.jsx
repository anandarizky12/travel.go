import React, { useEffect } from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Branding from "../components/card_branding/Branding";
import Content from "../components/Content/Content";
import { useSelector } from "react-redux";
import Admin from "../components/admin/Admin";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("../components/loading/Loading"), {
    ssr: false,
});

export default function Home() {
    const user = useSelector((state) => state.userLogin);
    const { userInfo } = user;
    const [mounted, setMounted] = React.useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!userInfo) {
            router.push("/login");
        }
    }, [userInfo]);

    if (typeof window !== "undefined") {
        if (!userInfo) {
            return <Loading />;
        }
    }
    return (
        <div>
            {mounted && userInfo?.userData.admin == true ? (
                <Admin />
            ) : (
                <>
                    <Jumbotron />
                    <Branding />
                    <Content />
                </>
            )}
        </div>
    );
}
