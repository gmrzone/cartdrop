import { NextPage } from "next";
import { useContext } from "react";
import ProductListContext from "../../../../context/ProductListContext";
import ProductItem from "./ProductItem";

const Products: NextPage = () => {
    const { paginatedProduct } = useContext(ProductListContext);
    const productList = paginatedProduct?.products.map((i) => {
        return <ProductItem key={i.uuid} productDetail={i} />;
    });
    return <div className="mb-8 bg-white p-4 ipad:grid ipad:grid-cols-3">{productList}</div>;
};

export default Products;
