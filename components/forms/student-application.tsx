import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { NameSuffix } from "@/helpers/enums";
import { generateControlNo } from "@/lib/functions/generateControlNo";
import { useRouter } from "next/navigation";

const genderOptions = ["Male", "Female"];

interface StudentApplicationFormData {
  control_no: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  gender: string;
  date_of_birth: string;
  birth_place: string;
  nationality: string;
  email: string;
  phone_number: string;
  tel_number?: string;
  religion: string;
}

export default function StudentApplicationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<StudentApplicationFormData>(() => {
    const savedData = localStorage.getItem("studentApplication");
    return savedData
      ? JSON.parse(savedData)
      : {
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
          religion: "",
        };
  });

  useEffect(() => {
    async function fetchControlNo() {
      if (!formData.control_no) {
        const controlNo = await generateControlNo(0);
        setFormData((prevData) => ({ ...prevData, control_no: controlNo }));
        localStorage.setItem("studentApplication", JSON.stringify({ ...formData, control_no: controlNo }));
      }
    }
    fetchControlNo();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    localStorage.setItem("studentApplication", JSON.stringify({ ...formData, [name]: value }));
  };

  const handleSelectChange = (name: keyof StudentApplicationFormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    localStorage.setItem("studentApplication", JSON.stringify({ ...formData, [name]: value }));
  };

  const handleNext = () => {
    router.push("/home-address-form");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Student Application</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input name="control_no" value={formData.control_no} readOnly />
        <Input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
        <Input name="middle_name" placeholder="Middle Name (Optional)" value={formData.middle_name} onChange={handleChange} />
        <Input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />

        <Select onValueChange={(value) => handleSelectChange("suffix", value === "none" ? "" : value)}>
  <SelectTrigger>
    <SelectValue placeholder="Suffix" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem key="none" value="none">None</SelectItem> {/* ✅ Use "none" instead of "" */}
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

        <Input name="date_of_birth" type="date" placeholder="Date of Birth" value={formData.date_of_birth} onChange={handleChange} />
        <Input name="birth_place" placeholder="Birth Place" value={formData.birth_place} onChange={handleChange} />
        <Input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Input name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} />
        <Input name="tel_number" placeholder="Telephone Number (Optional)" value={formData.tel_number} onChange={handleChange} />
        <Input name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />
      </div>
      
      <button onClick={handleNext} className="mt-4 btn btn-primary">Next</button>
    </div>
  );
}
