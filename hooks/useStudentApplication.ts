import { useState, useEffect } from "react";

const initialFormData = {
  studentApplication: {
    control_no: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    suffix: "",
    gender: "",

    date_of_birth: "",
    birth_place: "",
    nationality: "",
    email: "",
    phone_number: "",
    tel_number: "",
    religion: ""
  },
  homeAddress: {
    street: "",
    city: "",
    province: "",
    postal_code: "",
    student_application_id: ""
  },
  admission: {
    admission_type: "",
    intended_grade_level: "",
    previous_school: "",
    previous_school_id: "",
    status: ""
  },
  parentGuardian: {
    father_first_name: "",
    father_middle_name: "",
    father_last_name: "",
    father_occupation: "",
    father_annual_income: "",
    father_phone_number: "",
    father_deceased: false,
    mother_first_name: "",
    mother_middle_name: "",
    mother_last_name: "",
    mother_occupation: "",
    mother_annual_income: "",
    mother_phone_number: "",
    mother_deceased: false,
    guardian_first_name: "",
    guardian_middle_name: "",
    guardian_last_name: "",
    guardian_occupation: "",
    guardian_annual_income: "",
    guardian_phone_number: ""
  },
  medicalRecord: {
    medical_condition: ""
  },
  school: {
    medical_condition: ""
  }
};

export function useStudentApplication() {
  const [step, setStep] = useState<number | null>(null);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setTimeout(() => setStep(0), 1000);
  }, []);

  const updateFormData = <T extends keyof typeof initialFormData>(
    section: T,
    data: Partial<typeof initialFormData[T]>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const nextStep = () => setStep((prev) => (prev !== null ? Math.min(prev + 1, 6) : 0));
  const prevStep = () => setStep((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/student-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to submit form");

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form.");
    }
  };

  return { step, formData, updateFormData, nextStep, prevStep, handleSubmit };
}
