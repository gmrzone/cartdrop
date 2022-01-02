import RatingFilterItem from "./RatingFilterItem";
const RatingFilter = () => {
    const tempData = [4, 3, 2, 1];
    const filterList = tempData.map((x, i) => {
        return <RatingFilterItem rating={x} key={i} />;
    });
    return (
        <div>
            <h5 className="text-gray-700 mb-3">Ratings</h5>
            <div className="space-y-2">{filterList}</div>
        </div>
    );
};

export default RatingFilter;
