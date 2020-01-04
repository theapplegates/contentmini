module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#78ff78","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Living Life","short_name":"Living Life","description":"and writing some of my thoughts down","start_url":"https://livinglife.netlify.com","background_color":"#FEFEFE","theme_color":"#212129","display":"standalone","icon":"theme-content/images/icon-512x512.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/@afuh/gatsby-theme-minimal/gatsby-browser.js'),
      options: {"plugins":[],"contentful":{"spaceId":"cur3z2ejxo7y","accessToken":"fvUpAv_-GN9dq74rwjwbvFZGHf5l-P42xS_d2wRvRjw"},"title":"Living Life","description":"and writing some of my thoughts down","siteUrl":"https://livinglife.netlify.com"},
    }]
