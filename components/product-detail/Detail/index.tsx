import { NextPage } from "next";
import { ProductVariationType } from "../../../shared/types";

type DetailProps = {
    productDetail: ProductVariationType;
};
const Detail: NextPage<DetailProps> = ({ productDetail }) => {
    return (
        <div className="mb-5">
            <div>
                <h1 className="text-2xl mobile-xl:text-3xl text-center ipad:text-left ipad:text-[1.6rem] desktop-big:text-3xl desktop-large:text-4xl text-slate-700">
                    {productDetail.full_name}
                </h1>
            </div>
        </div>
    );
};

export default Detail;
