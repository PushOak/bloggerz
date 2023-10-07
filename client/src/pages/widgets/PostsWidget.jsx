import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import SinglePostWidget from "./SinglePostWidget";
import axios from "axios";

export default function PostsWidget({
  userId,
  isProfile = false,
  searchResults,
}) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const filter = useSelector((state) => state.filter);
  // useSelector((state) => {
  //     console.log(state);
  //     return state.filter;
  // })

  const getPosts = async () => {
    try {
        const response = await axios.get("http://localhost:3001/posts", {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setPosts({ posts: response.data }));
    } catch (error) {
        // Handle error
        console.error("Error fetching posts:", error);
    }
};

const getUserPosts = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/posts/${userId}/posts`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setPosts({ posts: response.data }));
    } catch (error) {
        // Handle error
        console.error("Error fetching user posts:", error);
    }
};

  const filterPost = () => {
    if (!filter || filter.length === 0) return posts;

    return posts.filter(
      (post) =>
        post.firstName.toLowerCase().includes(filter) ||
        post.lastName.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, [searchResults]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        {filterPost().map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <SinglePostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
      </div>
    </>
  );
}
