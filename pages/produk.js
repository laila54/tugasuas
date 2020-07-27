import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const produk = () => {
  const images = [];
  const imageCount = 6;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/static/emina-mask.jpeg`);
  }

  return (
    <Layout>
      <h1>Produk</h1>
      <Gallery images={images} />
    </Layout>
  );
};

export default produk;