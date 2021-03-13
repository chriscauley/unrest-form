const colors = ['bg', 'bg-alt', 'text', 'text-alt', 'border']

const var_colors = {}
colors.forEach(c => (var_colors[c] = `var(--${c})`))

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: var_colors,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
