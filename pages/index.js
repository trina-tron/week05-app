
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <header className="py-2 text-center container">
          <div className="row">
            <div className="col-6 mx-auto">
              <h1 className="display-4">Friends Forever</h1>
            </div>
          </div>
        </header>
       <div className='container'>
       <div className='row'>
       <div className='col-6 mx-auto'>
       <div className="card ">
  <div className="card-body">
    <h5 className="card-title text-center">Friends</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="list-group list-group-flush">
  {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
            <a className="list-group-item list-group-item-action p-3 text-center">{name}</a>
            </Link>
          ))
          : null }
        </div>
       </div>
        </div>
        </div>
        </div>
      </Layout>
  );
}










