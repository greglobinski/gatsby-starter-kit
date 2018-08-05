const base = {
  name: 'BaseStarter',
  url: 'https://gatsby-starter-base.greglobinski.com',
  author: 'greg lobinski',
};

const config = {
  // meta tags
  siteTitle: `${base.name} - a no-style GatsbyJS starter`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `This is a long description about ${base.name}`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  // url
  siteUrl: base.url,
  pathPrefix: '',

  // site header
  headerTitle: 'BaseStarter',
  headerSubTitle: 'a GatsbyJS starter',
};

module.exports = config;
