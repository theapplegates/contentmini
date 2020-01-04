// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        contentful: {
          spaceId: "cur3z2ejxo7y",
          accessToken: "fvUpAv_-GN9dq74rwjwbvFZGHf5l-P42xS_d2wRvRjw"
        },
        title: "Living Life",
        description: "and writing some of my thoughts down",
        siteUrl: 'https://livinglife.netlify.com', // no trailing slash
      }
    }
  ]
}
