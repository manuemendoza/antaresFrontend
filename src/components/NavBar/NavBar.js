import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import { Link } from "react-router-dom";

class NavBar extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
    };

    constructor(props){
        super(props);
        this.props= props;
    }

    render(){
        
        return(
            <div className="container__login">
                <nav className="navbar">
                    <ul className="navbar_link">
                        <li> 
                            <Link to="/">Registros</Link>
                        </li> 
                        {(this.state.user.role === "admin") ? 
                        <li>
                            <Link to="/users">Usuarios</Link>
                        </li> : 
                        <div></div>
                        }
                    </ul>
                </nav>
                <div>
                    <p>{this.state.user.name} {this.state.user.surname}</p>
                    <button>Logout</button>
                </div>
            </div>
        );
    }
};

export default NavBar;