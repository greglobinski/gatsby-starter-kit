const base = {
  name: 'Gatsby Starter Kit',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - a series of GatsbyJS starters`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a series of starters for GatsbyJS',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
