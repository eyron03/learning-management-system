import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { NameSuffix, CivilStatus } from "@/helpers/enums";
import { generateControlNo } from "@/lib/functions/generateControlNo";

const genderOptions = ["Male", "Female"];

export default function StudentApplication() {
  const [formData, setFormData] = useState({
    control_no: "",
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
    religion: ""
  });

  useEffect(() => {
    async function fetchControlNo() {
      const controlNo = await generateControlNo(0); // Replace 0 with the appropriate latest number
      setFormData((prevData) => ({ ...prevData, control_no: controlNo }));
    }
    fetchControlNo();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/student-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Application submitted successfully:", data);
      } else {
        console.error("Failed to submit application:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Student Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input name="control_no" value={formData.control_no} readOnly />
          <Input name="first_name" placeholder="First Name" onChange={handleChange} />
          <Input name="middle_name" placeholder="Middle Name (Optional)" onChange={handleChange} />
          <Input name="last_name" placeholder="Last Name" onChange={handleChange} />

          <Select onValueChange={(value) => handleSelectChange("suffix", value === "none" ? "" : value)}>
            <SelectTrigger>
              <SelectValue placeholder="Suffix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="none" value="none">None</SelectItem>
              {Object.values(NameSuffix).map((suffix) => (
                <SelectItem key={suffix} value={suffix}>{suffix}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleSelectChange("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map((gender) => (
                <SelectItem key={gender} value={gender}>{gender}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleSelectChange("civil_status", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Civil Status" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(CivilStatus).map((status) => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
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
          <Input name="religion" placeholder="Religion" onChange={handleChange} />
        </div>
        <button type="submit" className="mt-4 btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
}