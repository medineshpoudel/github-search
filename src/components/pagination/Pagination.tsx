import React from 'react';

const Pagination = () => {
    return (
        <div>
            <ul id="border-pagination">
                <li>
                    <a className="" href="#">
                        «
                    </a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#" className="active">
                        2
                    </a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">4</a>
                </li>
                <li>
                    <a href="#">5</a>
                </li>
                <li>
                    <a href="#">6</a>
                </li>
                <li>
                    <a href="#">7</a>
                </li>
                <li>
                    <a href="#">»</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
