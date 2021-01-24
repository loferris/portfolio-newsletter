import { Grid, Row, Col, Img } from "../styles/css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const Postheader = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
  } = props;
  return (
    <div>
      <Grid>
        <Row>
          <Col size={1}>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Img src={urlFor(authorImage).width(50).url()}></Img>
          </Col>
          <Col size={1}>By {name}</Col>
          <Col size={2}>
            {categories && (
              <ul>
                Posted in
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Postheader;
