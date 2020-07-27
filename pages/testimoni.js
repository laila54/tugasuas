import Layout from '../components/Layout';
import Gallery from '../components/gallery';

const images = [
    '../static/testi/tes1.jpg',
    '../static/testi/tes2.jpg',
    '../static/testi/tes3.jpg',
    '../static/testi/tes4.jpg',
    '../static/testi/tes5.jpg',
    '../static/testi/test6.jpg',
    '../static/testi/test7.jpg',
    '../static/testi/test8.jpg',
    '../static/testi/test9.jpg',
    '../static/testi/test10.jpg'
  ];

const testi = () => (
  <Layout title="testimoni">
        <div>
        <h2>Testimoni Customers</h2>
        <Gallery images={images} /> 
        </div>
  </Layout>
);

export default testi;