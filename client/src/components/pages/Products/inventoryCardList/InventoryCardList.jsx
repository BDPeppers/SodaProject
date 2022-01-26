import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSodaData } from "../../../../redux/sodaOperations/sodaSlice";
import InventoryCard from "../invertoryCard/InventoryCard";


//test object
const sodaTest = [
  {"_id":{"$oid":"61c8cef81aca48e3ce06ace0"},"name":"Cola","desc":"A basic no nonsense cola that is the perfect pick me up for any occasion.","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"F6AF65"},
  {"_id":{"$oid":"61c8cf571aca48e3ce06ace1"},"name":"MegaPop","desc":"Not for the faint of heart. So flavorful and so invigorating, it should probably be illegal.","price":"1.0","quantity":"25","maxQuantity":"50","available":true,"hexColorCode":"823038"},
  {"_id":{"$oid":"61c8cf6b1aca48e3ce06ace2"},"name":"Pop","desc":"An explosion of flavor that will knock your socks off!","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"00C2D1"},
  {"_id":{"$oid":"61c8cf9f1aca48e3ce06ace3"},"name":"Fizz","desc":"An effervescent fruity experience with hints of grape and coriander.","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"F9E900"}
]


//soda information will be fetched from this compnent and passed down to children
//will need to re-render component after data update
export default function InventoryCardList() {

const dispatch = useDispatch()

const sodaData = useSelector(state => state.sodaState.sodas)

useEffect(() => {
  dispatch(fetchSodaData())
  setSoda(sodaData)
}, [])

const [sodas, setSoda] = React.useState([]);

console.log(sodaData)
console.log(sodas)
    return(
        <div className='card-list'>
          {sodas.map(soda => (
            <InventoryCard key={soda._id.$oid} soda={soda} />
          ))}
        </div>
    );
}