import React from 'react';

export interface UserDetailsProps {
    data: {
        avatar_url: string;
        html_url: string;
        name: string;
        public_repos: string;
        followers: string;
        following: string;
    };
}

const UserDetails = ({ data }: UserDetailsProps) => {
    return (
        <div className="owner">
            <div className="owner-image-wrapper">
                <img src={data?.avatar_url} alt="owner-image" className="owner-image" />
            </div>
            <div className="owner-name">
                <h1>
                    <a href={data.html_url} target="_blank">
                        {data?.name}
                    </a>
                </h1>
            </div>
            <div className="owner-info">
                <div className="owner-info-items">
                    Issues: <b>{data.public_repos}</b>
                </div>
                <div className="owner-info-items">
                    Followers: <b>{data.followers}</b>
                </div>
                <div className="owner-info-items">
                    Followings: <b>{data.following}</b>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
