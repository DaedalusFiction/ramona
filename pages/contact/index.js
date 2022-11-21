import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                fontFamily: "Raleway",
                                fontWeight: "600",
                            }}
                        >
                            Please hire us!
                        </Typography>
                        <br />
                        <Typography>
                            Looking for a great band for your next wedding,
                            graduation, holiday party, or whatever?
                        </Typography>
                        <br />
                        <Typography>
                            Just fill out the form and, yeah.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
