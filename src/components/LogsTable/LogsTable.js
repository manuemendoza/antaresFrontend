import { Component } from "react";
import { ApiLog } from "../../services/Api/ApiLog";
import LogsList from "../LogsList/LogsList";
import NewEntry from "../NewEntry/NewEntry";


class LogsTable extends Component{
    
    state = {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
        logs:[],
        // newLog:[]
    };

    constructor(props){
        super(props);
        this.handledGetLogs = this.handledGetLogs.bind(this);
        this.handledPostLogs = this.handledPostLogs.bind(this);
    }

    handledGetLogs = async () => {
        const userId = this.state.user._id;
        try {
            const res = await ApiLog.getLogs(userId);
            this.setState({logs: res});
        } catch (error) {
            console.error(error.message);
        }
    };

    handledPostLogs = async (type) => {
        try {
            const res = await ApiLog.postLog(type);
            // this.setState({newLog: res});
        } catch (error) {
            console.error(error.message);
        }
    };

    componentDidMount = () => {
        this.handledGetLogs();
    }
    render(){
        
        return(
            <div className="container__login">
                <NewEntry
                    handledPostLogs={this.handledPostLogs}
                    logs={this.state.logs}
                />
                <table>
                    <caption> Fichaje </caption>
                    <thead>
                        <tr>
                            <th>Día</th>
                            <th>Tiempo Trabajado</th>
                            <th>registros</th>
                        </tr>
                    </thead>
                    <LogsList
                        logs={this.state.logs}
                    />
                </table>
            </div>
        );
    }
};

export default LogsTable;