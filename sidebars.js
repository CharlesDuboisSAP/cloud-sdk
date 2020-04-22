module.exports = {
  someSidebar: {
    Dzen: ['dzen/how-to-write-documentation', 'dzen/getting-started'],
    Overview: [
      'overview/about',
      'overview/getting-started',
      'overview/benefits',
      'overview/key-features',
      'overview/what-is-new'
    ],
    Java: [
      'java/introduction',
      'java/getting-started',
      'java/api-documentation',
      //   {
      //     type: 'category',
      //     label: 'Features',
      //     items: [
      //       'cli',
      //       'project-archetype',
      //       'vdm',
      //       'odata',
      //       'generate-client',
      //       'cloud-abstractions',
      //       'pipeline',
      //       'caching',
      //       'resilience'
      //     ]
      //   },
      //   {
      //     type: 'category',
      //     label: 'Advanced features',
      //     items: [
      //       'untyped-client',
      //       'odata-helper-classes',
      //       'utility-classes',
      //       'open-api-client',
      //       'sdk-as-a-service',
      //       ''
      //     ]
      //   },
      //   'client-libraries',
      {
        type: 'category',
        label: 'How To',
        items: [
          // 'java/how-to/generate-odata-client-with-cloud-sdk-for-java-how-to',
          'java/how-to/sap-cloud-sdk-linux-how-to',
          'java/how-to/cf-cli',
          'java/how-to/cf-deploy'
          //       'java/how-to/test-odata-service',
          //       'java/how-to/build-client-for-cap',
          //       'java/how-to/cap-with-client-sdk',
          //       'java/how-to/generate-open-api-client',
          //       'java/how-to/workflow-api',
          //       'java/how-to/s4hana-api',
          //       'java/how-to/business-logging',
          //       'java/how-to/sap-graph',
          //       'java/how-to/xsuaa-broker',
          //       'java/how-to/sdk-with-mocked-xsuaa',
          //       'java/how-to/jwt-handling',
          //       'java/how-to/app-router',
          //       'java/how-to/configure-ide'
        ]
      }
      //   'hot-to-contribute',
      //   'support',
      //   'feature-request',
      //   'Feedback',
      //   'thank-you',
      //   'release-notes'
      // ],
      // 'JS and Node.js': [
      //   {
      //     type: 'category',
      //     label: 'Getting started',
      //     items: [
      //       'java/getting-started/tools-java-sdk',
      //       'java/getting-started/getting-java-sdk',
      //       'java/getting-started/verify-your-setup',
      //       'java/getting-started/generating-vdm',
      //       'java/getting-started/hello-odata'
      //     ]
      //   },
      //   {
      //     type: 'link',
      //     label: 'Tutorials',
      //     href:
      //       'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java'
      //   }
    ],
    JavaScript: [
      'js/introduction',
      'js/getting-started',
      'js/api-documentation'
    ],
    'Devops and CI/CD': ['devops/getting-started'],
    // FAQ: ['faq/frequently-asked-questions'],
    // Support: ['support/support'],
    'Related projects': [
      'related-projects/cloud-application-model'
      //   'related-projects/sap-cloud-for-realestate',
      //   'related-projects/sap-s4-hana',
      //   'related-projects/sap-xsuaa-cf'
    ]
  }
}