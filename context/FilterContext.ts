import { createContext } from "react";
import { FilterContextType } from "../shared/types";
const initialContext = {
    brands: null,
    subcategories: null,
};
const FilterContext = createContext<typeof initialContext | FilterContextType>(initialContext);

export default FilterContext;
