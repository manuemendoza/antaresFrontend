import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import UserList from "../UserList/UserList";
import { Link } from "react-router-dom";

class UserTable extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            user: JSON.parse(localStorage.getItem('user')),
            users:[]
        };
        this.handledGetUsers = this.handledGetUsers.bind(this);
        // this.handledPostUser = this.handledPostUser.bind(this);
    }

    handledGetUsers = async () => {
        try {
            const res = await ApiUser.getUsers();
            this.setState({users: res});
        } catch (error) {
            console.error(error.message);
        }
    };

    componentDidMount = () => {
        this.handledGetUsers();
        
    }

    render(){
        
        return(
            <div>
                <button><Link to="/register">Añadir Usuario</Link></button>
                <table>
                    <caption> Usuarios </caption>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Día</th>
                            <th>Tiempo Trabajado</th>
                            <th>registros</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserList
                            users={this.state.users}
                        />
                    </tbody>
                </table>
            </div>
        );
    }
};

export default UserTable;