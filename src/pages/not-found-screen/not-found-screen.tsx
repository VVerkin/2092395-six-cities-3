import { Link } from 'react-router-dom';

const NotFoundScreen = (): JSX.Element => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Not found</h2>
    <Link to="/">Go to main page</Link>
  </div>
);

export default NotFoundScreen;
