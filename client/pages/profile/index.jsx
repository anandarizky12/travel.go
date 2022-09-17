import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../components/profile";
import withAuth from "../../components/utils/isAuth";

function MainProfile() {
    const userLogin = useSelector((state) => state.userLogin);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);
    const { userInfo } = userLogin;

    return (
        <div style={{ marginTop: "5px" }}>
            {mounted && userInfo ? (
                <div>
                    <Profile user={userInfo.userData} />
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    );
}

export default withAuth(MainProfile);
