import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AllUserFetch } from "@/redux/apicall";
import { useDispatch, useSelector } from "react-redux";


const Userlists = () => {
  const allusers = useSelector((state) => state.list.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const users = await dispatch(AllUserFetch());
    };
    fetchUser();
  }, [dispatch]);
    const formatDate = (date) => {
      const formattedDate = new Date(date).toLocaleDateString("en-GB");       return formattedDate;
    };

  return (
    <div className="min-w-screen  ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">DOB</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-right text-white">Password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allusers.map((invoice) => (
            <TableRow key={invoice.id} >
              <TableCell className="font-medium text-left" >
                {invoice.name}
              </TableCell>
              <TableCell className="text-left">
                {formatDate(invoice.dob)}
              </TableCell>
              <TableCell className="text-left">{invoice.email}</TableCell>
              <TableCell className="text-right">{invoice.password.slice(0,10)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Userlists;
