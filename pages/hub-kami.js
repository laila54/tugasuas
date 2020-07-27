import Layout from '../components/Layout';

const About = () => (
  <Layout title="Hubungi kami">
    <h1>Hubungi kami</h1>
    <ul className="company-info">
      <li>
        <span className="company">@RumahSkincare_BWI</span>
      </li>
      <li>Ig: @rumahskincare_bwi</li>
      <li>Banyuwangi</li>
      <li>
        <a href="mailto:hi@fi.studio">rumahskincare_bwi@gmail.com</a>
      </li>
      <li><a href="https://api.whatsapp.com/send?phone=085704296885&text=&source=&data=&app_absent=">Chat Kami</a></li>
    </ul>
    <div className="about-text">
      <img src="/static/produk/shimai.jpeg" />
      <p>
      Tujuan saya membuat E - Commerce perawatan kecantikan adalah guna mendukung pemasaran produk-produk skincare yang ada saat ini karena dilihat dari angka peminatnya semakin tinggi. Selain itu, untuk memudahkan konsumen dalam memilih produk serta mendapatkan kepuasan dalam membeli suatu produk. Dalam dunia kecantikan pasti ada berbagai macam jenis produk yang mempunyai nilai manfaat yang berbeda-beda dan memiliki nilai jual yang berbeda pula. Apalagi dalam suatu produk kecantikan biasanya akan ada pemilihan produk yang harus sesuai dengan kondisi kulit atau wajah kita agar tidak terjadi kesalahan dalam menggunakan produk kecantikan. Maka dari itu fungsi pembuatan E-Commerce kecantikan ini untuk memberikan kenyamanan dalam berbelanja produk kecantikan sesuai kebutuhan & manfaatnya.
      </p>
      
    </div>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        max-height: 35%;
        max-width: 35%;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;