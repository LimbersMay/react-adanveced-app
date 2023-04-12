import {ChangeEvent, useState} from "react";
import {useForm} from "../hooks/useForm";
import '../styles/styles.css';

export const RegisterPage = () => {

    const {
        onChange, resetForm, isValidEmail, formData,
        name, email,
        password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('Register form submitted');
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={`${ name.trim().length <= 0 && 'has-error' }`}
                />

                { name.trim().length <= 0 && <span>This field is necessary</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={`${ isValidEmail(email) && 'has-error'}`}
                />

                { isValidEmail(email) && <span>Invalid email</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />

                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset form</button>
            </form>

        </div>
    )
}