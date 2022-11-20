import React from "react";
import { Card, Button } from "react-bootstrap";

function Post({ posts }) {
    return (
        <>
            {posts.map((post, index) => (
                <div key={index} style={{ height: "140px", width: "800px" }} className="d-flex flex-row gap-3 my-3">
                    <div className="d-flex flex-column">
                        <img src={post.acf.featured_image.sizes.thumbnail} width={200} height={140} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="d-flex flex-column">
                        <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="list-text" />
                        <div className="d-flex justify-content-between">
                            <Button variant="primary">Book now</Button>
                            <div className="d-flex row">
                                <span className="text-center">Price:</span>
                                <span className="text-center">{post.acf.price},- pr night</span>
                            </div>
                            <div className="d-flex row">
                                <span className="text-center">Rating:</span>
                                <span className="text-center">{post.acf.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Post;
