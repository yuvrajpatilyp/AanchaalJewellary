import React from "react";
 
const SortDropdown = ({ productsData, onSort }) => {
  const parsePrice = (price) => Number(price.replace(/,/g, ""));
 
  const handleSort = (value) => {
    let sortedProducts = [...productsData];
 
    if (value === "low-high") {
      sortedProducts.sort(
        (a, b) => parsePrice(a.newprice) - parsePrice(b.newprice)
      );
    }
 
    if (value === "high-low") {
      sortedProducts.sort(
        (a, b) => parsePrice(b.newprice) - parsePrice(a.newprice)
      );
    }
 
    if (value === "new") {
      sortedProducts = [...productsData];
    }
 
    if (value === "bestseller") {
      sortedProducts = productsData.filter(
        (item) =>
          typeof item.Bestseller === "string" &&
          item.Bestseller.toLowerCase() === "bestseller"
      );
    }
 
    onSort(sortedProducts); // send to parant
  };
 
  return (
    <select
      defaultValue=""
      onChange={(e) => handleSort(e.target.value)}
      className="border px-4 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer"
    >
      <option value="" disabled>
        Sort By: Best Matches
      </option>
      <option value="low-high">Low to High</option>
      <option value="high-low">High to Low</option>
      <option value="new">New Arrivals</option>
      <option value="bestseller">Bestseller</option>
    </select>
  );
};
 
export default SortDropdown;