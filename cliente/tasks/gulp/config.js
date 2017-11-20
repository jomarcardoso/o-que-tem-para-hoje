module.exports = {
  //Put here CDN path
  getCdn: function() {
    switch (process.env.NODE_ENV) {
      case 'production':
        //e.g. 'https://secure-static.schutz.com.br/content/sch/festivalshop/';
        return 'https://secure-static.xxx.com.br/content/yyy/';
      case 'homologation':
        //e.g. 'https://test-secure-static.schutz.com.br/content/sch/festivalshop/';
        return 'https://test-secure-static.xxx.com.br/content/yyy/';
      default:
        return '';
    }
    throw Error('No environment to CDN config!');
  },
  getFontsCdn: function() {
    switch (process.env.NODE_ENV) {
      case 'production':
        //e.g. 'https://www.schutz.com.br/content/sch/festivalshop/';
        return 'https://www.xxx.com.br/content/yyy/';
      case 'homologation':
        //e.g. 'https://test.schutz.com.br/content/sch/festivalshop/';
        return 'https://test.xxx.com.br/content/yyy/';
      default:
        return '';
    }
    throw Error('No environment to CDN config!');
  },
  //Put here API path
  getApi: function() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://www.arezzo.com.br/arezzoapi/';
      case 'homologation':
        return 'https://test.arezzo.com.br/arezzoapi/';
      default:
        return 'http://localhost:8888/arezzoapi/';
    }
    throw Error('No environment to API config!');
  },
  getDist: function() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'dist/prd/';
      case 'homologation':
        return 'dist/hml/';
      default:
        return '';
    }
    throw Error('No environment to dist config!');
  },
  source: {
    html: 'dev/**/*.html',
    scss: 'dev/scss/**/*.scss',
    css: 'dev/css/*.css',
    js: 'dev/js/**/*.js',
    img: 'dev/img/**/*',
    fonts: 'dev/fonts/**/*'
  },
  path: {
    css: 'dev/css/'
  }  
};
