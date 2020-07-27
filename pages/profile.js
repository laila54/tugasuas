import Layout from '../components/Layout';

const profile = () => (
  <Layout title="Hubungi kami">
    <h1>Selamat Datang kawan ...</h1>
    <div className="img">
      <img src="/static/image/lila.jpeg" />
    </div>
    <ul className="info">
      <li>
        Nama : Laila Nur Apriliana Fauziyah
      </li>
      <li>Nim : 1118101661</li>
      <li>Angkatan : 2018</li>
      </ul>
    <style jsx>{`
      img{
          max-height: 5%;
          width: 15%;
          border-radius: 100%;
      }
      .info{
        text-align:center;
        padding: 0;
        list-style: none;
        font-size: 22px;
        font-style:bold;
      }
    `}</style>
  </Layout>
);

export default profile;