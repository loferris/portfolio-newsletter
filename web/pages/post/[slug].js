// [slug].js
import groq from "groq";
import client from "../../client";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostHeroImage from "../../components/PostHeroImage";
import Link from "next/link";
import { Body } from "../../styles/css"

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
    <Body>
      <Link href="/">home</Link>
      <br></br>
      <Link href="/blog">blog</Link>
      <article>
        <PostHeroImage heroImage={mainImage} />
        <PostHeader
          title={title}
          name={name}
          categories={categories}
          authorImage={authorImage}
        />
        <PostBody body={body} />
      </article>
    </Body>
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
