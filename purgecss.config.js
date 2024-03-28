module.exports = {
  content: ['dist/**/*.js'],
  css: ['dist/**/*.css'],
  fontFace: true,
  keyframes: false,
  variables: false,
  safelist: { deep: [/--purge-ignore$/] },
};
