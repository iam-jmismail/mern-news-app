import React from 'react'

function PaginationTop({ currentPage, changePreviousPage, changeNextPage, totalPages }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination  justify-content-center">
                {currentPage > 1 && (
                    <li className='page-item' onClick={changePreviousPage}> <a className="page-link" href="#">Previous Page </a> </li>
                )}

                {currentPage < totalPages && (
                    <li className='page-item' onClick={changeNextPage}> <a className="page-link" href="#">Next Page</a> </li>
                )}

            </ul>
        </nav>
    )
}

export default PaginationTop
