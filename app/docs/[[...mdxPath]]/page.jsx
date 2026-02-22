import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'

// Force SSG: all .md/.mdx docs pages are pre-rendered at build time (static export)
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false
export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath ?? [])
  return metadata ?? {}
}

const { wrapper: Wrapper } = getMDXComponents({})

export default async function Page(props) {
  const params = await props.params
  const mdxPath = params.mdxPath ?? []
  const {
    default: MDXContent,
    toc = [],
    metadata = {},
    sourceCode,
  } = await importPage(mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
