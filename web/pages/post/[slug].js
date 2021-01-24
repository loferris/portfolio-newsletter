// [slug].js
import groq from "groq";
import client from "../../client";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import Link from "next/link";

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = props;
  return (
    <div>
      <Link href="http://localhost:3000">home</Link>
      <article>
        <PostHeader
          title={title}
          name={name}
          categories={categories}
          authorImage={authorImage}
        />
        <PostBody body={body} />
      </article>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
