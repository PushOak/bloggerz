import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "./LoginForm";
import Footer from "components/Footer";

export default function LoginPage() {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                minHeight="100vh" // Make the container take up the full viewport height
            >
                <Box
                    width="100%"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem 6%"
                    textAlign="center"
                >
                    <Typography
                        fontWeight="bold"
                        fontSize="32px"
                        color="primary"
                    >
                        BloggerZ
                    </Typography>
                </Box>

                <Box
                    width={isNonMobileScreens ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                >
                    <Typography
                        fontWeight="500"
                        variant="h5"
                        sx={{
                            mb: "1.5rem"
                        }}
                    >
                        Welcome to BloggerZ, the place for blog lovers!
                    </Typography>
                    <LoginForm />
                </Box>
            </Box>
            <Footer />
        </>
    )
};
