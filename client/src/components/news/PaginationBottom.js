import React from "react";

function Pagination({ pages, currentPage, changePage, totalResults }) {
  return (
    <>
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          {pages &&
            pages.length <= 10 &&
            pages.map((page, index) => (
              <>
                <li
                  className={`page-item ${
                    index + 1 === currentPage ? "active" : null
                  }`}
                  key={index}
                  onClick={(e) => changePage(e, index)}
                >
                  <a className='page-link' href='#'>
                    {page}
                  </a>
                </li>
              </>
            ))}
        </ul>
      </nav>

      <div className='text-center justify-content-center'>
        Total Results - {totalResults}
      </div>
    </>
  );
}

export default Pagination;
