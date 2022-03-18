import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import  NavBar  from "../../components/NavBar/NavBar";
import { Navigate  } from 'react-router-dom';

class CreateUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            user: JSON.parse(localStorage.getItem('user')),
            rol: null,
            navigate: null
        };
    }

    handleCreateUser = async (e) => {
        e.preventDefault();
        const name =  e.target.name.value;
        const surname =  e.target.surname.value;
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        const role =  e.target.role.value;
        try {
            const res = await ApiUser.postUser(name, surname, email, password, role);
            if (res) {
                this.setState({navigate: '/users'})
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    render(){
        if (this.state.navigate) {
            return <Navigate to= { this.state.navigate }/>;
        }
        return(
            <div>
                <NavBar/>
                <form onSubmit={(e) => this.handleCreateUser(e)} className="form">
                    <legend className="legend">Por favor rellene todos los campos</legend>
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Nombre"
                                    required
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder="Escribe aqui tu apellido"
                                    required
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    required
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Escribe aqui tu contraseña"
                                    required
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Usuario
                                <input
                                    type='radio'
                                    value='user'
                                    name='role'
                                />
                            </label>
                            <label>
                                Administrador
                                <input
                                    type='radio'
                                    value='admin'
                                    name='role'
                                />
                            </label>
                            
                        </div>
                    </div>
                    <button type="onSubmit">Registrarte</button>
            </form>
            </div>
        )
    }
};

export default CreateUser;