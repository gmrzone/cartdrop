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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
