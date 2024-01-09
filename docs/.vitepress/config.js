module.exports = {
 title: 'My Website',
 description: 'A website built with VitePress',
 base: '/',
 head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' }],
 ],
 themeConfig: {
    repo: 'trir44/testaureus',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: true,
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '',
          'installation',
          'usage',
        ]
      },
      {
        title: 'Advanced Topics',
        collapsable: false,
        children: [
          'configuration',
          'troubleshooting',
        ]
      },
    ]
 },
};
