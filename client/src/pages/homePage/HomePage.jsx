import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "pages/navbar/Navbar";
import UserWidget from "pages/widgets/UserWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import AdsWidget from "pages/widgets/AdsWidget";
import FriendsWidget from "pages/widgets/FriendsWidget";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Box>
        <Navbar />
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="space-between"
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <MyPostWidget picturePath={picturePath} authorId={_id} />
            <PostsWidget userId={_id} searchResults={searchResults} />
          </Box>
          {isNonMobileScreens && (
            <Box flexBasis="26%">
              <AdsWidget />
              <Box m="2rem 0" />
              <FriendsWidget userId={_id} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
