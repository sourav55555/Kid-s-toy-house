import { useEffect } from "react";

const Blog = () => {

    useEffect(()=>{
        document.title = "Kid's Toy | Blogs";
        }, [])


    return (
        <div>
            <h2 className="title mx-auto my-16">Blogs</h2>

            <div className="md:p-12 grid md:mt-0 mt-16 grid-cols-1 md:grid-cols-2 mb-32 w-10/12 mx-auto gap-8">
                <div className="border-2 p-4 md:p-8">

                    <p className="font-semibold p-3 rounded-lg mb-1 bg-[rgba(164,245,249,.3)]">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </p>

                    <p className="p-3 text-gray-700">
                        Access token is a secure string used for access protected resources. Valid access token gives client authorization to access resources. 
                        Refresh token is a credential that client use for get new access token without additional authorization. Usually access token has lifespan. So, with refresh token we can generate. This way protected resources will be more secure.
                        <br/>
                        If a user login to API services. The api return access token and refresh token. If an access token is expired then with refresh token user generate new access token without new login.
                        `httpOnly`cookies is the better option to store them.

                    </p>

                </div>

                <div className="border-2 p-4 md:p-8">
                
                    <p className="font-semibold p-3 rounded-lg mb-1 bg-[rgba(164,245,249,.3)]">
                        Compare SQL and NoSQL databases?
                    </p>

                    <p className="p-3 text-gray-700">
                        Sql is a relational database. It have a predefined schema. Its batter for multi row transactions. Databases are vertically scalable and table-based.
                        <br />
                        NoSql is a non-rational database. Its databases have dynamic schema for unstructured data. Data horizontally scalable. Databases are document, key-value, graph, or wide-column stores. Its better for unstructured data.
                    </p>

                </div>

                <div className="border-2 p-4 md:p-8">

                    <p className="font-semibold p-3 rounded-lg mb-1 bg-[rgba(164,245,249,.3)]">
                        What is express js? What is Nest JS?
                    </p>

                    <p className="p-3 text-gray-700">
                        Express Js is a flexible node js framework that provides a set of features for build web and mobile application. It is a layer built on top of Node. It allow developers to create applications with their preferred tools and libraries.
                        <br />
                        Nest Js is a Node js framework for building server-side applications. It is based on TypeScript and JavaScript. It easy to maintain and scale applications as they grow.

                    
                    </p>
                </div>

                <div className="border-2 p-4 md:p-8">

                    <p className="font-semibold p-3 rounded-lg mb-1 bg-[rgba(164,245,249,.3)]">
                        What is MongoDB aggregate and how does it work?
                    </p>

                    <p className="p-3 text-gray-700">
                        Aggregation is used for processing a large number of documents in a collection. It use pipeline of stages to process documents in a collection. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.The output of the last stage is the result of the aggregation operation.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;