import { NotesForm } from "../../pages/NotesForm";
import { Route, Redirect } from "react-router";
import NotFound from "../../pages/NotFound/NotFound";

const routes = [
    {
        component: NotesForm,
        exact: true,
        path: '/',
        routeComponent: Route
    },
    {
        component: NotFound,
        routeComponent: Redirect
    }
]

export default routes;