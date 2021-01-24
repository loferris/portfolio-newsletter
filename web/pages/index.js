// index.js
import Link from "next/link";
import groq from "groq";
import client from "../client";
import { styled } from "linaria/react";

const H1 = styled.h1`
  color: red;
`;

const Index = (props) => {
  const { posts = [] } = props;
  return (
    <div>
      <H1>Welcome to a blog!</H1>
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

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && _updatedAt < now()] | order(_updatedAt desc)
    `),
});

export default Index;
