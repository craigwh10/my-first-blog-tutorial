import Link from "next/link";

import { Row, Col } from "react-bootstrap";

const BlogLink = ({ id, title, author, date }) => {
  return (
    <Row>
      <Col lg={12}>
        <Link href={`/blog/${id}`}>
          <a href="">
            <h2>{title}</h2>
            <p>
              {author} on {date}.
            </p>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default BlogLink;
