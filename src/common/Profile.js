import { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profile_wrapper">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.content }</p>
            </div>
        );
    }
}

export default Profile;
