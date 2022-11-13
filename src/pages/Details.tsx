import useAxios from 'axios-hooks';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from '../components/user-details/UserDetails';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const [{ data, loading }] = useAxios(`https://api.github.com/users/${id}`);
    return (
        <div className="detail-wrapper">
            {loading && 'Loading...'}
            {data && <UserDetails data={data} />}
            <button className="go-back-btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default Details;
