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
                  buildHookId: '5ec66e27a9c3780320122c9b',
                  title: 'Sanity Studio',
                  name: 'rogerhung-studio',
                  apiId: '8223331d-ddc1-4b48-8e2b-1b9c8105692a'
                },
                {
                  buildHookId: '5ec66e27aef97ab7a52f3387',
                  title: 'Blog Website',
                  name: 'rogerhung',
                  apiId: '96a527a0-e92b-4e23-bf38-079595bb2271'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rogerhung1006/rogerhung',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://rogerhung.netlify.app', category: 'apps' }
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
