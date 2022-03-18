import { Component } from "react";
import { ApiUser } from "../../services/Api/ApiUser";
import { withRouter } from 'react-router-dom';

class Login extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    };

    constructor(props){
        super(props);
        this.props= props;
    }

    // handleRedirectionTo = () => {
    //     const token = this.state.token;
    //     const userData = this.state.user;
        
            
        
    //     if (token && userData.role === 'admin') {
    //         console.log('hola1', typeof this.props.history);
    //     } else {
    //         this.props.history.push('/user');
    //     }
    // };
    
    handleSendData = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('esto funciona', email, password);
        try {
            const res = await ApiUser.loginUser(email, password);
            const token = res.token;
            const user = res.userData;
            console.log('funciona mi triple', token, user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error(error.code);
        }
    };

    // componentDidMount = () => {
    //     this.handleRedirectionTo();
    // }
    render(){
        
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