#!/usr/bin/env node

import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')

const { URL_SCHEMES, CATEGORIES } = await import('../src/constants/categories/index.ts')

interface UrlScheme {
  id: string
  name: string
  description: string
  contributors: string[]
  updatedAt: string
  category: string
  urlSchemeTemplate: string
  slots?: Array<{
    name: string
    description: string
    placeholder: string
  }>
  examples?: string[]
  deprecated?: boolean
}

interface Category {
  id: string
  name: string
  description?: string
}

updateReadme()

async function updateReadme() {
  try {
    const templatePath = path.resolve(rootDir, 'templates/README.md')
    const templateContent = await fs.readFile(templatePath, 'utf-8')

    const generatedContent = generateMarkdownContent()

    const updatedContent = templateContent.replace('{{auto-generated}}', generatedContent)

    const readmePath = path.resolve(rootDir, 'README.md')
    await fs.writeFile(readmePath, updatedContent, 'utf-8')

    console.log('✅ README.md updated.')
  } catch (error) {
    console.error('Failed to update README.md:', error)
    process.exit(1)
  }
}

function generateMarkdownContent() {
  let content = ''

  CATEGORIES.forEach((category: Category) => {
    const schemes = URL_SCHEMES.filter((scheme: UrlScheme) => scheme.category === category.id)

    if (schemes.length === 0) return

    content += `### ${category.name}\n\n`

    schemes.forEach((scheme: UrlScheme) => {
      const schemeName = scheme.deprecated ? `~~${scheme.name}~~` : scheme.name
      let item = `${schemeName}：\`${scheme.urlSchemeTemplate}\``
      if (scheme.deprecated) {
        item += `（已失效）`
      }
      content += `- ${item}\n`
    })

    content += '\n'
  })

  return content.trim()
}
