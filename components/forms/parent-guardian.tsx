import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ParentGuardianForm() {

  const [role, setRole] = useState<"Parent" | "Guardian">("Parent");
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    occupation: "",
    annual_income: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value: "Parent" | "Guardian") => {
    setRole(value);
  };


  return (
    <div >
      <h2 className="text-xl font-semibold mb-4">Parent/Guardian Information</h2>

      <RadioGroup
        value={role}
        onValueChange={handleRoleChange}
        className="mb-4 flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Parent" id="parent" />
          <Label htmlFor="parent">Parent</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Guardian" id="guardian" />
          <Label htmlFor="guardian">Guardian</Label>
        </div>
      </RadioGroup>

      <Input
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="middle_name"
        placeholder="Middle Name"
        value={formData.middle_name}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="occupation"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="annual_income"
        type="number"
        placeholder="Annual Income"
        value={formData.annual_income}
        onChange={handleChange}
        className="mb-2"
      />
      
     
    </div>
  );
}
