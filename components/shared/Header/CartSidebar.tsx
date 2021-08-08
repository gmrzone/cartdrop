import { NextPage } from 'next';
import CartIcon from './Icons/Cart'


const CartSidebar: NextPage = () => {
    return (
        <div className="absolute top-0 right-0 h-screen bg-white w-full max-w-sm z-50 hidden shadow-drop-down translate-x-full">
            <div className="p-3 flex items-center shadow-g-in">
                <div>
                    <CartIcon classes="w-8 h-8"/>
                </div>
                <div className="text-xl text-main font-bold ml-12">
                    My Cart
                </div>
                <div className="ml-auto pr-2">
                    <i className="fal fa-times text-3xl text-main cursor-pointer" />
                </div>
            </div>
            <div className="h-full p-4 mt-20">
                <div className="flex justify-center relative">
                    <CartIcon classes="w-20 h-20"/>
                    <i className="fal fa-times text-3xl absolute top-1/2 text-main cursor-pointer" />
                </div>
                <div className="text-center">
                    <h4 className="text-text font-semibold">Your cart is empty.</h4>
                    <p className="text-lg text-gray-500">Your cart is emply. Please add some items in your cart.</p>
                </div>
            </div>
        </div>
    )   
}

export default CartSidebar