import React, {Component} from "react";
import Data_table from "./Data_table";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class Header extends Component{
    state ={
        users:[{}],
        order:"descend",
        filteredUsers:[{}]
    }
    headings=[
        { name: "Image", width:"10%"},
        { name: "Name", width:"10%"},
        { name: "Phone", width:"10%"},
        { name: "Email", width:"10%"},
        { name: "DOB", width:"10%"}
    ]
    handleSort=heading => {
        if(this.state.order==="descend"){
            this.setState({
                order:"ascend"
            })
        }else{
            this.setState({
                order:"descend"
            })
        }
        
        //generic way to order elements
        const compareFnc=(a,b)=>{
            if (this.state.order==="ascend"){
                //account for missing values
                if(a[heading]===undefined){
                    return 1;
                }else if(b[heading]===undefined){
                    return -1;
                }
                //numerically
                else if(heading==="name"){
                    return a[heading].first.localeCompare(b[heading].first);
                }else{
                    return a[heading]- b[heading];
                }

            }else{
                //account for missing values
                if(a[heading]===undefined){
                    return 1;
                }else if(b[heading]===undefined){
                    return -1;
                }
                //numerically
                else if(heading==="name"){
                    return b[heading].first.localeCompare(a[heading].first);
                }else{
                    return b[heading]- a[heading];
                }
            }
        }
        const sortedUser=this.state.filteredUsers.sort(compareFnc);
        this.setState({filteredUsers:sortedUser});
    }
    //Filter
    handleSearchChange=event=>{
        const filter=event.target.value;
        const filteredList= this.state.users.filter(item => {
            //check is the filter returns something
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return value.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({filteredUsers:filteredList});
    }

    componentDidMount(){
        API.getUsers().then(results=>{
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    //Render the results
    render(){
        return(
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <Data_table
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}