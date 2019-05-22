import { NotesForm } from "../../pages/NotesForm";
import { Route } from "react-router";
import NotFound from "../../pages/NotFound/NotFound";

const routes = [
    {
        component: NotesForm,
        exact: true,
        path: '/',
        routeComponent: Route
    },
    {
        component: NotesForm,
        exact: true,
        path: '/abc',
        routeComponent: Route
    },
    {
        component: NotFound,
        routeComponent: Route
    }
]

export default routes;