"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export default function ClassroomForm({ onClassroomAdded }: { onClassroomAdded: () => void }) {
  const [name, setName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/classroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, grade_level: gradeLevel }),
    });

    if (res.ok) {
      onClassroomAdded();
      setOpen(false);
      setName("");
      setGradeLevel("");
    }
    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Classroom</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Classroom</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Label>Grade Level</Label>
            <Input value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} required />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
