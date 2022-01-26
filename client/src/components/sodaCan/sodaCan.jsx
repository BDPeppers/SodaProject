import React from "react";

//soda information will be passed as props to sodacan component
export default function SodaCan(props) {
    return(
        <>
        <img
            alt="soda can icon"
            src={`https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/100/${props.color}/external-soda-fast-food-vitaliy-gorbachev-fill-vitaly-gorbachev.png`}
        />
        </>
    );
}
