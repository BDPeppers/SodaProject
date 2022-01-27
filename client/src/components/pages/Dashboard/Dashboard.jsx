import React, { useEffect } from 'react';
import { fetchSodaData } from '../../../redux/sodaOperations/sodaSlice';
import {useSelector, useDispatch} from 'react-redux';
import DataCard from './Piechart/DataCard/DataCard';
const testStats = [
    {"soda" : "Cola", "purchased": 58, color: '#d1e7ff'},
    {"soda" : "Fizz", "purchased" : 62, color: '#9cbcff'},
    {"soda" : "MegaPop", "purchased" : 31, color: '#fe4f60'},
    {"soda" : "Pop", "purchased" : 93, color: '#3961ff'}
  ]
  
function Dashboard() {
    const dispatch = useDispatch()
    const sodaData = useSelector(state => state.sodaState.sodas)
    
    const [sodas, setSoda] = React.useState([sodaData]);
    useEffect(() => { 
        dispatch(fetchSodaData())
        setSoda(sodaData)
    },[sodaData])

    

    return ( 
    <>
        <section className="dashboard-page page">
            <DataCard data={sodas}/>
        </section>
    </>
     );
}

export default Dashboard;