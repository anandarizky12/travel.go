import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

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
