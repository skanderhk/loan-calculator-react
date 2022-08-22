module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    paper: "#E5E5E5",
                    default: "#1B31A8",
                },
                secondary: {
                    default: "#0079FF",
                },
            },
            fontFamily: {
                sans: ["Work sans", "sans-serif"],
                serif: ["Work sans", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
            },
            boxShadow: {
                default: "0px 16px 32px rgba(30, 42, 50, 0.08)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
