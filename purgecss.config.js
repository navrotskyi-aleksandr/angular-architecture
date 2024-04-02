module.exports = {
  content: ['dist/**/*.js'],
  css: ['dist/**/styles*.css'],
  fontFace: true,
  keyframes: false,
  variables: false,
  safelist: { deep: [/--purge-ignore$/] },
};
