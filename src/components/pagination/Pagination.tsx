import React from 'react';
import { useGlobalContext } from '../../context/Context';
interface PaginationProps {
    prevBtnLabel?: string;
    nextBtnLabel?: string;
}
const Pagination = ({ prevBtnLabel = 'Previous', nextBtnLabel = 'Next' }: PaginationProps) => {
    const { page, no_of_page, getPrevPage, getNextPage } = useGlobalContext();

    return (
        <div className="pagination">
            <button className="pagination-btn" onClick={() => getPrevPage()}>
                {prevBtnLabel}
            </button>
            <p>
                {page == 0 ? 1 : page} of {no_of_page}
            </p>
            <button className="pagination-btn" onClick={() => getNextPage()}>
                {nextBtnLabel}
            </button>
        </div>
    );
};

export default Pagination;

// <li>
// <a >1</a>
// </li>
// <li>
// <a  className="active">
//     2
// </a>
// </li>
// <li>
// <a >3</a>
// </li>
// <li>
// <a >4</a>
// </li>
// <li>
// <a >5</a>
// </li>
// <li>
// <a >6</a>
// </li>
// <li>
// <a >7</a>
// </li>
