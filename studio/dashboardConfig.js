export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61a0954fe2b26219f775bfb7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-wth7egw4',
                  apiId: '61bce5ac-6a3c-4869-8531-319f6554d753'
                },
                {
                  buildHookId: '61a0954faea10c0ae37e7fe0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-uwdqt7ia',
                  apiId: '6557f1b5-d7c0-46b8-a834-bf2cddcd76cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitella/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-uwdqt7ia.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
