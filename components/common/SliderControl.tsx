import { NextPage } from 'next'


interface SliderControlProps {
    goLeft: () => void;
    goRight: () => void;

}
const SliderControl: NextPage<SliderControlProps> = ({ goLeft, goRight }) => {
    return (
        <div className="flex space-x-2">
            <div className="bg-main px-3 py-1 text-white rounded-md text-lg cursor-pointer hover:bg-secondary transition-colors duration-100">
            <i className="fas fa-chevron-left" />
            </div>
            <div className="bg-main px-3 py-1 text-white rounded-md text-lg cursor-pointer hover:bg-secondary transition-colors duration-100">
            <i className="fas fa-chevron-right" />
            </div>
        </div>
    )
}

export default SliderControl