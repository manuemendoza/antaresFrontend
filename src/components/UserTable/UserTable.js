import { Component } from "react";
import { ApiLog } from "../../services/Api/ApiLog";

class UserTable extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
    };

    constructor(props){
        super(props);
        this.props= props;
    }

    handledGetlogs = async () => {
        const userId = this.state.user._id;
        try {
            const res = await ApiLog.getLogs(userId);
            console.log('funciona mi triple', res);
        } catch (error) {
            console.error(error.code);
        }
    };

    componentDidMount = () => {
        this.handledGetlogs();
    }
    render(){
        
        return(
            <div>
                <table>
                    <caption> Usuarios </caption>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Tiempo Trabajado</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        );
    }
};

export default UserTable;