import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Just Now',
        description: `Finished task #features 4.`,
    },
    {
        label: '2 Feb, 11:30PM',
        description:
            '@Jessi retwit your post',
    },
    {
        label: '3 days ago',
        description: `Call to customer #Jacob and discuss the detail.`,
    },
    {
        label: 'Just now',
        description: `Finished task #features 4.`,
    },
    {
        label: '4 days ago',
        description: `#John Doe Lorem Ipsum is simply dummy text oftting industry.`,
    },
    {
        label: '3 days ago',
        description: `Call to customer #Jacob and discuss the detail.`,
    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                </Paper>
            )}
        </Box>
    );
}
