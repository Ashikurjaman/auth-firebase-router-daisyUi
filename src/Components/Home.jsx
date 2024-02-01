import React, { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';


const Home = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h3>This is Home And My name is {user && <span>{user.displayName}</span> }</h3>
        </div>
    );
};

export default Home;