/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  mySidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {
          type: 'doc',
          id: 'Introduction/what-is-komiser',
        },
        {
          type: 'doc',
          id: 'Introduction/installation',
        },
        {
          type: 'doc',
          id: 'Introduction/community',
        }
      ],
    },
    {
    type: 'category',
    label: 'Guides',
    items: [
      {
        type: 'category',
        label: 'How to Komiser',
        items: [
              {
                type: 'doc',
                id: 'Guides/How to Komiser/overview',
              },
              {
                type: 'doc',
                id: 'Guides/How to Komiser/tagging',
              },
              {
                type: 'doc',
                id: 'Guides/How to Komiser/customviews',
              }
            ]
          },
        ]
    },

    {
      type: 'category',
      label: 'Cloud Providers',
      items: [
        {
          type: 'doc',
          id: 'Cloud Providers/aws',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/azure',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/civo',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/digital-ocean',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/oci',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/k8s',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/linode',
        },
        {
          type: 'doc',
          id: 'Cloud Providers/tencent',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {
          type: 'doc',
          id: 'Contributing/contribute',
        }
      ],
    },
    {
      type: 'doc',
      id: 'Telemetry/telemetry',
    },
    {
      type: 'doc',
      id: 'FAQ/faq',
    },
  ]  
};

module.exports = sidebars;
