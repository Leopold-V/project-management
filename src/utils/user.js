import { auth } from '../firebase';

const getCurrentUser = () => {
    const user = auth.currentUser && {
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        username: auth.currentUser.displayName
    };
    return user;
}

export default getCurrentUser;