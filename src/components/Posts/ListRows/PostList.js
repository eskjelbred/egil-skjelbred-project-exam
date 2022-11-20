import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItems from "./PostItems";
import { Container } from "react-bootstrap";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        axios
            .get("http://92.220.233.201/wp-json/wp/v2/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((err) => {
                setError(true);
                setErrorMsg(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return loading ? (
        <p>Loading content...</p>
    ) : error ? (
        <p>{errorMsg}</p>
    ) : (
        <Container>
            <div className="">
                <h3>Search results</h3>
                <PostItems posts={posts} />
            </div>
        </Container>
    );
}

export default PostList;
