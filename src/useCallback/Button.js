import React from "react";

const Button = React.memo(({ handleClick, children }) => {
    console.log('rendering button -', children);
    return (
        <button onClick={handleClick}>{children}</button>
    );
});

export default Button;
