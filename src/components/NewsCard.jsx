import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  // Format date nicely
  const publishedDate = new Date(news.author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-100">
      {/* Author Section */}
      <div className="flex items-center justify-between bg-base-200 p-5 pt-5">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="tooltip" data-tip="Bookmark">
          <button className="btn btn-ghost btn-sm">
            <FaRegBookmark size={20}></FaRegBookmark>
            <FaShareAlt size={20}></FaShareAlt>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-3">
        <h2 className="font-bold text-lg text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 pb-2 text-gray-600 text-sm">
        {details.slice(0, 180)}...
        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
          {" "}
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-medium">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
