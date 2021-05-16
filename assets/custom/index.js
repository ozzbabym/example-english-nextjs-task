import run from '@jamesives/github-pages-deploy-action'

run({
  token: process.env['ACCESS_TOKEN'],
  branch: 'gh-pages',
  folder: 'build',
  repositoryName: 'JamesIves/github-pages-deploy-action',
  silent: true,
  workspace: 'src/project/location'
})