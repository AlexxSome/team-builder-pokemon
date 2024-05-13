import {useState} from 'react';

const useCount =() => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        if (!items.includes(item)) {
            setItems(prevItems => [...prevItems, item]);
        }
    };

    const removeItem = (itemToRemove) => {
        setItems(prevItems => prevItems.filter(item => item !== itemToRemove));
    };

    return {
        items,
        addItem,
        removeItem
    };
};


export default useCount;