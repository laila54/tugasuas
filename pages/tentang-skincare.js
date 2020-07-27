import Layout from '../components/Layout';

const about = () => (
  <Layout title="Our Services">
    <h1>Apa itu Skincare ??</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="/static/emina-mask.jpeg" />
          <h2>Skincare ??</h2>
          <div className="kata">
          <p>Perawatan kulit adalah rangkaian dari berbagai penerapan yang mendukung keadaan integritas kulit,
             untuk meningkatkan sebuah penampilan dan merubah kondisi kulit. Mereka dapat mengandung nutrisi
            menghindari dari paparan sinar matahari yang berlebihan dan penggunaan produk kulit emolien yang tepat.</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      
      .services .item {
        margin-bottom: 40px;
        width: 100%;
      }
      img {
        max-width:30%;
        max-height: 30%;
        margin-left : 850px;
      }
      h2 {
        margin-left: -800px;
        margin-top: -400px;
      }
      .kata {
        border: 10px ;
        width: 750px;
        height: 200px;
        margin-left: 150px;
        text-align: left;
        font-size: 24px;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default about;