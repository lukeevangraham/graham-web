module.exports = {
    /* config options here */
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
      images: {
        domains: ['admin.lukegraham.us', 'res.cloudinary.com'],
      }
  }