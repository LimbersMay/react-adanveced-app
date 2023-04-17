import '../styles/styles.css';
import {Form, Formik} from "formik";

import * as Yup from 'yup';
import {MyTextInput} from "../components";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'name length 2 characters or more')
                        .max(15, 'name must be 10 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email format')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'email length must be 6 or more')
                        .required('Required'),
                    password2: Yup.string()
                        .min(6, 'email length must be 6 or more')
                        .oneOf([Yup.ref('password')], 'Passwords must be equal')
                        .required('Required')
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                            />

                            <MyTextInput
                                label="Password"
                                name="password"
                                type="password"
                            />

                            <MyTextInput
                                label="Repeat password"
                                name="password2"
                                type="password"
                            />

                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}