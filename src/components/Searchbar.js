import React, { useState, useEffect } from "react";

function SearchBar({ placeholder, data }) {

    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((searchData) => {
                setSearchData(searchData.products)
                console.log(searchData.products)
            })
    }, [])

    const enteredInput = (event) => {
        // jeder eingegebene Input ist ein event, den wir mit onChange im <input> erfassen und wir verfrachten das in eine funktion, mit der wir im funktionskörper noch filtern wollen
        const searchWord = event.target.value;
        // gibt das element zurück, dass den event getriggert hat; wir speichern es als searchWord zur weiterverwendung
        const filteredArray = searchData.filter((value) => {
            // wir übergeben der js-internen filter() den value aus dem input und suchen mit ihm im ursprünglichen searchData dank filter() gezielt nach dem value aus dem input
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
            //wir müssen allerdings toLowerCase suchen, sonst findet die suche case-sensitive title wegen der vielen groß-kleinschreibungen in den namen im array nicht
        });
        setFilteredData(filteredArray)
    };

    return (
        < div className="search" >
            <div className="searchInput">
                <input type="text" placeholder="Enter product name" onInput={enteredInput} />
                <div className="searchIcon">
                </div>
            </div>

            {filteredData.length != 0 && (
                // wenn die eingabe nicht 0 ist, sollen suchergebnisse angezeigt werden
                <div className="searchResults">{filteredData.map((value, index) => {
                    // filteredData war vor enteredInput searchData
                    return (<a key={index} className="searchItems" href="/" target="_blank">
                        <p>{value.title}</p>
                    </a>);
                })}
                </div >
            )}
        </div >
    );
}

export default SearchBar;