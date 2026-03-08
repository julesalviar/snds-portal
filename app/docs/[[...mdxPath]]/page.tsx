import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '../../../mdx-components';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;
export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath ?? []);
  return metadata ?? {};
}

const { wrapper: Wrapper } = getMDXComponents({});

export default async function Page(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params;
  const mdxPath = params.mdxPath ?? [];
  const {
    default: MDXContent,
    toc = [],
    metadata = {},
    sourceCode,
  } = await importPage(mdxPath);
  const pageMetadata = {
    title: 'Docs',
    filePath: mdxPath.join('/') || 'index',
    ...metadata,
  } as { title: string; filePath: string };
  return (
    <Wrapper toc={toc} metadata={pageMetadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
