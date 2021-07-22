import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState()

    useEffect(() => {
        if (key !== undefined) {
            setStoredValue(() => {
                try {
                    const item = window.localStorage.getItem(key);
                    return item ? JSON.parse(item) : initialValue;
                } catch (error) {
                    // console.log(error);
                    return initialValue;
                }
            }
            )
        }
    }, [key])

    const setValue = value => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // console.log(error);
        }
    };

    return [storedValue, setValue];
}