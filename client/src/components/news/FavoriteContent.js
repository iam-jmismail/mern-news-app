import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteFavorite } from "../../actions/Favorites";

export default function FavoriteContent({
  id,
  title,
  description,
  content,
  publishedAt,
  source,
  url,
}) {
  const dispatch = useDispatch();

  const deleteFavoriteBtn = (id) => {
    dispatch(deleteFavorite(id));
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
            {" "}
            <span className='fas fa-list'></span>
          </a>
          <button
            className='btn btn-danger'
            onClick={() => deleteFavoriteBtn(id)}
          >
            <span className='fas fa-trash'></span>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
