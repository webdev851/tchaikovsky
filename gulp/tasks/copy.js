import gulp from 'gulp';

import { filePaths } from '../config/paths.js';
import { logger } from "../config/Logger.js";

// Копирование статических файлов
const copyStatic = () => {
  return gulp.src(filePaths.src.static)
    .pipe(logger.handleError('COPY'))
    .pipe(gulp.dest(filePaths.build.static));
};

// Копирование файлов из папки css
const copyCss = () => {
  return gulp.src(filePaths.src.staticCSS)
    .pipe(logger.handleError('COPY CSS'))
    .pipe(gulp.dest(filePaths.build.css));
};

const copyJs = () => {
  return gulp.src(filePaths.src.staticJS)
    .pipe(logger.handleError('COPY JS'))
    .pipe(gulp.dest(filePaths.build.js));
};


// Общая задача копирования
const copy = gulp.parallel(copyStatic, copyCss, copyJs);

export { copy, copyStatic, copyCss, copyJs };