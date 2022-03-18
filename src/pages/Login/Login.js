import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import { Navigate } from 'react-router-dom';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.props= props;
        this.state = {
            login: false
        }
    }
    
    handleSendData = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await ApiUser.loginUser(email, password);
            const token = res.token;
            const user = res.userData;
            console.log('funciona mi triple', token, user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({login: true})
        } catch (error) {
            console.error(error.code);
        }
    };

    render(){
        if (this.state.login) {
            return <Navigate to= '/'/>;
        }
        return(
            <div className="container__login">
            <h1 className="login_title">Iniciar sesión</h1>
            <form onSubmit={this.handleSendData}> 
                <div>
                    <div>
                        <label>
                            <input
                                type='email'
                                name='email'
                                placeholder="Escribe aqui tu email"
                                required />
                        </label>
                    </div>
                    <div>
                        <label> 
                            <input
                                type='password'
                                name='password'
                                placeholder="Password"
                                required />
                        </label>
                    </div>
                </div>
                <button type="submit" className="login_button">Entra</button>
            </form>
        </div>
        )
    }
};

export default Login