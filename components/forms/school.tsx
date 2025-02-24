import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface MedicalRecordFormProps {
  data: {
    medical_condition: string;
  };
  onUpdate: (updatedData: Partial<MedicalRecordFormProps["data"]>) => void;
}

export default function MedicalRecordForm({ data, onUpdate }: MedicalRecordFormProps) {
  const [hasMedicalCondition, setHasMedicalCondition] = useState(!!data.medical_condition);
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
    setHasMedicalCondition(!!data.medical_condition);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setHasMedicalCondition(checked);
    if (!checked) {
      const updatedData = { ...formData, medical_condition: "" };
      setFormData(updatedData);
      onUpdate(updatedData);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Record</h2>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="hasMedicalCondition"
          checked={hasMedicalCondition}
          onCheckedChange={(checked) => handleCheckboxChange(checked === true)}
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