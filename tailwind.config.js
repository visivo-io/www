import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      colors: {
        'primary': {
          100: "#e2d7dd",
          200: "#c6b0bb",
          300: "#a9899a",
          400: "#8d6278",
          500: "#713B57",
          DEFAULT: "#713B57",
          600: "#5a2f45",
          700: "#432334",
          800: "#2d1722",
          900: "#160b11"
        },
        'secondary': {
          100: "#dbdadb",
          200: "#b8b6b7",
          300: "#959193",
          400: "#726d6f",
          500: "#4F494C",
          DEFAULT: "#4F494C",
          600: "#3f3a3c",
          700: "#2f2b2d",
          800: "#1f1d1e",
          900: "#0f0e0f"
        },
        'highlight': {
          100: "#f6ddda",
          200: "#edbcb5",
          300: "#e49b90",
          400: "#db7a6b",
          500: "#D25946",
          DEFAULT: "#D25946",
          600: "#a84738",
          700: "#7e352a",
          800: "#54231c",
          900: "#29110d"
        },
        'secondaryHighlight': {
          DEFAULT: "#45baf9",
        },
        'dark': "#191D33",
        'light': "#ECEFCB",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
