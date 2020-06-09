import React, {Component} from "react";

function SearchBox({ handleSearchChange}){
    return(
        <div className ="searchbox">
            <form className="forn-imline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Seach"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchBox;