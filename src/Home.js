import BlogsList from "./BlogsList";
import useFetch from "./useFetch";
const Home = () => {

    const { data: blogs, isPandding, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPandding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogsList blogs={blogs} title={"All Blogs!"} />}
        </div>
    );
}
// export home component
export default Home;