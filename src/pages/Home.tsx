import useAxios from 'axios-hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';
import RepoCard from '../components/repo-card/RepoCard';
import SearchBar from '../components/search-bar/SearchBar';

function Home() {
    // const { response, error, loading } = useAxios({
    //     url: '/search/repositories?q=php',
    //     method: 'get',
    // });
    const navigate = useNavigate();
    const [{ data, loading, error }, refetch] = useAxios('https://api.github.com/search/repositories?q=php');
    const onClickHandler = () => {
        navigate('/testpage');
    };
    return (
        <>
            {loading && 'Loading.....'}
            {error && 'error...'}
            {data && (
                <div className="repo-wrapper">
                    <SearchBar />
                    <div className="repo-container">
                        {data?.items?.slice(0, 10).map((item) => (
                            <RepoCard
                                key={item.id}
                                repoName={item.full_name}
                                repoDescription={item.description}
                                repoForks={item.forks}
                                repoUpdateDate={item.updated_at}
                                repoStars={item.stargazers_count}
                                onClickHandler={onClickHandler}
                            />
                        ))}
                    </div>
                    <Pagination />
                </div>
            )}
        </>
    );
}

export default Home;
