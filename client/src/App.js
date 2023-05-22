import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Context} from "./index";
import Navbar from "./components/Navbar";

import {authRoutes, postRoutes} from "./routes";
import {AUTH_ROUTE_SIGN_IN, POSTS_ROUTE} from "./utils/constants";

const App = () => {
    const store = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.setAuth(true);
        }

    }, [store]);

    return (
        <>
            <Navbar store={store}/>
            <Routes>
                <Route path={store.isAuth ? AUTH_ROUTE_SIGN_IN : POSTS_ROUTE}
                       element={<Navigate to={store.isAuth ? POSTS_ROUTE : AUTH_ROUTE_SIGN_IN}/>}/>

                {!store.isAuth && authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>)
                )}

                {store.isAuth && postRoutes.map(({path, Component}) => {
                        return <Route key={path} path={path} element={<Component/>}/>
                    }
                )}

                <Route path="*" element={<Navigate to={POSTS_ROUTE}/>}/>
            </Routes>
        </>
    );
}

export default observer(App);
