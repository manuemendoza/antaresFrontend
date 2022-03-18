import { Component } from "react";

class NewEntry extends Component {

    render(){
        const { logs, handledPostLogs } = this.props;
        const today = (new Date()).toLocaleDateString(
            "en-ZA", // yyyy/MM/dd
            {
                year: "numeric",
                month: "2-digit",
                day: "numeric"
            }
        );

        let day = logs.find(e => {
            return e.day === today;
        });
        
        let type = day != null && day.logs.length > 0 ? (day.logs[day.logs.length - 1].type === 'in' ? 'out' : 'in') : 'in';

        console.log('esto', logs);
        return(
            <button onClick={() => handledPostLogs(type)}>{type}</button>
        )
    }
};

export default NewEntry;