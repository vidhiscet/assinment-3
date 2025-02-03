import React from 'react'
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { id } = useParams();
    return(
        <div>
            <h2>User Details</h2>
            <p>User id: {id}</p>
        </div>
    )
}
export default UserProfile;