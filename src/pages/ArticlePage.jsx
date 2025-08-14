import { useState } from "react";
import { Link } from "react-router-dom";
import downloadImg from "../assets/download.png";
import { FaThumbsUp, FaHeart, FaAngry, FaSadTear } from "react-icons/fa";
const icons = {
  like: <FaThumbsUp />,
  love: <FaHeart />,
  angry: <FaAngry />,
  sad: <FaSadTear />,
};

function ReactionButtons({ selected, onChange }) {
  const reactionTypes = ["like", "love", "angry", "sad"];

  return (
    <div className="flex gap-4 my-4">
      {reactionTypes.map((type) => (
        <button
          key={type}
          onClick={() => onChange(selected === type ? null : type)}
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            selected === type
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {icons[type]}
          <span className="capitalize">{type}</span>
        </button>
      ))}
    </div>
  );
}

function Comment({ data }) {
  const [reaction, setReaction] = useState(null);
  return (
    <div className="border-b py-2">
      <div className="text-sm font-semibold">
        <Link
          to={`/author/${data.id}?name=${encodeURIComponent(data.name)}`}
          className="text-white font-bold"
        >
          {data.name}
        </Link>
        {"  "} on  {data.date}
      </div>
      <div className="text-sm text-gray-700">{data.text}</div>
      <ReactionButtons selected={reaction} onChange={setReaction} />
    </div>
  );
}

const dummyComments = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    text: "Khub Shundor",
    name: "Commentator Name",
    date: "15 July 2025",
  }));
  dummyComments[0].name = "Sazia";
  dummyComments[1].name = "Farah";
  dummyComments[2].name = "Diba";
  dummyComments[3].name = "Rahim";
  dummyComments[4].name = "Karim";
  dummyComments[6].name = "Kuddus";
  dummyComments[7].name = "Pokemon";
  dummyComments[8].name = "Doremon";
  dummyComments[9].name = "Nobita";
export default function Home() {
  const [postReaction, setPostReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const commentsPerPage = 4;
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = dummyComments.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mt-2">Bangladesh</h1>
      <p className="text-sm text-gray-600 mt-2">
        Bangladesh, to the east of India on the Bay of Bengal, is a South Asian
        country marked by lush greenery and many waterways.
      </p>
      <img
        src={downloadImg}
        alt="Bangladesh"
        className="h-40 w-full object-cover my-4 rounded"
      />
      <div className="flex items-center gap-2 mt-4">
        <div className="w-8 h-8 rounded-full bg-blue-700"></div>
        <Link to="/author/1" className="text-sm font-semibold text-blue-600">
          Author Name
        </Link>
        <span className="text-sm text-gray-600">14 July 2025</span>
      </div>

      <ReactionButtons selected={postReaction} onChange={setPostReaction} />

      <h2 className="mt-6 font-semibold">{dummyComments.length} Comments</h2>
      <div className="mt-2">
        {currentComments.map((cmt, i) => (
          <Comment key={cmt.id} data={cmt} />
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <p>Page No : </p>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={`px-3 py-1 rounded ${
              n === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
