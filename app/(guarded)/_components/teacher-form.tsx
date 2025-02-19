"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

export default function TeacherForm({ onTeacherAdded }: { onTeacherAdded: () => void }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
 
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleDateChange(date: Date | undefined) {
    if (date) {
      setFormData({ ...formData, date_of_birth: date.toISOString() });
      setDate(date);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!formData.email || !formData.password || !formData.phone_number || !formData.address || !formData.date_of_birth ) {
      setErrorMessage("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await fetch("/api/teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setOpen(false);
      onTeacherAdded();
    } catch (error) {
      console.error("Error adding teacher:", error);
      setErrorMessage("Failed to add teacher. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Teacher</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Teacher</DialogTitle>
        </DialogHeader>

        {errorMessage && <div className="text-red-600">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <Label htmlFor="name">First Name</Label>
            <Input id="name" type="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input id="phone_number" type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={`w-[240px] justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2 rounded-lg shadow-lg border bg-white" align="start">
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={handleDateChange} 
                  initialFocus 
                  captionLayout="dropdown-buttons"
                  fromYear={1960} 
                  toYear={2025} 
                  className="rounded-lg border shadow-md p-4 bg-gray-50"
                />
              </PopoverContent>
            </Popover>
          </div>

          

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
