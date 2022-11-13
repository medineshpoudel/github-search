import React from 'react';

interface UserCardProps {
    repoName?: string;
    repoDescription?: string;
    repoStars?: number;
    repoForks?: number;
    repoUpdateDate?: Date;
    onClickHandler: () => any;
}
const UserCard = ({
    repoName = 'Repo Name',
    repoDescription = 'description',
    repoStars = 10,
    repoForks = 10,
    repoUpdateDate,
    onClickHandler,
}: UserCardProps) => {
    return (
        <div className="repo-card">
            <div className="repo-name" onClick={onClickHandler}>
                {repoName}
            </div>
            <div className="repo-description">{repoDescription}</div>
            <div className="forks">
                <div className="forks-items">
                    {repoStars} <i className="fa-regular fa-star"></i>
                </div>
                <div className="forks-items">
                    {repoForks} <i className="fa fa-code-fork"></i>
                </div>
                <div className="forks-items">Updated at: {repoUpdateDate}</div>
            </div>
        </div>
    );
};

export default UserCard;
