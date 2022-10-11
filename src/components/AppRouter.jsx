import { Route, Routes, Navigate } from "react-router-dom";
import { LOGIN_ROUTE, CATALOG_ROUTE } from "../utils/constans";
import { privateRoutes, publicRoutes } from "./routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "..";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    console.log(user)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
                <Route path="*" element={<Navigate to={CATALOG_ROUTE} replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
            </Routes>  
        )
}

export default AppRouter;