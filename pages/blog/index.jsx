import useBlogs from "../../container/blog/useBlogs";

import BlogLink from "../../components/BlogLink/BlogLink.component";

export default function Blogs() {
  const { blogPosts, isLoading } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    blogPosts &&
    blogPosts.map((item) => {
      return (
        <BlogLink
          key={item.sys.id}
          id={item.sys.id}
          title={item.fields.title}
          author={item.fields.author}
          date={item.fields.date}
        />
      );
    })
  );
}
