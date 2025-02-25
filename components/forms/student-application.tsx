import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { NameSuffix } from "@/helpers/enums";
import { generateControlNo } from "@/lib/functions/generateControlNo";

const genderOptions = ["Male", "Female"];

interface StudentApplicationProps {
  data: {
    control_no: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    gender: string;
    date_of_birth: string;
    birth_place: string;
    nationality: string;
    email: string;
    phone_number: string;
    tel_number: string;
    religion: string;
  };
  onUpdate: (data: Partial<StudentApplicationProps["data"]>) => void;
}

export default function StudentApplication({ data, onUpdate }: StudentApplicationProps) {
  useEffect(() => {
    async function fetchControlNo() {
      const controlNo = await generateControlNo(0); 
      onUpdate({ control_no: controlNo });
    }
    if (!data.control_no) {
      fetchControlNo();
    }
  }, [data.control_no, onUpdate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    onUpdate({ ...data, [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Student Application</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <Input name="control_no" value={data.control_no} readOnly />
          <Input name="first_name" placeholder="First Name" value={data.first_name} onChange={handleChange} />
          <Input name="middle_name" placeholder="Middle Name (Optional)" value={data.middle_name} onChange={handleChange} />
          <Input name="last_name" placeholder="Last Name" value={data.last_name} onChange={handleChange} />

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

          <Input name="date_of_birth" type="date" value={data.date_of_birth} placeholder="Date of Birth" onChange={handleChange} />
          <Input name="birth_place" placeholder="Birth Place" value={data.birth_place} onChange={handleChange} />
          <Input name="nationality" placeholder="Nationality" value={data.nationality} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={data.email} onChange={handleChange} />

          <Input name="phone_number" placeholder="Phone Number" value={data.phone_number} onChange={handleChange} />
          <Input name="tel_number" placeholder="Telephone Number (Optional)" value={data.tel_number} onChange={handleChange} />
          <Input name="religion" placeholder="Religion" value={data.religion} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
