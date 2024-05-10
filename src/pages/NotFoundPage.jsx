import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>NotFoundPage</p>
      <p>
        Please go back <Link to="/">home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
