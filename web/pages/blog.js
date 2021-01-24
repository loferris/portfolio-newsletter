import Link from "next/link";
import groq from "groq";
import client from "../client";

const Blog = (props) => {
  const { posts = [] } = props;
  return (
    <div>
      <Link href="/">home</Link>
      <h1>Welcome to a blog!</h1>
      {posts.map(
        ({ _id, title = "", slug = "", _updatedAt = "" }) =>
          slug && (
            <li key={_id}>
              <Link
                href={{ pathname: "/post/[slug]" }}
                as={`/post/${slug.current}`}
              >
                <a>{title}</a>
              </Link>{" "}
              ({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </div>
  );
};
Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
              *[_type == "post" && _updatedAt < now()] | order(_updatedAt desc)
              `),
});
export default Blog;
