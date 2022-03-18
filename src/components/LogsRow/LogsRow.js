import { Component } from "react";
import LogEntry from "../LogEntry/LogEntry";

class LogsRow extends Component {
    render() {
        const { log } = this.props;
        return(
            <tr>
                <td>{log.day}</td>
                <td>{log.hours}</td>
                <td>
                    {log.logs.map(logEntry => <LogEntry
                        key={logEntry._id}
                        logEntry={logEntry}
                    />)}
                </td>
            </tr>
        )
    }
};

export default LogsRow;