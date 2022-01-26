import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ViewListIcon from '@mui/icons-material/ViewList';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

import {Link} from 'react-router-dom'

function FooterNav () {
    return ( 
    <>
        <nav>
            <div className="nav-wrapper">
                <BottomNavigation
                showLabels
                >
                    <Link to="/">
                        <BottomNavigationAction label="Control Panel" icon={<KitchenIcon />} />
                    </Link>
                    <Link to="/Products">
                        <BottomNavigationAction label="Inventory" icon={<ViewListIcon />} />
                    </Link>
                    <Link to="/Dashboard">
                        <BottomNavigationAction label="Dashboard" icon={<DataThresholdingIcon />} />
                    </Link>
                
                </BottomNavigation>
            </div>
            
        </nav>     
    </> 
    );
}

export default FooterNav;