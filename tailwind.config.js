/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "acme-blue": {
          500: "var(--acme-blue-500)",
        },
        "acme-neutral": {
          500: "var(--acme-neutral-500)",
        },
        "acme-red": {
          500: "var(--acme-red-500)",
        },
        "acme-orange": {
          500: "var(--acme-orange-500)",
        },
        "acme-green": {
          500: "var(--acme-green-500)",
        },
      },
    },
  },
  plugins: [],
}