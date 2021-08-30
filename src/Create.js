import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPandding, setIsPandding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPandding(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new record added.");
            setIsPandding(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="majid">majid</option>
                </select>
                {!isPandding && <button>Add Blog</button>}
                {isPandding && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;