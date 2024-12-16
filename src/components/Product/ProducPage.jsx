import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductCard from './ProductCard';

const ProducPage = () => {
  return (
    <div className=" w-full h-full">
      <div className="">
        <Navbar />
      </div>
      <div className="w-full ">
        <ProductCard />
      </div>
    </div>
  );
}

export default ProducPage