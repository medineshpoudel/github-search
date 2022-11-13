import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';
import RepoCard from '../components/repo-card/RepoCard';
import RepoInfo from '../components/repo-card/RepoInfo';
import SearchBar from '../components/search-bar/SearchBar';
import { useGlobalContext } from '../context/Context.js';

function Home() {
    const { items: data, isLoading, isError, itemPerPage } = useGlobalContext();
    const navigate = useNavigate();
    const totalRepoCount = data?.total_count;
    const selectItem = (postNumber) => {
        itemPerPage(postNumber);
    };
    const onClickHandler = (data: any) => {
        console.log(data);
        navigate(`/details/${data.owner.login}`);
    };

    return (
        <div className="repo-wrapper">
            <SearchBar />
            <RepoInfo repoCount={totalRepoCount} selectItem={selectItem} />
            <div className="repo-container">
                {isLoading && 'Loading.....'}
                {isError && 'Error....'}
                {data && (
                    <div>
                        {data?.items?.map((item) => (
                            <RepoCard
                                data={item}
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
                )}
            </div>
            <Pagination />
        </div>
    );
}

export default Home;
