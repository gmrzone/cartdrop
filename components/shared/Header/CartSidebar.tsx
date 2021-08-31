import { NextPage } from "next";
import CartIcon from "./Icons/Cart";
import { MouseEventHandler, useEffect, useRef } from "react";
import MainButton from "../../common/buttons/MainButton";
type CartSidebarProps = {
    toggleCartSidebar: MouseEventHandler<HTMLDivElement>;
    cartSidebarActive: boolean;
};
const CartSidebar: NextPage<CartSidebarProps> = ({ toggleCartSidebar, cartSidebarActive }) => {
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const showSlider = () => {
        if (sidebarRef.current) {
            sidebarRef.current.classList.remove("translate-x-full");
            sidebarRef.current.classList.add("translate-x-0");
        }
    };
    const hideSlider = () => {
        if (sidebarRef.current) {
            sidebarRef.current.classList.add("hidden");
        }
    };
    useEffect(() => {
        if (sidebarRef.current) {
            if (cartSidebarActive) {
                sidebarRef.current.classList.remove("hidden");
                setTimeout(showSlider, 25);
            } else {
                sidebarRef.current.classList.remove("translate-x-0");
                sidebarRef.current.classList.add("translate-x-full");
                setTimeout(hideSlider, 300);
            }
        }
    }, [cartSidebarActive]);

    const CloseSlider: MouseEventHandler<HTMLDivElement> = (e) => {
        toggleCartSidebar(e);
    };

    return (
        <div
            className="fixed top-0 right-0 h-screen bg-white w-full max-w-sm z-50 hidden shadow-drop-down translate-x-full transition-transform duration-300"
            ref={sidebarRef}>
            <div className="p-3 flex items-center justify-between shadow-g-in">
                <div className="pl-2 ">
                    <CartIcon classes="w-8 h-8" />
                </div>
                <div className="text-xl text-main font-bold">MY CART</div>
                <div className="pr-2">
                    <i className="fal fa-times text-3xl text-main cursor-pointer" onClick={CloseSlider} />
                </div>
            </div>
            <div className="p-4 mt-10 ipad:mt-14">
                <div className="flex justify-center relative">
                    <CartIcon classes="w-20 h-20" />
                    <i className="fal fa-times text-5xl absolute top-1/3 text-main cursor-pointer" />
                </div>
                <div className="text-center mt-5">
                    <h4 className="text-text font-semibold">Your cart is empty.</h4>
                    <p className="text-lg text-gray-500">Your cart is emply. Please add some items in your cart.</p>
                </div>
                <div className="text-center mt-5">
                    <MainButton text="Continue Shopping" icon="far fa-shopping-cart" />
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
