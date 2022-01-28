import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import ControlPanel from "../ControlPanel/ControlPanel";


export default function VendingMachine () {
    const dropSoda = useSelector(state => state.sodaState.dropIt)
    
    useEffect(() =>{
        setSodaAnimation(dropSoda)
        
    }, [dropSoda])
    const [sodaAnimation, setSodaAnimation] = React.useState(dropSoda)

    return(
        <div className="vendingMachineBox">
            <ControlPanel btnText="Control Panel"/>
            <img 
                src="https://ik.imagekit.io/0ef3zk1rums/ColaCo/vendingmachine_pMJHYQypT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366713242"
                alt="vendingMachine"
                className="vendingMachineImg"
             />
             <div className="soda-purchase-box" >
                 <img 
                 style={{ display: sodaAnimation }}
                 className="soda-animation"
                 src="https://ik.imagekit.io/0ef3zk1rums/ColaCo/icons8-soda-60_R31QKU8mUC8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642911019613" alt="purchased-soda"/>
             </div>
        </div>
        );
         
}

