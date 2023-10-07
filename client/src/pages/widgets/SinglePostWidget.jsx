import React, { useState } from "react";
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, setPost } from "state";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function SinglePostWidget({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments,
}) {
    const [isComment, setIsComment] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);

    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.neutral.main;

    const patchLike = async () => {
        try {
          const response = await axios.patch(
            `http://localhost:3001/posts/${postId}/like`,
            { userId: loggedInUserId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const updatedPost = response.data;
          dispatch(setPost({ post: updatedPost }));
        } catch (error) {
          // Handle error here
          console.error("Error liking post:", error);
        }
      };
      

      const handleDeletePost = async () => {
        try {
          const response = await axios.delete(`http://localhost:3001/posts/${postId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (response.status === 200) {
            dispatch(deletePost(postId));
          }
        } catch (error) {
          // Handle error here
          console.error("Error deleting post:", error);
        }
      };
      

    return (
        <>
            <WidgetWrapper m="2rem 0">
                <Friend
                    friendId={postUserId}
                    name={name}
                    subtitle={location}
                    userPicturePath={userPicturePath}
                />
                <Typography color={main} sx={{ mt: "1rem" }}>
                    {description}
                </Typography>
                {picturePath && (
                    <img
                        width="100%"
                        height="auto"
                        alt="post"
                        style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                        src={`http://localhost:3001/assets/${picturePath}`}
                    />
                )}
                <FlexBetween mt="0.25rem">
                    <FlexBetween gap="1rem">

                        <FlexBetween gap="0.3rem">
                            <IconButton onClick={patchLike}>
                                {isLiked ? (
                                    <FavoriteOutlined sx={{ color: primary }} />
                                ) : (
                                    <FavoriteBorderOutlined />
                                )}
                            </IconButton>
                            <Typography>{likeCount}</Typography>
                        </FlexBetween>

                        <FlexBetween gap="0.3rem">
                            <IconButton onClick={() => setIsComment(!isComment)}>
                                <ChatBubbleOutlineOutlined />
                            </IconButton>
                            <Typography>{comments.length}</Typography>
                        </FlexBetween>

                        {postUserId === loggedInUserId && <FlexBetween gap="0.3rem">
                            <IconButton onClick={handleDeletePost}>
                                <DeleteIcon />
                            </IconButton>
                            <Typography>{comments.length}</Typography>
                        </FlexBetween>}

                    </FlexBetween>

                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
                </FlexBetween>
                {isComment && (
                    <Box mt="0.5rem">
                        {comments.map((comment, index) => (
                            <Box key={`${name}-${index}`}>
                                <Divider />
                                <Typography sx={{ color: main, m: "0.5rem", pl: "1rem" }}>
                                    {comment}
                                </Typography>
                            </Box>
                        ))}
                        <Divider />
                    </Box>
                )}
            </WidgetWrapper>
        </>
    );
};
