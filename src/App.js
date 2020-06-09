import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";


function App(){
    return (
        <div classname="App">
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </div>
    );
}

export default App;