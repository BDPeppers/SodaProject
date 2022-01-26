import React from 'react';
import InventoryCardList from './inventoryCardList/InventoryCardList'


function Products() {
    return ( 
    <>
        <section className="product-page page">
            <InventoryCardList/>
            <div className="icons8">
                <a target="_blank" href="https://icons8.com/icon/0OM4gSwS9wED/soda">Soda</a><a target="_blank" href="https://icons8.com"> icon by Icons8</a>
            </div>
        </section>
    </> 
    );
}

export default Products;