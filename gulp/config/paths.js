import path from 'path';

const rootFolder = './';
const buildFolder = './build';
const srcFolder = './src';

const filePaths = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    static: `${buildFolder}/static/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: [`${srcFolder}/scss/main.scss`, `${srcFolder}/scss/pages/*.scss`],
    html: `${srcFolder}/*.html`,
    php: `${srcFolder}/php/**/*.php`,
    static: `${srcFolder}/static/**/*.*`,
    staticCSS: `${srcFolder}/css/**/*.*`,
    staticJS: `${srcFolder}/js/static/**/*.*`,
    svgIcons: `${srcFolder}/icons/*.svg`,
    fontFacesFile: `${srcFolder}/scss/config/fonts.scss`,
    fonts: `${srcFolder}/fonts/`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    php: `${srcFolder}/**/*.php`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    static: `${srcFolder}/static/**/*.*`,
  },
  rootFolder,
  buildFolder,
  srcFolder,
  projectDirName: path.basename(path.resolve()),
  ftp: ``, // Путь к нужной папке на удаленном сервере. Gulp добавит имя папки проекта автоматически
};

export { filePaths };