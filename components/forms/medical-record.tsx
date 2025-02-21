import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function MedicalRecordForm() {

  const [hasMedicalCondition, setHasMedicalCondition] = useState(false);
  const [formData, setFormData] = useState({
    medical_condition: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Record</h2>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="hasMedicalCondition"
          checked={hasMedicalCondition}
          onCheckedChange={(checked) => setHasMedicalCondition(checked === true)}
        />
        <Label htmlFor="hasMedicalCondition">Do you have any medical condition?</Label>
      </div>

      {hasMedicalCondition && (
        <Input
          name="medical_condition"
          placeholder="Medical Condition"
          value={formData.medical_condition}
          onChange={handleChange}
          className="mb-2"
        />
      )}


    </div>
  );
}
