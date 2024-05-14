import { plugins } from '../config/plugins.js';
import { filePaths } from '../config/paths.js';


// LOCAL
const server = () => {
  plugins.browserSync.init({
    server: {
      baseDir: filePaths.buildFolder,
    },
    logLevel: 'info',
    cors: true,
    notify: false,
    port: 3000,
  });
};


//  Open Server (WP)
/*
const server = () => {
  plugins.browserSync.init({
    proxy: 'http://plan-d/',
    host: 'plan-d',
    open: 'external',

    logLevel: 'info',
    cors: true,
    notify: false,
    port: 3000,
  });
};

 */

export { server };
