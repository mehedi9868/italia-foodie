/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-orange-50'>
            <h1 className='text-2xl font-bold text-center pt-10'>Blogs</h1>
            <div className='p-10'>
                <h2 className='text-xl font-bold mb-4'>Differences between uncontrolled and controlled components?</h2>
                <p className='text-justify'>In React, controlled and uncontrolled components refer to different ways of managing form inputs.

                    Uncontrolled components are managed by the browser, where the form data is stored in the DOM. With uncontrolled components, React does not have direct access to the input value, and therefore cannot directly manipulate or validate it.

                    Controlled components, on the other hand, are managed by React. The input value is stored in the component state, and changes to the value are handled by React event handlers. Controlled components allow for more control and validation of form data, but require more code to set up.</p>
            </div>

            <div className='p-10'>
                <h2 className='text-xl font-bold mb-4'>How to validate React props using PropTypes?</h2>
                <p className='text-justify'>React PropTypes is a library that allows developers to define the expected data types and shapes of their component's props, enabling validation at runtime.

                    To use PropTypes, we need to import the library and define the expected data types for wer component's props. For example, if we expect a prop to be a string, we can use PropTypes.string. If we expect an array, we can use PropTypes.arrayOf. If we expect an object with specific keys and values, we can use PropTypes.shape.

                    Once we've defined wer prop types, React will automatically check each prop against the expected type and shape, and log a warning in the console if there's a mismatch. This can help catch bugs and errors early on in the development process, and make it easier to maintain and scale wer components over time.</p>
            </div>

            <div className='p-10'>
                <h2 className='text-xl font-bold mb-4'>Difference between nodejs and express js?</h2>
                <p className='text-justify'>Node.js is a runtime environment that allows developers to run JavaScript code outside of the browser, while Express.js is a framework for building web applications on top of Node.js.

                    Node.js provides the underlying platform for running JavaScript on the server, and includes features such as a module system, a built-in HTTP server, and access to the file system.

                    Express.js builds on top of Node.js by providing a more convenient and streamlined way to build web applications, including routing, middleware, and other features commonly used in web development. Essentially, Express.js simplifies and abstracts away much of the low-level Node.js code required to build web applications, allowing developers to focus more on the business logic of their application.</p>
            </div>

            <div className='p-10 pb-20'>
                <h2 className='text-xl font-bold mb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-justify'>In React, a custom hook is a function that allows us to reuse stateful logic across multiple components.

                    Custom hooks are useful because they allow us to abstract away complex or repetitive logic into a separate function that can be reused across multiple components. For example, if we have a piece of logic that handles fetching data from an API, we can create a custom hook that encapsulates this logic and use it in multiple components.

                    Custom hooks are created using the "use" prefix in the function name and can access and manipulate state using React's built-in hooks such as useState or useEffect. Creating a custom hook can help reduce code duplication and improve the reusability and maintainability of our codebase.</p>
            </div>


        </div>
    );
};

export default Blogs;