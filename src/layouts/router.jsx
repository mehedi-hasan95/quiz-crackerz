import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Topics from "../components/Topics/Topics";
import Main from "./Main";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),},
        {path: '/topics', element: <Topics></Topics>},
        {path: '/blog', element: <Blog></Blog>}
    ],
    errorElement: <Error></Error>
}
]);

export default router;