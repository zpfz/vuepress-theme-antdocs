module.exports = [
  // Nav 1
  {
    text: 'Home',
    link: '/',
  },
  // Nav 2
  {
    text: 'Category',
    items: [
      {
        text: 'Category 1',
        items: [
          { text: 'Category 1-1', link: '/category/categoryOne/'},
          { text: 'Category 1-2', link: '/category/categoryOne/example_docs_1'}
        ]
      },
      {
        text: 'Category 2',
        items: [
          { text: 'Category 2-1', link: '/category/categoryTwo/'},
          { text: 'Category 2-2', link: '/category/categoryTwo/example_docs_1'}
        ]
      },
    ]
  },
  {
    text: 'Docs',
    link: 'https://antdocs.seeyoz.cn/'
  }
]
