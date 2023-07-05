import { useState } from "react";

export const AddCategory = ({ onNewCategory, placeHolder }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const input = inputValue.trim();

        if(input.length <= 1) return;
        setinputValue('');
        onNewCategory(input);
    };

    return (
        <form action="" onSubmit={ onSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
                placeholder={ placeHolder }
            />
        </form>

    );
};
