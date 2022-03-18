import { Component } from "react";
import UserCard from "../UserRow/UserRow";

class UserList extends Component {
    render(props){
        const { user } = this.props
        return(
            <>
                {user.map(user => <UserCard
                key={user._id}
                user={user}
                />)}
            </>
        )
    }
};

export default UserList;