import React from 'react';
import PostsTable from "../../components/PostsTable";
import CreatePost from "../../components/CreatePost";

const Posts = () => {
    return (
        <div style={{maxWidth: '40%', margin: '50px auto'}}>
            <CreatePost/>
            <PostsTable/>
        </div>
    );
};

export default Posts;
