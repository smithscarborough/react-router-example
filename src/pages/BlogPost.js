import { useEffect, useState } from "react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import BlogService from "../util/BlogService";
import NotFound from "./NotFound";

function BlogPost() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    BlogService.getPostByID(+id).then((data) => {
      if (!data) {
        setNotFound(true);
      } else {
        setBlog(data);
      }
    });
  }, [id, history]);

  if (notFound) {
    return <NotFound />;
  }

  if (blog === null) {
    return "Loading...";
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to="/blog">Back</Link>
      <Link to={`/blog/${+id + 1}`}>Next</Link>
    </div>
  );
}

export default BlogPost;
