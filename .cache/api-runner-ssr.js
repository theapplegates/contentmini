var plugins = [{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Open Sans","variants":["400","700","800"]}]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Living Life","short_name":"Living Life","description":"and writing some of my thoughts down","start_url":"https://livinglife.netlify.com","background_color":"#FEFEFE","theme_color":"#212129","display":"standalone","icon":"theme-content/images/icon-512x512.png"},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"{\n              allContentfulPost(sort: { fields: createdAt, order: DESC  }) {\n                edges {\n                  node {\n                    createdAt\n            \t\t\t\tslug\n                    title\n                    image {\n                      file {\n                        url\n                        contentType\n                        details {\n                          size\n                        }\n                      }\n                    }\n                    content {\n                      md: childMarkdownRemark {\n                        excerpt(pruneLength: 250)\n                      }\n                    }\n                  }\n                }\n              }\n            }","title":"Living Life","description":"and writing some of my thoughts down","output":"/rss.xml"}]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/thor2/Documents/countmini/node_modules/@afuh/gatsby-theme-minimal/gatsby-ssr'),
      options: {"plugins":[],"contentful":{"spaceId":"cur3z2ejxo7y","accessToken":"fvUpAv_-GN9dq74rwjwbvFZGHf5l-P42xS_d2wRvRjw"},"title":"Living Life","description":"and writing some of my thoughts down","siteUrl":"https://livinglife.netlify.com"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
