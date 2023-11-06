/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    i18n: {
      locales: ['en', 'ru'],
      defaultLocale: 'en',
    },
  },
};
