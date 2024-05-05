import {useEffect, useState} from "react";

function useDebounce<T> (value: T, delay?: number): T{
    const [debouncedValue, setDebouncedValue] = useState<T>(value) //get result after 500 ms of the user not typing

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay||500);


    return () => {
        clearTimeout(timer);
    }
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;