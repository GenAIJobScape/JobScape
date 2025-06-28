import { Link } from 'react-router-dom';

function TestPage() {
  return (
    <>
      <h1>Test Page</h1>
      <p>현재 경로: {location.pathname}</p>
      <p>현재 URL: {window.location.href}</p>
      <Link to="/JobScape/">홈으로</Link>
    </>
  );
}

export default TestPage;
