import Link from "next/link";
import Image from "next/image";

const Index = (props) => {
  const { posts = [] } = props;
  return (
    <>
    <Image src={"/portfolioHero.png"} layout={"fill"} objectFit={"cover"}
     />
    <Link href="/blog">Blog</Link>
    </>
  );
};

export default Index;
