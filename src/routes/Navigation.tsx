import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";

import logo from "../logo.svg";
import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";

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
                            <NavLink to="/lazy1" className={ ({ isActive }) => checkIsActive(isActive)} >Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => checkIsActive(isActive)}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => checkIsActive(isActive)}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="/lazy3" element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}