import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  '/static/testi/tes1.jpg',
  '/static/testi/tes2.jpg',
  '/static/testi/tes3.jpg',
  '/static/testi/tes4.jpg'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Hallo, Ladies...</h1>
        <div>Yuk rawat diri kalian dengan Skincare</div>
        <Link href="/produk">
          <a className="view-more">Mau Tau tentang Skincare</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Testimoni Customers</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/testimoni">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/static/emina-mask.jpeg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;