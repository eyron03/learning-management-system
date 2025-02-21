import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdmissionForm() {
  
  const [formData, setFormData] = useState({
    admission_type: "",
    intended_grade_level: "",
    previous_school: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  return (
    <div >
      <h2 className="text-xl font-semibold mb-4">Admission Details</h2>
      <Input
        name="admission_type"
        placeholder="Admission Type"
        value={formData.admission_type}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="intended_grade_level"
        placeholder="Intended Grade Level"
        value={formData.intended_grade_level}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="previous_school"
        placeholder="Previous School"
        value={formData.previous_school}
        onChange={handleChange}
        className="mb-2"
      />
      
     
    </div>
  );
}
