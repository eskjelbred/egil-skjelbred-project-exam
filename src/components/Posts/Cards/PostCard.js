import React from "react";
import { Card, Button } from "react-bootstrap";

function Post({ posts }) {
    return (
        <>
            {posts.map((post, index) => (
                <Card key={index} style={{ height: "350px", width: "300px" }} className="p-0 border-0">
                    <div>
                        <Card.Img variant="top" src={post.acf.featured_image.sizes.thumbnail} width={150} height={200} style={{ objectFit: "cover" }} />
                        <Card.Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </div>
                    <Card.Body className="p-0">
                        <Card.Text dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <div className="d-flex justify-content-between">
                            <Button variant="primary">Book now</Button>
                            <div className="d-flex row w-50">
                                <span className="text-center">Rating:</span>
                                <span className="text-center">{post.acf.rating}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default Post;
