import { Grid, Col, Row, PostHeroImg } from "../styles/css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const PostHeroImage = (props) => {
  const { heroImage } = props;
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <PostHeroImg src={urlFor(heroImage).width(50).url()} />
        </Col>
      </Row>
    </Grid>
  );
};

export default PostHeroImage;
