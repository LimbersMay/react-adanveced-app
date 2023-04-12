import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import {MyTextInput, MySelect, MyCheckbox} from "../components";

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik FormikAbstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email format')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Must allow conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'option not allowed')
                        .required('Required')
                })}
            >
                {
                    formik => (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT senior</option>
                                <option value="it-jr">IT Jr</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}