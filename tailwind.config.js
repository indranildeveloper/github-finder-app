module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // config (optional)
  daisyui: {
    themes: ["dark"],
  },
};
