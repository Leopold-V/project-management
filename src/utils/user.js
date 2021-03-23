import { auth } from '../firebase';

const getCurrentUser = () => {
    return auth.currentUser;
}

export default getCurrentUser;