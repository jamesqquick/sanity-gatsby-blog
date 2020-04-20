export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9d9d91136d39026315f9f2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-888zuuc6',
                  apiId: 'b38777c4-b87c-4eae-869c-652ed75357a6'
                },
                {
                  buildHookId: '5e9d9d9168069601ab280dce',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-251kvs5t',
                  apiId: '7b3ca76f-3339-47c4-9d69-582769f1d6a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesqquick/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-251kvs5t.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
