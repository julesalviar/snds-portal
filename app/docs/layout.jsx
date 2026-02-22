import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import Link from 'next/link'
import 'nextra-theme-docs/style.css'
import './docs-theme.css'

// Docs section is fully static (SSG) at build time
export const dynamic = 'force-static'
export const revalidate = false

const logoImageUrl = 'https://media.mysnds.com/portal/logosnds-2.png'

const navbar = (
  <Navbar
    logo={
      <Link href="/" prefetch={false} className="nextra-docs-logo">
        <img
          src={logoImageUrl}
          alt="SNDS Logo"
          className="nextra-docs-logo__img"
        />
        <span className="nextra-docs-logo__text nextra-docs-logo__text--full">SNDS DOCS</span>
        <span className="nextra-docs-logo__text nextra-docs-logo__text--short">SNDS</span>
      </Link>
    }
    logoLink={false}
    projectLink={null}
    docsRepositoryBase={null}
  />
)

const footer = (
  <Footer>
    © {new Date().getFullYear()} SNDS. <Link href="/" prefetch={false}>Back to Portal</Link>
  </Footer>
)

export default async function DocsLayout({ children }) {
  const pageMap = await getPageMap('/docs')
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={pageMap}
      editLink={null}
      feedback={{ content: null }}
    >
      {children}
    </Layout>
  )
}
