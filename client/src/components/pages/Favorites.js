import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../actions/Favorites";

import FavoriteContent from "../news/FavoriteContent";

export default function Home() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const favorites = useSelector((state) => state.favorite.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  if (isAuthenticated) {
    return (
      <Fragment>
        <div className='container pt-4'>
          <h3 className='text-primary'> Favorites </h3>

          {favorites.length === 0 && (
            <Fragment>
              <div className='py-4'>
                <h2>No Favorites Added</h2>
                <p>Try Adding by clicking &hearts; Icon </p>
              </div>
            </Fragment>
          )}
          {favorites &&
            favorites.map((articles, index) => (
              <FavoriteContent
                key={index}
                id={articles._id}
                title={articles.title}
                description={articles.description}
                content={articles.content}
                publishedAt={articles.publishedAt}
                source={articles.source.name}
                url={articles.url}
              />
            ))}
        </div>
      </Fragment>
    );
  } else return null;
}
