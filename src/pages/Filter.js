import React from 'react'
import * as CiIcons from "react-icons/ci";

function Filter() {
    return (
        <div>
            <div className='filterNav'>
                <CiIcons.CiCircleChevLeft />
                <h2>Filters</h2>
            </div>
            <div>
                <section className='categories'>
                    <h3>Categories</h3>
                </section>
                <section className='price'>
                    <h3>Price</h3>
                </section>
                <section className='brands'>
                    <h3>Brands</h3>
                </section>
            </div>
        </div>
    )
}

export default Filter