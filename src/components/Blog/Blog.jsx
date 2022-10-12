import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg cursor-pointer">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the purpose of react router?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Routing is the process of directing a user to different pages based on their actions or requests. ReactJS router is mainly used for single-page web application development. Used to define multiple routes in React Router application. When a user types a specific URL into the browser, and if this URL matches any 'route' inside the path router file, the user will be redirected to that specific route.</p>
                        </details>
                        <details className="w-full border rounded-lg cursor-pointer">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does context API work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React usually sends data unidirectionally. In this case, data is passed top-down (parent to child) through props. Sometimes it becomes a very time-consuming affair. Moreover, it is very difficult to do. If props are given wrongly or no props are given then that data is not available. Here the context API has made life easier for developers. The context API is usually written in a diagram from which data can be retrieved at the required location. Where the context API is declared is written const DeclareContext = createContext(). Where this data is to be displayed const variableName = useContext(DeclareContext ).</p>
                        </details>
                        <details className="w-full border rounded-lg cursor-pointer">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Write something on useRef</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The useRef Hook allows you to persist values between renders. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. It can be used to store a mutable value that does not cause a re-render when updated. Essentially, useRef is like a “box” that can hold a mutable value in its current property. It can be used to access a DOM element directly.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;