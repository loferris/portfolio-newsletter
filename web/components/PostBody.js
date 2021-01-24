import { Grid, Row, Col } from "../styles/css";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const PostBody = (props) => {
  const { body } = props;
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default PostBody;
