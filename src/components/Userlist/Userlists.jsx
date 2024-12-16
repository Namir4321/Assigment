import React, { useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { ALlProductList } from "@/redux/apicall";
import { Button } from "../ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { GeneratePdf } from "@/redux/apicall"; // Import the function for generating PDFs

const Userlists = () => {
  const dispatch = useDispatch();
  const allusers = useSelector((state) => state.list.product);

  useEffect(() => {
    dispatch(ALlProductList());
  }, [dispatch]);

  const subtotal = useMemo(() => {
    return allusers.reduce(
      (acc, product) => acc + product.productPrice * product.productQuantity,
      0
    );
  }, [allusers]);

  const gst = useMemo(() => subtotal * 0.18, [subtotal]); // 18% GST
  const totalWithGST = useMemo(() => subtotal + gst, [subtotal, gst]);

  // Function to handle PDF generation
  const handleGeneratePdf = async() => {
    const data = {
      products: allusers.map((product) => ({
        productName: product.productName,
        productPrice: product.productPrice,
        productQuantity: product.productQuantity,
        totalPrice: product.productPrice * product.productQuantity,
      })),
      subtotal: subtotal,
      gst: gst,
      totalWithGST: totalWithGST,
    };

    console.log(data)
    const res=await GeneratePdf({data});
    console.log(res)
  };

  return (
    <div className="w-full mx-auto">
      <Table className="border-separate border-spacing-0 w-full">
        <TableHeader>
          <TableRow className="bg-white hover:bg-white">
            <TableHead className="border">Product Name</TableHead>
            <TableHead className="border">Price</TableHead>
            <TableHead className="border">Quantity</TableHead>
            <TableHead className="border">Total Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allusers.map((product) => (
            <TableRow key={product.id} className="border hover:bg-transparent">
              <TableCell className="border-b border-l text-left font-medium">
                {product.productName}
              </TableCell>
              <TableCell className="border-b text-left">
                {product.productPrice}
              </TableCell>
              <TableCell className="border-b text-left">
                {product.productQuantity}
              </TableCell>
              <TableCell className="border-r border-b text-left">
                {product.productPrice * product.productQuantity}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="border hover:bg-transparent">
            <TableCell className="border-b border-l text-left font-medium"></TableCell>
            <TableCell className="border-b text-left"></TableCell>
            <TableCell className="border-b text-right">Sub-total</TableCell>
            <TableCell className="border-r border-b text-left">
              INR {subtotal.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow className="border hover:bg-transparent">
            <TableCell className="border-b border-l text-left font-medium"></TableCell>
            <TableCell className="border-b text-left"></TableCell>
            <TableCell className="border-b text-right">GST (18%)</TableCell>
            <TableCell className="border-r border-b text-left">
              INR {gst.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow className="border hover:bg-transparent">
            <TableCell className="border-b border-l text-left font-medium"></TableCell>
            <TableCell className="border-b text-left"></TableCell>
            <TableCell className="border-b text-right">
              Total (Incl. GST)
            </TableCell>
            <TableCell className="border-r border-b text-left">
              INR {totalWithGST.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div>
        <Button
          onClick={handleGeneratePdf}
          className=" mt-4 mb-4 text-[#CCF575] bg-gradient-to-br from-[#141414] to-[#303030] opacity-100"
          variant="default"
          size="lg"
        >
          Generate Pdf
          <CiCirclePlus className="ml-2" />
        </Button>

        {/* Add PDF generation button */}
        
      </div>
    </div>
  );
};

export default Userlists;
