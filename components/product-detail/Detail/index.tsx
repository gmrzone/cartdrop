import { NextPage } from "next";
import { ProductVariationType } from "../../../shared/types";

type DetailProps = {
    productDetail: ProductVariationType;
};
const Detail: NextPage<DetailProps> = ({ productDetail }) => {
    return (
        <div>
            <div>
                <h1 className="text-4xl">{productDetail.full_name}</h1>
            </div>
        </div>
    );
};

export default Detail;
