import { useParams, Link, useLocation } from 'react-router-dom';
import defaultProfilePic from '../assets/facebook-default-no-profile-pic.jpg';

export default function AuthorProfile() {
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');

  return (
    <div className="max-w-xl mx-auto p-4 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</Link>
      <h1 className="text-xl font-bold mt-4">{`Author Profile`}</h1>
      <img
        src={defaultProfilePic}
        alt="Author Profile"
        className="w-24 h-24 rounded-full object-cover mx-auto my-4"
      />
      <p className="text-gray-600 mt-2">Author Name: {name}</p>
      <p className="text-gray-600 mt-2">Author ID: {id}</p>
    </div>
  );
}
