import { NextPage } from "next";
import { useContext } from "react";
import ProductListContext from "../../../../context/ProductListContext";
import ProductItem from "./ProductItem";

const Products: NextPage = () => {
    const { paginatedProduct } = useContext(ProductListContext);
    const productList = paginatedProduct?.products.map((i) => {
        return <ProductItem key={i.uuid} productDetail={i} />;
    });
    return <div className="mb-8 mt-3 bg-white">{productList}</div>;
};

export default Products;
