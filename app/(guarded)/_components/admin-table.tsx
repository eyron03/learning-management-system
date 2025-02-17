"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Trash } from 'lucide-react'
import AdminForm from "./admin-form"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type Admin = {
  id: string
  email: string
  username: string
  role: string
}

const ITEMS_PER_PAGE = 10

export default function AdminTable() {
  const [admins, setAdmins] = useState<Admin[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchAdmins()
  }, [])

  async function fetchAdmins() {
    setLoading(true)
    fetch("/api/admin")
      .then((res) => res.json())
      .then((data) => setAdmins(data))
      .finally(() => setLoading(false))
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this admin?")) {
      setDeleting(id)
      await fetch(`/api/admin/${id}`, { method: "DELETE" })
      setAdmins(admins.filter((admin) => admin.id !== id))
      setDeleting(null)
    }
  }

  const totalPages = Math.ceil(admins.length / ITEMS_PER_PAGE)
  const paginatedAdmins = admins.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Management</h1>
        <AdminForm onAdminAdded={fetchAdmins} />
      </div>

      <ScrollArea className="w-full h-[500px] border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  <Loader2 className="animate-spin inline-block w-6 h-6 text-gray-500" />
                </TableCell>
              </TableRow>
            ) : paginatedAdmins.length > 0 ? (
              paginatedAdmins.map((admin, index) => (
                <TableRow
                  key={admin.id}
                  className={`hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.username}</TableCell>
                  <TableCell className="uppercase font-semibold">{admin.role}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(admin.id)}
                      disabled={deleting === admin.id}
                    >
                      {deleting === admin.id ? <Loader2 className="animate-spin w-4 h-4" /> : <Trash />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                  No admins found.
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
                <PaginationPrevious onClick={() => setCurrentPage(prev => prev - 1)} />
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
                <PaginationNext onClick={() => setCurrentPage(prev => prev + 1)} />
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
  )
}
