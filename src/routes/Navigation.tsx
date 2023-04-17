import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";

import logo from "../logo.svg";
import {
    RegisterPage,
    FormikBasicPage,
    FormikYupPage,
    FormikComponents,
    FormikAbstraction,
    RegisterFormikPage, DynamicFormPage
} from "../03-forms/pages";

export const Navigation = () => {

    const checkIsActive = (isActive: boolean) => {
        return isActive ? 'nav-active' : '';
    }

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React logo"/>

                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => checkIsActive(isActive)}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => checkIsActive(isActive)}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => checkIsActive(isActive)}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => checkIsActive(isActive)}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={ ({ isActive }) => checkIsActive(isActive)}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={ ({ isActive }) => checkIsActive(isActive)}>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({ isActive }) => checkIsActive(isActive)}>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                        <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstraction" element={<FormikAbstraction />} />
                    <Route path="formik-register" element={<RegisterFormikPage />} />
                    <Route path="dynamic-form" element={<DynamicFormPage />} />
                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}