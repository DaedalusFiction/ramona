import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import NativeImage from "../general/NativeImage";

const DecorativeHeader = ({ image, text }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    // marginBottom: "2rem",
                    transform: "scaleY(-1)",
                }}
            >
                <NativeImage image={image} maxSize={300} />
            </Box>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
                {text}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    // marginBottom: "4rem",
                    // transform: "scaleY(-1)",
                }}
            >
                <NativeImage image={image} maxSize={300} />
            </Box>
        </Box>
    );
};

export default DecorativeHeader;
