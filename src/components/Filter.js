import React from 'react';
import { Link } from "react-router-dom"

function Filter(props) {
    // remove duplicates in brand list

    const allBrands = [...new Map(props?.products.map((p) => [p.brand, p]))];
    const updatedBrands = [...new Map(allBrands.map((u) => [u[0].toLowerCase()]))]

    // to be added:
    // const alphaBrands = updatedBrands.sort((a, b) => a - b)
    // console.log(alphaBrands)

    function clickHandlerCategory(e) {
        e.target.checked ?
            props?.setFilter(prev => [...prev, e.target.name]) :
            props?.setFilter(prev => [...prev.props.filter(item => item !== e.target.name)]);
    }

    function clickHandlerPrice(e) {
        e.target.checked ?
            props?.setFilter(prev => [...prev, e.target.value]) :
            props?.setFilter(prev => [...prev.props.filter(item => item !== e.target.value)]);
    }

    function clickHandlerBrand(e) {
        e.target.checked ?
            props?.setFilter(prev => [...prev, e.target.name]) :
            props?.setFilter(prev => [...prev.props.filter(item => item !== e.target.name)]);
    }

    function clickToSelection() {
        props?.setShowFilter(!props.showFilter)
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div >
                <h2 className={props.showFilter ? `filterHeadline` : `filterHeadline filterComponentHide`}>Showing: </h2>
                {props?.filter?.map((product, index) => {
                    return <p key={index} className={props.showFilter ? `filteredByP` : `filteredByP filterComponentHide`}>{product}</p>
                })}
            </div>
            <div className={props.showFilter ? `filterComponent filterComponentHide` : ` filterComponent`}>
                <h3>Categories</h3>
                {/*SOLL DIESE H3 AUßERHALB VON NAVBAR DIV STEHEN?  */}
                <div className='navbar'>
                    <section className='categories'>
                        {props?.categories?.map((category, index) => {
                            return (
                                <section key={index}>
                                    <input onClick={clickHandlerCategory} type="checkbox" name={category} id={category} className="categoryCheckbox" />
                                    <label htmlFor={category} className="categoryLabel" >{category} </label>
                                </section>
                            )
                        })}
                    </section>
                    <h3>Price</h3>
                    <section>
                        <article className='price'>
                            <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price1" value="0 - 20 €" className='priceCheckbox' />
                            <label htmlFor="price1" className='priceLabel'>0 - 20 €</label>
                            <br />
                            <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price2" value="20 - 50 €" className='priceCheckbox' />
                            <label htmlFor="price2" className='priceLabel'>20 - 50 €</label>
                            <br />
                            <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price3" value="50 - 100 €" className='priceCheckbox' />
                            <label htmlFor="price3" className='priceLabel'>50 - 100 €</label>
                            <br />
                            <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price4" value="100 €+" className='priceCheckbox' />
                            <label htmlFor="price4" className='priceLabel'>über 100 €</label>
                        </article>
                    </section>
                    <h3>Brands</h3>
                    <section className='brands'>
                        {updatedBrands.map((item, index) => {
                            return (
                                <section key={index}>
                                    <input onClick={clickHandlerBrand} type="checkbox" name={item[0]} id={item[0]} className="brandCheckbox" />
                                    <label htmlFor={item[0]} className='brandLabel'>{item[0]}</label>
                                </section>
                            )
                        })}
                    </section>
                </div>
                <Link to={"/productlist"}>
                    <button onClick={clickToSelection} className='addToCart' type='button'>Apply Filter</button>
                </Link>
            </div >
        </div>
    )
}

export default Filter;