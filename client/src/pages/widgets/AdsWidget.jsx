import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

export default function AdsWidget() {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <>
            <WidgetWrapper>
                <FlexBetween>
                    <Typography color={dark} variant="h5" fontWeight="500">
                        Sponsored
                    </Typography>
                    <Typography color={medium}>Create Ad</Typography>
                </FlexBetween>
                <img
                    width="100%"
                    height="auto"
                    alt="advertisement"
                    src="http://localhost:3001/assets/info4.jpeg"
                    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                />
                <FlexBetween>
                    <Typography color={main}>DudeIndustries</Typography>
                    <Typography color={medium}>dudindustries.com</Typography>
                </FlexBetween>
                <Typography color={medium} m="0.5rem 0">
                    Our company provides the best services in the industry. You will not find a better firm!
                </Typography>
            </WidgetWrapper>
        </>
    );
};
