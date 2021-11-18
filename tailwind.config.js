module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "title": ["Lora", "KaiTi", "serif"],
      'main': ['Fira Code', 'Lora', 'serif'],
      'code': ['Fira Code', 'KaiTi', 'monospace'],
      'serif': ['Times New Roman', 'KaiTi', 'serif'],
      'mono': ['Fira Code', 'KaiTi', 'monospace'],
    },
    extend: {
      spacing: {
        '120': '30rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
