import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addFavorite } from "../../actions/Favorites";

function NewsContent({
  title,
  description,
  content,
  publishedAt,
  source,
  url,
}) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const addFavoriteBtn = () => {
    const favorite = { title, description, content, publishedAt, source, url };
    dispatch(addFavorite(favorite));
  };

  if (content !== null) {
    return (
      <div className='card my-1'>
        <div className='card-body'>
          <h3 className='text-dark'>{title}</h3>
          <div className='text-primary'>
            {" "}
            <i>{description}</i>
          </div>
          <small>
            <b>Posted on </b>
            {moment().format("MMMM Do YYYY", publishedAt)}
          </small>
          <p className='card-text'>
            {content}
            <span className='badge badge-primary ml-4'>{source}</span>
          </p>

          <a className='btn btn-primary mr-1' href={url} target={`_blank`}>
            <span className='fas fa-list'></span>
          </a>
          {isAuthenticated ? (
            <button className='btn btn-danger' onClick={addFavoriteBtn}>
              <span className='fas fa-heart'></span>
            </button>
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default NewsContent;
