import {createBrowserRouter} from "react-router-dom";
import HomePage from "../components/home/HomePage.jsx";
import TeamBuilderPage from "../components/teamBuilder/TeamBuilderPage.jsx";
import {DoubleTeam} from "../components/doubleTeam/doubleTeam.jsx";
import SingleTeam from "../components/singleTeam/SingleTeam.jsx";
import Error404 from "../components/common/Errors/Error404.jsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "team-builder",
        element: <TeamBuilderPage />
    },
    {
        path: "double-team",
        element: <DoubleTeam />
    },
    {
        path: "single-team",
        element: <SingleTeam />,
        errorElement: <Error404 />
    },
    {
        path: "detail",
        errorElement: <Error404 />,
    }
]);

