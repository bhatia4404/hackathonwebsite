import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
const steps = [
  {
    label: "Registrations",
    description: (
      <div>
        <div className="flex gap-2">
          <div>
            <p className="text-[#00B9E8] font-bold text-md">Starts</p>
            <p className="font-semibold">DD/MM/YYYY</p>
            <p className="font-semibold">HH:MM</p>
          </div>
          <div>
            <p className="text-[#00B9E8] font-bold text-md">Ends</p>
            <p className="font-semibold">DD/MM/YYYY</p>
            <p className="font-semibold">HH:MM</p>
          </div>
        </div>
      </div>
    ),
    active: true,
  },
  {
    label: "Hackathon",
    description: (
      <div>
        <div className="flex gap-2">
          <div>
            <p className="text-[#00B9E8] font-bold text-md">Starts</p>
            <p className="font-semibold">DD/MM/YYYY</p>
            <p className="font-semibold">HH:MM</p>
          </div>
          <div>
            <p className="text-[#00B9E8] font-bold text-md">Ends</p>
            <p className="font-semibold">DD/MM/YYYY</p>
            <p className="font-semibold">HH:MM</p>
          </div>
        </div>
      </div>
    ),
    active: true,
  },
];

export function PhasesContent() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step active={true} key={step.label}>
            <StepLabel className="text-sm">{step.label}</StepLabel>
            <StepContent>
              {step.description}
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
