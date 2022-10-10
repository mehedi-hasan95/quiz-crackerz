import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Topics from "../components/Topics/Topics";
import Main from "./Main";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/topics', element: <Topics></Topics>},
        {path: '/blog', element: <Blog></Blog>}
    ]
}
]);

export default router;