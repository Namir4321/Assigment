import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddProduct from "@/components/Product/AddProduct"
import Userlists from '../Userlist/Userlists';
const ProductCard = () => {
  return (
    <div className="min-w-[350px] md:mt-6  w-full h-full  bg-transparent flex  justify-start  p-0 ">
      <Card className="relative  w-full bg-transparent border-none text-white ">
        <CardHeader className="">
          <CardTitle className="text-[24px] md:text-[30px] flex font-bold">
            Add Products
          </CardTitle>
          <CardDescription className="text-left mt-2 text-[12px] md:text-[15px] ">
            This is basic login page which is used for levitation
            <br />
            assignment purpose.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0  w-5/6 m-0 pl-6 mb-8">
          <AddProduct />
        </CardContent>
        <CardContent className="p-0  w-5/6 m-0 pl-6 ">
          <Userlists/>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;