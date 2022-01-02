import { createContext } from "react";
import { BrandsTypes } from "../shared/types";
const BrandContext = createContext<null | BrandsTypes[]>(null);

export default BrandContext;
