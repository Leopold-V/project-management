import { useState } from 'react';

export const useModal = () => {
    const [show, setShow] = useState({state: '', type: '', who: ''});

    const toggle = (e) => {
        const type = e?.target?.dataset.type || '';
        const id = e?.target?.id || '';
        setShow((show) => ({state: !show.state, type: type, who: id}));
    }

    return [show, toggle];
}