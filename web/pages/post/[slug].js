// [slug].js
import groq from "groq";
import client from "../../client";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import HeroImage from "../../components/HeroImage";
import Link from "next/link";

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
    mainImage,
  } = props;
  return (
    <div>
      <Link href="/">home</Link>
      <br></br>
      <Link href="/blog">blog</Link>
      <article>
        <HeroImage heroImage={mainImage} />
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
  body,
  mainImage
}`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
