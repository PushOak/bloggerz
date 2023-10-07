import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import axios from "axios";

export default function FriendsWidget({ userId }) {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  // const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // Function to ensure friends is treated as an array
  const getFriendsList = () => {
    return Array.isArray(friends) ? friends : [];
  };

  // admin dashboard should be similar to this function
  const getFriends = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/${userId}/friends`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      dispatch(setFriends({ friends: data }));
    } catch (error) {
      // Handle error here
      console.error("Error fetching friends:", error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []); //es-lint-disable-line reacth-hooks/exhaustive-deps

  const friendsList = getFriendsList();

  return (
    <>
      <WidgetWrapper>
        <Typography
          color={palette.neutral.dark}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Your Friends List
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
          {friendsList.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))}
        </Box>
      </WidgetWrapper>
    </>
  );
}
