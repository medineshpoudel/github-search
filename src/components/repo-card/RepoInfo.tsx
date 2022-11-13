import React, { useState } from 'react';

export interface RepoInfoProps {
    repoCount: number;
    selectItem: (num: number) => any;
}
const RepoInfo = ({ repoCount, selectItem }: RepoInfoProps) => {
    const [items, setItems] = useState<string | number>('Items');
    const clickHandler = (number) => {
        setItems(number);
        selectItem(number);
    };
    return (
        <div className="repo-info">
            <div className="repo-info-count">
                Total Repo: <b>{repoCount}</b>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                    {items} <i className="fa fa-caret-down" aria-hidden="true"></i>
                </button>
                <div className="dropdown-content">
                    <a onClick={() => clickHandler(5)}>Default</a>
                    <a onClick={() => clickHandler(10)}>10</a>
                    <a onClick={() => clickHandler(30)}>30</a>
                    <a onClick={() => clickHandler(30)}>50</a>
                </div>
            </div>
        </div>
    );
};

export default RepoInfo;
