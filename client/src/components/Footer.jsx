import React from "react";
import {
    Box,
    IconButton,
    Typography,
    Link as MuiLink,
} from "@mui/material";
import { Home, Info } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Footer({ children }) {
    const navigate = useNavigate();

    // Handle navigation to the About page
    const goToAboutPage = () => {
        navigate("/about");
    };

    // Handle navigation to the Homepage
    const goToHomepage = () => {
        navigate("/home");
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem 6%"
            backgroundColor="#333" // Customize the background color
            color="white" // Customize the text color
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} BloggerZ by Demitry Gavrisenko
            </Typography>
            <Box display="flex" alignItems="center">
                <MuiLink
                    component="button"
                    variant="body2"
                    onClick={goToHomepage}
                    style={{ color: "inherit", marginRight: "1rem" }} // Customize the link style
                >
                    Back to Homepage
                </MuiLink>
                <IconButton
                    onClick={goToAboutPage}
                    style={{ color: "#c2c0c0", marginLeft: "1rem" }} // Customize the icon style
                >
                    <Info />
                </IconButton>
            </Box>
        </Box>
    );
}
