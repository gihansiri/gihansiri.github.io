export default {
  title: `My first blog`,
  tags: ['react', 'navi'],
  spoiler: "abc",
  getContent: () => import('./document.mdx'),
}