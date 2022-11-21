import { ArrowCircleDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { heroContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroContent.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "0% 10%",
                display: "flex",
                height: "100vh",
                alignItems: { xs: "center", md: "end" },
            }}
        >
            <Container>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {"RAMONA".split("").map((letter, index) => {
                            return (
                                <Box key={index}>
                                    <Typography
                                        variant="h1"
                                        component="p"
                                        sx={{
                                            color: theme.palette.primary.main,
                                        }}
                                    >
                                        {letter}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {"Martinez".split("").map((letter, index) => {
                            return (
                                <Box key={index}>
                                    <Typography
                                        variant="h2"
                                        component="p"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontFamily: theme.fonts.title,
                                        }}
                                    >
                                        {letter}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                <Typography
                    variant="h5"
                    sx={{
                        color: theme.palette.primary.main,
                        fontFamily: theme.fonts.titleAccent,
                        textAlign: "center",
                        margin: "1em 0",
                    }}
                >
                    & the
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.primary.main,
                        textAlign: "center",
                        fontFamily: theme.fonts.titleAccent,
                        fontSize: "4rem",
                    }}
                >
                    Holy Smokes
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "4rem 0 2rem 0",
                    }}
                >
                    <a href="#music-preview">
                        <ArrowCircleDown
                            sx={{
                                color: theme.palette.custom.lightMuted,
                                fontSize: "4rem",
                                borderRadius: "100%",
                                "&:hover": {
                                    transition: "300ms",
                                    color: theme.palette.secondary.main,
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                    </a>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
