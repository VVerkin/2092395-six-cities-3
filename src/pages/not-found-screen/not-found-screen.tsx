import { Link } from 'react-router-dom';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Not found</h2>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
