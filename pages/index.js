import Head from 'next/head';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <div className="container">
      <Head>
        <title>Chang Mao Hao</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Home />
      </main>
      <footer></footer>
    </div>
  );
}
