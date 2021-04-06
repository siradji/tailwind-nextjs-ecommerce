import { MainContainer } from 'components/containers';
import ProductInfo from 'components/sections/product-info';
import Head from 'next/head';

import Header from '../components/blocks/header'

export default function Home() {
  return (
 <>
      <Head>
        <title>Curology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-28">
          <MainContainer>
              <ProductInfo />
          </MainContainer>
      </main>
      <footer>

      </footer>
  </>
  )
}
