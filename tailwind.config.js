module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    // darkMode: false, // or 'media' or 'class'
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
            fontSize: {
                xll: ["1.5rem", { lineHeight: "1.75rem" }],
                "4.8xl": ["2.75rem", "1.75rem"],
                "4.6xl": ["2.50rem", "2rem"],
                "4.3xl": ["2.20rem", "2.4rem"],
                "very-small": ["0.55rem", "0.60rem"],
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
                right: "rgba(0,0,0,0.66) 2px 1px 2px 2px",
                "g-in": "inset 0 -1px 0 0 rgb(1 1 1 / 12%)",
            },
            backgroundImage: (theme) => ({
                "hero-image":
                    "linear-gradient(3deg, rgba(45,61,138,0.45) 0%, rgba(45,61,138,0.45) 100%), url('https://res.cloudinary.com/corecare/image/upload/c_scale,w_1920/v1628278383/cartdrop/cropped_hero_unoptimized_mvo43h.jpg')",
            }),
            height: {
                "hero-mobile-sm": "450px",
                "hero-mobile-bg": "500px",
                "hero-ipad": "580px",
                "hero-desktop": "600px",
                "hero-desktop-lg": "700px",
            },
            screens: {
                "mobile-bg": "361px",
                "mobile-lg": "550px",
                "mobile-xl": "690px",
                ipad: "992px",
                desktop: "1199px",
                "desktop-big": "1399px",
                "desktop-large": "1599px",
            },
            skew: {
                "hero-outer": "35deg",
                "hero-inner": "-35deg",
                "hero-outer-sm": "25deg",
                "hero-inner-sm": "-25deg",
            },
        },
    },
    // variants: {
    //     extend: {},
    // },
    plugins: [],
};
