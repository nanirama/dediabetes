import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code, Blockquote, List } from './src/components/Complete'

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
