import { Component } from "react";

class LogEntry extends Component {
    render() {
        const { logEntry } = this.props;
        let date = (new Date(logEntry.createdAt)).toLocaleTimeString();
        return(
            <span className={ logEntry.type }>{ logEntry.type === 'in' ? 'E' : 'S' }: { date } </span>
        )
    }
};

export default LogEntry;