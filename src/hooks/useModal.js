import { useState } from 'react';

export const useModal = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return [show, toggle];
}