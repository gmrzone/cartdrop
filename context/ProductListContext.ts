import { createContext } from "react";
import { ProductListContextType } from "../shared/types";
const initialContext = {
    brands: null,
    subcategories: null,
    paginatedProduct: null,
};
const ProductListContext = createContext<typeof initialContext | ProductListContextType>(initialContext);

export default ProductListContext;
