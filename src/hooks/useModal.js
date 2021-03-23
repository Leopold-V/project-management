import { useState } from 'react';

export const useModal = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        console.log(show);
        setShow(!show);
    }

    return [show, toggle];
}