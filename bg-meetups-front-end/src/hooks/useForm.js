import { useState } from 'react';

const useForm = (initialValues = {}, callback) => {
    const [values, setValues] = useState(initialValues);

    const reset = () => {
        setValues(initialValues);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        reset,
        handleChange,
        handleSubmit,
        values
    };
}

export default useForm;