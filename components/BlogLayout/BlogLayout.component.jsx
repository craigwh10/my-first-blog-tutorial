import { Row, Col } from "react-bootstrap";
// Importing Row and Column from react-bootstrap which we installed
// with npm i react-bootstrap.

const BlogLayout = ({ author, title, date, content }) => {
  return (
    <Row>
      <Col lg={12}>
        <h1>{title}</h1>
        <h2>
          {author} on {date}
        </h2>
        <div className="Content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {/* To allow for html to be rendered nicely use the property
                    dangerouslySetInnerHTML */}
        </div>
      </Col>
    </Row>
  );
};

export default BlogLayout;
