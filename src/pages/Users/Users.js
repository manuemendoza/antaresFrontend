import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import  NavBar  from "../../components/NavBar/NavBar";
import UserTable from "../../components/UserTable/UserTable";


class Users extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    };

    constructor(props){
        super(props);
        this.props= props;
    }º

    render(){
        
        return(
            <div className="container__login">
                <NavBar/>
                <div>
                    <UserTable/>
                </div>
            </div>
        )
    }
};

export default Users;