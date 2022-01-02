import { createContext } from "react";
import { FilterContextType } from "../shared/types";
const initialContext = {
    brands: null,
    subcategories: null,
    paginatedProduct: null,
};
const ProductListContext = createContext<typeof initialContext | FilterContextType>(initialContext);

export default ProductListContext;
