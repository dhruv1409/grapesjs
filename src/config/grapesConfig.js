import styleManager from './styleManager';
import blockManager from './blockManager';

const grapesConfig = {
  height: '100vh',
  width: 'auto',
  container: '#gjs',
  fromElement: true,
  allowScripts: 1,
  showOffsets: 1,
  protectedCss:
    '.iframe-wrapper{padding-bottom:30px;}section:last-child{margin-bottom:30px}',
  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/font-awesome-line-awesome/css/all.min.css',
    ],
    scripts: [
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.min.js',
    ],
  },
  styleManager,
  blockManager,
};

export default grapesConfig;
