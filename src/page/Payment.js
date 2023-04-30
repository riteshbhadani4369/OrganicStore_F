import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Row, Col } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import useRazorpay from "react-razorpay";
import { useParams } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Organic store
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Shipping address',];

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line "
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

const Payment = () => {

    const params = useParams()
    // alert(params.id);
    const [activeStep, setActiveStep] = React.useState(0);
    const Razorpay = useRazorpay();
    // const handleNext = () => {
    //     setActiveStep(activeStep + 1);

    // };
    const handleNext = React.useCallback(() => {
        setActiveStep(activeStep + 1);
        const options = {
            key: "rzp_test_VNWhrgeOoOO1qR",
            amount: "300" * 100,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            // image: "https://example.com/your_logo",
            // order_id: "Test",
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Mohit Godhani",
                email: "gm.godhanimohit@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    return (
        <div>
            <Header />
            <Container>
                <Row className='my-5'>
                    <Col lg={12} style={{ margin: "auto" }}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            {/* <AppBar
                                position="absolute"
                                color="default"
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                                }}
                            >
                                <Toolbar>
                                    <Typography variant="h6" color="inherit" noWrap>
                                        Company name
                                    </Typography>
                                </Toolbar>
                            </AppBar> */}
                            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                    <Typography component="h1" variant="h4" align="center">
                                        Checkout
                                    </Typography>
                                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    {activeStep === steps.length ? (
                                        <>
                                            {/* <React.Fragment>
                                                <Typography variant="h5" gutterBottom>
                                                    Thank you for your order.
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Your order number is #2001539. We have emailed your order
                                                    confirmation, and will send you an update when your order has
                                                    shipped.
                                                </Typography>
                                            </React.Fragment> */}
                                        </>
                                    )
                                        : (
                                            <React.Fragment>
                                                {getStepContent(activeStep)}
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    {activeStep !== 0 && (
                                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                            Back
                                                        </Button>
                                                    )}

                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 3, ml: 1 }}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                                    </Button>
                                                </Box>
                                            </React.Fragment>
                                        )}
                                </Paper>
                                <Copyright />
                            </Container>
                        </ThemeProvider>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Payment