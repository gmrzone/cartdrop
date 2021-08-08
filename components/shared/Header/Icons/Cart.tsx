import { NextPage } from "next";
import { MouseEventHandler } from 'react'

interface CartProps {
    classes: string;
    toggleCartSidebar?: MouseEventHandler<HTMLDivElement>;
}



const Cart: NextPage<CartProps> = ({ classes, toggleCartSidebar }) => {
    return (
        <div className="" onClick={toggleCartSidebar}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes}
                viewBox="0 0 24 24"
                fill="none"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                    className="text-main fill-current"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.25 6.75C17.25 7.19325 17.25 7.51025 17.25 7.701C17.6981 7.9605 18 8.44519 18 9C18 9.82781 17.3278 10.5 16.5 10.5C15.6721 10.5 15 9.82781 15 9C15 8.44519 15.3018 7.9605 15.75 7.701V7.5V6.75H8.24996V7.5V7.701C8.69808 7.9605 8.99996 8.44519 8.99996 9C8.99996 9.82781 8.32777 10.5 7.49996 10.5C6.67214 10.5 5.99996 9.82781 5.99996 9C5.99996 8.44519 6.30183 7.9605 6.74996 7.701C6.74996 7.2725 6.74996 6.9555 6.74996 6.75H4.52996C4.38746 6.7575 4.24683 6.795 4.11933 6.86062C3.92621 6.95812 3.74996 7.0875 3.59996 7.245C3.42933 7.41937 3.28683 7.62 3.17621 7.8375C3.08621 8.01375 3.02433 8.20312 2.99433 8.39812L2.24808 21.0881C2.24621 21.1162 2.24433 21.1425 2.24058 21.1706C2.23871 21.1837 2.23871 21.1969 2.23871 21.21C2.24058 21.33 2.27245 21.4462 2.33058 21.5531C2.4262 21.7331 2.55371 21.8944 2.70746 22.0294C2.87621 22.1812 3.06746 22.3031 3.27746 22.3912C3.42933 22.4587 3.59433 22.4962 3.76121 22.5H20.2575H20.2875C20.4506 22.4962 20.61 22.4606 20.7581 22.3931C20.9587 22.305 21.1425 22.1831 21.3037 22.0331C21.4537 21.8962 21.5775 21.735 21.6693 21.5531C21.7275 21.4444 21.7593 21.3244 21.7612 21.2025C21.7612 21.1894 21.7612 21.1762 21.7593 21.165C21.7575 21.1387 21.7537 21.1125 21.7537 21.0881L21.0075 8.4075C20.9981 8.36062 20.985 8.31562 20.9662 8.27062C20.9268 8.17687 20.8781 8.08687 20.82 8.0025C20.6512 7.7625 20.4468 7.55062 20.2143 7.3725C19.965 7.1775 19.6912 7.01625 19.3968 6.89812C19.275 6.84937 19.1493 6.81 19.02 6.78187C18.93 6.76125 18.8381 6.75 18.7443 6.75H17.25ZM17.25 5.24962C17.25 4.79837 17.25 4.04844 17.25 2.99981C17.25 1.05487 16.401 0 14.663 0C12.9249 0 11.117 0 9.34833 0C7.57946 0 6.74996 1.18219 6.74996 3.09581C6.74996 3.56119 6.74996 4.27912 6.74996 5.24962H4.50033C3.04158 5.28075 1.68146 6.75975 1.50033 8.24962L0.750331 20.9996C0.575769 22.5199 2.25671 23.9996 3.75033 23.9996H20.2503C21.7848 24.0277 23.4163 22.4951 23.2503 20.9996L22.5003 8.24962C22.3128 6.74962 20.2914 5.24962 18.7503 5.24962H17.25ZM8.24996 5.24962V5.01V3.09562C8.24996 3.09375 8.24996 3.09187 8.24996 3.09187C8.24996 2.92312 8.25933 2.75625 8.27808 2.58937C8.29495 2.45437 8.32121 2.32125 8.35683 2.19C8.39621 2.03437 8.46558 1.88812 8.56308 1.76062C8.62308 1.6875 8.69995 1.63125 8.78621 1.59375C8.85371 1.56562 8.92496 1.54312 8.99808 1.53C9.11246 1.50937 9.22683 1.5 9.34121 1.5C9.34308 1.5 9.34495 1.5 9.3487 1.5H14.6625C14.6662 1.5 14.6681 1.5 14.67 1.5C14.79 1.5 14.9081 1.50937 15.0262 1.52812C15.1031 1.54125 15.1781 1.56187 15.2512 1.59187C15.33 1.62187 15.4012 1.67062 15.4593 1.73437C15.5456 1.845 15.6075 1.97062 15.6431 2.1075C15.6787 2.23312 15.705 2.36062 15.72 2.49C15.7406 2.65875 15.75 2.82562 15.75 2.99437C15.75 2.99625 15.75 2.99812 15.75 3V4.94437V5.24962H8.24996Z"
                    fill="#323232"></path>
            </svg>
        </div>
    );
};

export default Cart;
