"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Trash } from "lucide-react";
import ClassroomForm from "./classroom-form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 10;
type Teacher = {
    id: string;
    email: string;
    username: string;
    password: string;
    phone_number: string;
    address: string;
    role: string;
    date_of_birth: string;
    name: string; // Add this property to match the usage in the code
  };
  
  type Classroom = {
    teacher: Teacher | null; // Update the type to reflect that teacher can be an object or null
    id: string;
    name: string;
    grade_level: string;
    teacherId?: string;
  };
  
  export default function ClassroomTable() {
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      fetchClassrooms();
    }, []);
  
    async function fetchClassrooms() {
      setLoading(true);
      fetch("/api/classroom")
        .then((res) => res.json())
        .then((data) => setClassrooms(data))
        .finally(() => setLoading(false));
    }
  
    async function handleDelete(id: string) {
      if (confirm("Are you sure you want to delete this classroom?")) {
        setDeleting(id);
        await fetch(`/api/classroom/${id}`, { method: "DELETE" });
        setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
        setDeleting(null);
      }
    }
  
    const totalPages = Math.ceil(classrooms.length / ITEMS_PER_PAGE);
    const paginatedClassrooms = classrooms.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
    return (
      <div className="w-full px-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Classroom Management</h1>
          <ClassroomForm onClassroomAdded={fetchClassrooms} />
        </div>
  
        <ScrollArea className="w-full h-[500px] border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Name</TableHead>
                <TableHead>Grade Level</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                    <TableCell className="text-center"><Skeleton className="h-8 w-8 rounded-full mx-auto" /></TableCell>
                  </TableRow>
                ))
              ) : paginatedClassrooms.length > 0 ? (
                paginatedClassrooms.map((classroom, index) => (
                  <TableRow
                    key={classroom.id}
                    className={`hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <TableCell>{classroom.name}</TableCell>
                    <TableCell> {classroom.grade_level.replace("GRADE_", "Grade ")}</TableCell>

                    <TableCell>{classroom.teacher ? classroom.teacher.name : "Unassigned"}</TableCell>
  
                    <TableCell className="text-center">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(classroom.id)}
                        disabled={deleting === classroom.id}
                      >
                        {deleting === classroom.id ? <Loader2 className="animate-spin w-4 h-4" /> : <Trash />}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                    No classrooms found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
  
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 ? (
                <PaginationItem>
                  <PaginationPrevious onClick={() => setCurrentPage((prev) => prev - 1)} />
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationPrevious className="pointer-events-none opacity-50" />
                </PaginationItem>
              )}
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages ? (
                <PaginationItem>
                  <PaginationNext onClick={() => setCurrentPage((prev) => prev + 1)} />
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationNext className="pointer-events-none opacity-50" />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  }