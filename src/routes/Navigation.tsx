import {Suspense} from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";

import {routes} from "./routes";
import logo from "../logo.svg";

export const Navigation = () => {

    const checkIsActive = (isActive: boolean) => {
        return isActive ? 'nav-active' : '';
    }

    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo"/>

                        <ul>
                            {/* TODO: Make dynamic links */}
                            {
                                routes.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({isActive}) => checkIsActive(isActive)}>{name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({path, Component}) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component/>}
                                />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}