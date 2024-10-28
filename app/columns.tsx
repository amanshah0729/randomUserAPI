"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  picture: string
  status: "pending" | "processing" | "success" | "failed"
  email: string
  lastName: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{payment.lastName}</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  {
    accessorKey: "status",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
// ... existing code ...
{
    accessorKey: "picture",
    header: "Picture",
    cell: ({ row }) => {
      const imageUrl = row.original.picture;
      return <img src={imageUrl} alt="Payment Image" style={{ width: '50px', height: '50px' }} />;
    },
  },
  
// ... existing code ...
]
