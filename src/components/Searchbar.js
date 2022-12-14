import React, { useState, useEffect } from "react";
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function SearchBar() {

    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((searchData) => {
                setSearchData(searchData.products)
                // console.log(searchData.products)
            })
    }, [])

    const enteredInput = (event) => {
        // jeder eingegebene Input ist ein event, den wir mit onChange im <input> erfassen und wir verfrachten das in eine funktion, mit der wir im funktionskörper noch filtern wollen
        const searchWord = event.target.value;
        // gibt das element zurück, dass den event getriggert hat; wir speichern es als searchWord zur weiterverwendung
        setWordEntered(searchWord);
        //siehe input und clearButton
        const filteredArray = searchData.filter((value) => {
            // wir übergeben der js-internen filter() den value aus dem input und suchen mit ihm im ursprünglichen searchData dank filter() gezielt nach dem value aus dem input
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
            //wir müssen allerdings toLowerCase suchen, sonst findet die suche case-sensitive title wegen der vielen groß-kleinschreibungen in den namen im array nicht
        });
        setFilteredData(filteredArray)
    };

    const clearButton = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        < div className="search" >
            <div className="searchInput">
                <input type="text" placeholder="Enter product name" value={wordEntered} onInput={enteredInput} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <CiIcons.CiSearch />
                    ) : (
                        <CiIcons.CiSquareRemove id="clearButton" onClick={clearButton} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                // wenn die eingabe nicht 0 ist, sollen suchergebnisse angezeigt werden
                <div className="searchResults">{filteredData.slice(0, 3).map((value,
                    //mit slice vor dem map grenzen wir die suchergebnisse auf 4 ein, damit wir nicht den ganzen array laden (=>performance) + mit 3 haben wir keinen scroll.
                    index) => {
                    // note to myself: filteredData war vor enteredInput searchData
                    return (<Link key={index} className="searchItems" to={`/product/${value?.id}`} >
                        {console.log(value.title)}
                        <p>{value.title}</p>
                    </Link>);
                })}
                </div >
            )}
        </div >
    );
}

export default SearchBar;