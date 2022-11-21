import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import NativeImage from "../../components/general/NativeImage";
import { aboutContent, eventsPreviewContent } from "../../siteInfo";
import DecorativeHeader from "../general/DecorativeHeader";

const AboutPreview = () => {
    return (
        <Box className="section">
            <Container maxWidth="lg">
                <Box sx={{ marginBottom: "4rem" }}>
                    <DecorativeHeader
                        text="ABOUT US"
                        image={eventsPreviewContent.bigDividerImage}
                    />
                </Box>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                gap: "1rem",
                                justifyContent: "center",
                            }}
                        >
                            <Typography>
                                This is the description of the band called
                                Ramona Martinez and the Holy Smokes
                            </Typography>
                            <Typography>
                                They are a really cool band and they sound just
                                great!
                            </Typography>
                            <Typography>
                                Really everyone should be like them, if you ask
                                me. Very cool!
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    marginTop: "1rem",
                                }}
                            >
                                <Link href={"/about"}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        endIcon={<ArrowRightAlt />}
                                    >
                                        More About Us
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeImage
                            image={aboutContent.image}
                            maxSize={2000}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutPreview;
