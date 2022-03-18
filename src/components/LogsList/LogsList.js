import { Component } from "react";
import LogsRow from "../LogsRow/LogsRow";



class LogsList extends Component {
    render(){
        const { logs } = this.props
        return(
            <tbody>
                {logs.map(log => <LogsRow
                    key={log.day}
                    log={log}
                />)}
            </tbody>
        )
    }
};

export default LogsList;