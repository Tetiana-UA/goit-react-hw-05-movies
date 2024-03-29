import { useState, useEffect, useRef, useMemo } from "react";
import { nanoid } from "nanoid";

import styles from "./search-form.module.css";

export const SearchForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        search: "",
    });

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    }

    const reset = () => {
        setState({
            search: ""
        });
    }

    const searchId = useMemo(() => nanoid(), []);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
                
                <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search"  className={styles.input} />
            </div>
            <button type="submit" className={styles.button}>Search</button>
        </form>
    )
}

