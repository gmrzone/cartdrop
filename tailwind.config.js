module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: "rgb(45,61,138)",
                secondary: "rgb(28, 117, 244)",
                background: "rgb(255, 255, 255)",
                text: "rgb(57, 58, 67)",
            },
            fontFamily: {
                poppins: [
                    "Poppins",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
                roboto: [
                    "Roboto",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
            },
            borderRadius: {
                normal: "0.245rem",
            },
            scale: {
                80: ".80",
            },
            animation: {
                "spin-button": "spin 0.6s linear infinite",
            },
            boxShadow: {
                "drop-down": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            },
            backgroundImage: theme => ({
                'hero-image': "linear-gradient(3deg, rgba(45,61,138,0.5) 0%, rgba(45,61,138,0.5) 100%), url('https://res.cloudinary.com/corecare/image/upload/c_scale,w_1920/v1628278383/cartdrop/cropped_hero_unoptimized_mvo43h.jpg')",

            }),
            height: {
                'hero': '700px  '
            },
            screens: {
                "ipad": "992px",
            },
            skew: {
                'hero-outer': "35deg",
                'hero-inner': "-35deg"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
