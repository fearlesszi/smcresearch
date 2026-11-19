import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'fearlesszi/smcresearch',
  },
  collections: {
    posts: collection({
      label: '刊物文章 (Articles)',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '文章标题' } }),
        issue: fields.text({ label: '期号 / 栏目 (如 ISSUE 01 · ESSAY)' }),
        publishedDate: fields.date({ label: '发布日期' }),
        summary: fields.text({ label: '导语摘要', multiline: true }),
        content: fields.markdoc({
          label: '正文与图文排版',
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/smcresearch/images/posts/',
            },
          },
        }),
      },
    }),
  },
});
