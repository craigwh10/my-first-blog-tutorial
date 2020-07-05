import { useEffect, useState } from "react";
// Importing in the functions from React that we will use.

// @blogPosts = An array of objects containing blog post data.
// @isLoading = A boolean value for the loading status of this hook. s

const client = require("contentful").createClient({
  space: process.env.spaceID,
  accessToken: process.env.accessToken,
});
// Initialising the client from contentful which we had installed via npm i contentful
// and using it with the environment variables we had set in next.config.js

const useBlogs = () => {
  // Initialising the hook as a functional component.

  async function fetchEntries() {
    // Asynchronous function that is "awaiting" a response of entries
    // from contentful.
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    // If the entries exist with property items, then return them.
    else return console.log("Error loading contentful data");
    // Otherwise return a descriptive error that it couldnt find it.
  }

  const [blogPosts, setBlogPosts] = useState([]);
  // blogPost is the data variable
  // and setBlogPosts is the method used to set what it will be.
  // useState([]) to initialise the first "state" of the blogs to be an empty list.
  const [isLoading, setIsLoading] = useState(true);
  // similar logic, isLoading initially set to true.

  useEffect(() => {
    // UseEffect runs before the rendering of the page.
    // Running the asynchronous fetchEntries function to
    // return the fulfilled promise of the entries.
    async function getPosts() {
      const allPosts = await fetchEntries();
      // Await a fulfilled promise of the entries.
      setBlogPosts([...allPosts]);
      // Set the blog posts as all of the blog posts.
    }
    getPosts();
    // Run the asynchronous getPosts function so that
    // the await can be used in the useEffect.
    setIsLoading(false);
    // Now that the loading sequence has run, set the state of loading to false.
  }, []);

  return { blogPosts, isLoading };
  // Return the blogPosts and the loading state.
};

export default useBlogs;
// Export the hook for use elsewhere.
// default so that it can be imported as "useBlogs" rather than "{useBlogs}".
