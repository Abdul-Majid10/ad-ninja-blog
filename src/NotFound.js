import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Page not Found</h2>
            <Link to="/">Back to home Page</Link>
        </div>
    );
}

export default NotFound;