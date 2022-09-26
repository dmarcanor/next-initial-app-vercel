import Link from "next/link";
import {MainLayout} from "../../components/layouts/MainLayout";

export default function PrincingPage() {
  return (
    <>
      <h1>Pricing page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/pricing/index.jsx</code>
      </p>
    </>
  )
}

PrincingPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
