import { Grid, Row, Col } from "../styles/css";

const ResponsiveGrid = () => {
  return (
    <div className="grid-demo">
      <Grid>
        <Row>
          <Col size={1}><h1>A Responsive Grid</h1></Col>
        </Row>
        <Row>
          <Col size={1}>Longboi</Col>
        </Row>
        <Row>
          <Col size={2}>I will expand to fill</Col>
          <Col size={1}>smol</Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
