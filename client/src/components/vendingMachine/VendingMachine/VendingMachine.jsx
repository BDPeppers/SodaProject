import React from "react";
import ControlPanel from "../ControlPanel/ControlPanel";



export default function VendingMachine () {
    return(

        <div className="vendingMachineBox">
            <ControlPanel btnText="Control Panel" className="controlPanel-btn"/>
            <img 
                src="https://ik.imagekit.io/0ef3zk1rums/ColaCo/vendingmachine_pMJHYQypT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366713242"
                alt="vendingMachine"
                className="vendingMachineImg"
             />
        </div>
        );
         
}

