import { Row, Col } from "react-bootstrap";
// Importing Row and Column from react-bootstrap which we installed
// with npm i react-bootstrap.

import dompurify from "dompurify";

const BlogLayout = ({ author, title, date, content }) => {
  const sanitizer = dompurify.sanitize;
  // Sanitiser to help prevent XSS attacks.
  return (
    <Row>
      <Col lg={12}>
        {/*Takes up 100% of the row, as lg={12} if lg={6} then would take up 50%,
           read the documentation if you don't understand this, there is xxs,xs,sm,md,lg,xl
           representing different screen sizes.*/}
        <h1>{title}</h1>
        <h2>
          {author} on {date}
        </h2>
        <div className="Content">
          <div dangerouslySetInnerHTML={{ __html: sanitizer(content) }} />
          {/* To allow for html to be rendered nicely use the property
                    dangerouslySetInnerHTML */}
        </div>
      </Col>
    </Row>
  );
};

export default BlogLayout;
