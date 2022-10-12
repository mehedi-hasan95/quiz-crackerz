import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Questions from "../components/Questions/Questions";
import Topics from "../components/Topics/Topics";
import Main from "./Main";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
        {path: '/', element: <Home></Home>,},
        {path: '/home', element: <Home></Home>,},
        {path: '/topics', element: <Topics></Topics>, },
        {path: '/blog', element: <Blog></Blog>},
        {path: '/quiz/:quizId', element: <Questions></Questions>,
        loader: async ({ params }) => fetch (`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
}
    ],
    errorElement: <Error></Error>
}
]);

export default router;