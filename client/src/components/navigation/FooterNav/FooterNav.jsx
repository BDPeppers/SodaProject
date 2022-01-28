import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ViewListIcon from '@mui/icons-material/ViewList';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { purchaseSuccess } from '../../../redux/sodaOperations/sodaSlice';

function FooterNav () {
    const dispatch = useDispatch()
    return ( 
    <>
        <nav>
            <div className="nav-wrapper footer-nav">
                <BottomNavigation
                showLabels
                >
                    <Link to="/">
                        <BottomNavigationAction icon={<KitchenIcon />} />
                    </Link>
                    <Link to="/Products" onClick={() => dispatch(purchaseSuccess(false))}>
                        <BottomNavigationAction icon={<ViewListIcon />} />
                    </Link>
                    <Link to="/Dashboard" onClick={() => dispatch(purchaseSuccess(false))}>
                        <BottomNavigationAction icon={<DataThresholdingIcon />} />
                    </Link>
                
                </BottomNavigation>
            </div>
            
        </nav>     
    </> 
    );
}

export default FooterNav;