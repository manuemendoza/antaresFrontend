import { Component } from "react";
import UserRow from "../UserRow/UserRow";
class UserList extends Component {
    render(){
        const { users } = this.props
        return(
            <>
                {users.map(user => <UserRow
                key={user._id}
                user={user}
                />)}
            </>
        )
    }
};

export default UserList;