import { Component } from "react";
;
class UserRow extends Component {
    render(props){
        const { user } = this.props;
        return(
            <>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <button>ver</button>
            </tr>
            </>
        )
    }
};

export default UserRow;