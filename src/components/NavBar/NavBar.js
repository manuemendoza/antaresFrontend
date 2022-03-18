import './NavBar.scss';
import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
class NavBar extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
        logout: false
    };

    constructor(props){
        super(props);
        this.props= props;
    }

    handleLogout = () =>{
        localStorage.setItem('token', []);
        localStorage.setItem('user', []);
        this.setState({logout:true});
        
    };

    render(){
        if (this.state.logout) {
            return <Navigate to= '/login'/>;
        }
        return(
            <div className="navbar_container">
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
                <div className="navbar_button">
                    <p>{this.state.user.name} {this.state.user.surname}</p>
                    <button onClick={() => this.handleLogout() }>Logout</button>
                </div>
            </div>
        );
    }
};

export default NavBar;