import React from "react";
import VendingMachine from "../../vendingMachine/VendingMachine/VendingMachine";


export default function Home (){
    return(
        <>
            <section className="home-page page">
                <VendingMachine/>
            </section>
        </>
    )
}