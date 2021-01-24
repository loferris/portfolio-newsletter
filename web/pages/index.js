import ResponsiveGrid from "../components/ResponsiveGrid";
import Link from "next/link";

const Index = (props) => {
  const { posts = [] } = props;
  return (
    <div>
      <Link href="/blog">Blog</Link>
      <ResponsiveGrid />
    </div>
  );
};

export default Index;
