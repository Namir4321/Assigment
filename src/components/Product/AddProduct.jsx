import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { AllProductFetch } from "@/redux/apicall";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productQuantity: "",
    productPrice: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "productPrice" || name === "productQuantity"
          ? Number(value) 
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const parsedData = {
       productName: formData.productName,
       productQuantity: Number(formData.productQuantity),
       productPrice: Number(formData.productPrice),
     };
    const res = await dispatch(AllProductFetch(parsedData));
    if (res.error) {
      console.log(res);
      setError(res.payload || "Product add failed. Please try again.");
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col mb-2 w-full">
          <Label
            htmlFor="productName"
            className="flex justify-start mb-1 text-lg"
          >
            Product Name
          </Label>
          <Input
            id="productName"
            name="productName"
            type="text"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleInputChange}
            className="h-10 border-[#424647] w-full"
          />
        </div>
        <div className="flex flex-col mb-2 w-full">
          <Label
            htmlFor="productQuantity"
            className="flex justify-start mb-1 text-lg"
          >
            Product Quantity
          </Label>
          <Input
            id="productQuantity"
            name="productQuantity"
            type="number"
            placeholder="Enter product quantity"
            value={formData.productQuantity}
            onChange={handleInputChange}
            className="h-10 border-[#424647] w-full"
          />
        </div>
        <div className="flex flex-col mb-2 w-full">
          <Label
            htmlFor="productPrice"
            className="flex justify-start mb-1 text-lg"
          >
            Product Price
          </Label>
          <Input
            id="productPrice"
            name="productPrice"
            type="number"
            placeholder="Enter product price"
            value={formData.productPrice}
            onChange={handleInputChange}
            className="h-10 border-[#424647] w-full"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="text-[#CCF575] bg-gradient-to-br from-[#141414] to-[#303030] opacity-100"
        variant="default"
        size="lg"
      >
        Add Product
        <CiCirclePlus className="ml-2" />
      </Button>
    </form>
  );
};

export default AddProduct;
