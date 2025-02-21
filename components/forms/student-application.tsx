import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { NameSuffix, CivilStatus } from "@/helpers/enums"; 

const genderOptions = ["Male", "Female"]; 

export default function StudentApplication() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    suffix: "",
    gender: "",
    civil_status: "",
    date_of_birth: "",
    birth_place: "",
    nationality: "",
    email: "",
    phone_number: "",
    tel_number: "",
    permanent_address: "",
    current_address: "",
    postal_code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (

      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">Student Application</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <Input name="first_name" placeholder="First Name" onChange={handleChange} />
          <Input name="middle_name" placeholder="Middle Name (Optional)" onChange={handleChange} />
          <Input name="last_name" placeholder="Last Name" onChange={handleChange} />

          <Select onValueChange={(value) => handleSelectChange("suffix", value === "none" ? "" : value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Suffix" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem key="none" value="none">
                        None
                    </SelectItem>
                    {Object.values(NameSuffix).map((suffix) => (
                    <SelectItem key={suffix} value={suffix}>
                        {suffix}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>


          
          <Select onValueChange={(value) => handleSelectChange("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map((gender) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleSelectChange("civil_status", value)}>
            <SelectTrigger>
                <SelectValue placeholder="Civil Status" />
            </SelectTrigger>
            <SelectContent>
                {Object.values(CivilStatus).map((status) => (
                <SelectItem key={status} value={status}>
                    {status}
                </SelectItem>
                ))}
            </SelectContent>
            </Select>

          <Input name="date_of_birth" type="date" placeholder="Date of Birth" onChange={handleChange} />
          <Input name="birth_place" placeholder="Birth Place" onChange={handleChange} />
          <Input name="nationality" placeholder="Nationality" onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
              <Input name="permanent_address" placeholder="Permanent Address" onChange={handleChange} />
              <Input name="current_address" placeholder="Current Address" onChange={handleChange} />
              <Input name="postal_code" placeholder="Postal Code" onChange={handleChange} />
          <Input name="phone_number" placeholder="Phone Number" onChange={handleChange} />
          <Input name="tel_number" placeholder="Telephone Number (Optional)" onChange={handleChange} />
        </div>
        </div>
  );
}
