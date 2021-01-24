import { Grid, Col, Row } from "../styles/css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const HeroImage = (props) => {
  const { heroImage } = props;
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <img src={urlFor(heroImage).width(50).url()} />
        </Col>
      </Row>
    </Grid>
  );
};

export default HeroImage;
