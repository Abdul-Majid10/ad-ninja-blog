import { useParams } from "react-router-dom";
import useFetch  from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPandding, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDeleteClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'Delete'
        }).then(() => {
            history.push('/');
        });
    }

    return (
        <div className="blog-details">
            {isPandding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDeleteClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;