import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";

import logo from "../logo.svg";
import {LazyPage2, LazyPage3} from "../01-lazyload/pages";
import {ShoppingPage} from "../02-component-patterns/pages/ShoppingPage";

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
                            <NavLink to="/" className={ ({ isActive }) => checkIsActive(isActive)}>Shopping</NavLink>
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
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="/lazy3" element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}