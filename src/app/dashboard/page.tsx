'use client'

import React from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,

  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";

export default function Dashboard() {
  const rows = [
    {
      key: "1",
      category: "rent",
      payment: "rent",
      amount: -950,
    },
    {
      key: "2",
      category: "rent",
      payment: "rent",
      amount: -950,
    },
    {
      key: "3",
      category: "rent",
      payment: "rent",
      amount: -950,
    },
  ];

  const columns = [
    {
      key: "category",
      label: "Category",
    },
    {
      key: "payment",
      label: "Payment",
    },
    {
      key: "amount",
      label: "Amount",
    },
  ];

  return (
    <div className="dark:bg-teal-800" >
      <Navbar>
        <NavbarBrand className="font-bold text-2xl" >Finesse</NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem><Link color="foreground" href="#">Login</Link></NavbarItem>
          <NavbarItem><Link color="foreground" href="#">Sign Up</Link></NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="flex justify-evenly">
        <div>
          <div className="flex justify-evenly">
            <div>Bar</div>
            <div>
              <p><b>Income</b> {"200"}</p>
              <p><b>Expences</b> {"-950"}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key}>
                  {(columnKey) => (
                    <TableCell className="font-white">{getKeyValue(row, columnKey)}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <p>Chart</p>
        </div>
      </main>
      <footer className="flex justify-center">footer</footer>
    </div>
  );
}
