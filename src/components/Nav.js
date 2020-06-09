import React, {Component} from "react";
import SearchBox from "./SearchBox";
// import css if needed

function Nav({handleSearchChange}){
    return(
        <nav>
            <div>
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}
export default Nav;