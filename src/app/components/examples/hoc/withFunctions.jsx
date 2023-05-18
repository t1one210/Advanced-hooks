import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = Boolean(localStorage.getItem("auth"));
    console.log(isAuth);
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            <CardWrapper>
                {
                    <Component
                        {...props}
                        isAuth={isAuth}
                        onLogin={onLogin}
                        onLogOut={onLogOut}
                    />
                }
            </CardWrapper>
        </>
    );
};

export default withFunctions;
