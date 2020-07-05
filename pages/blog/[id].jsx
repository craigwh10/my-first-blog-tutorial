import useBlogs from "../../container/blog/useBlogs";
// Importing our hook from the correct file.

import { useRouter } from "next/router";
// Importing the useRouter hook from NextJS
// to get the current URL path the user is on.

import BlogLayout from "../../components/BlogLayout/BlogLayout.component";
// Importing the component from where we made it.

export default function Blog() {
  const router = useRouter();

  const { blogPosts, isLoading } = useBlogs();
  // Using the hook with what we had returned.
  // This returns ALL of the blog data.

  if (isLoading) {
    // If page is loading, then display loading
    // this could be anything.
    return <p>Loading</p>;
  }

  const blog = blogPosts.filter((item) => item.sys.id == router.query.id);

  // Short circuit operator, if blog exists then map out the filtered blog's
  // field content and return it.
  return (
    blog &&
    blog.map((item) => {
      return (
        <BlogLayout
          title={item.fields.title}
          date={item.fields.date}
          content={item.fields.content}
          author={item.fields.author}
        />
      );
    })
  );
}
