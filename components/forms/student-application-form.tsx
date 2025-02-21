import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import StudentApplication from "./StudentApplication";
import Admission from "./Admission";
import Parent from "./Parent";
import Guardian from "./Guardian";
import MedicalRecord from "./MedicalRecord";
import School from "./School";

const steps = [
  "Student Application",
  "Admission",
  "Parent",
  "Guardian",
  "Medical Record",
  "School",
];

export default function StudentApplicationForm() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StudentApplication />;
      case 1:
        return <Admission />;
      case 2:
        return <Parent />;
      case 3:
        return <Guardian />;
      case 4:
        return <MedicalRecord />;
      case 5:
        return <School />;
      default:
        return <StudentApplication />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Breadcrumb>
        {steps.map((label, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink className={step === index ? "text-blue-500" : ""}>{label}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      
      {renderStep()}
      
      <div className="flex justify-between mt-4">
        <Button onClick={prevStep} disabled={step === 0} variant="outline">
          Previous
        </Button>
        <Button onClick={nextStep} disabled={step === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
