const base = {
  name: 'Gatsby Starter Kit',
  url: 'https://greglobinski.github.io/gatsby-starter-kit/',
  author: 'greg lobinski'
};

const config = {
  // meta tags
  siteTitle: `${base.name} - a series of starters for GatsbyJS`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `This is a series of GatsbyJS starters: Minimal, Equipped, Themed, Website, Blog`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  // url
  siteUrl: base.url,
  // pathPrefix: '',

  // site header
  headerTitle: `${base.name}`,
  headerSubTitle: 'a series of starters for GatsbyJS'
};

module.exports = config;
