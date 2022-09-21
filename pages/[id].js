//import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
    <div className="container">
    <div className="row">
    <div className="col-6 mx-auto">
      <article className="card col p-3 text-center">
        <h2>Personal Details</h2>
        <div className="card-body text-center p-3">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2">Profession: {itemData.type}</h6>
          <p className="card-text">Date of Birth: {itemData.dob}</p>
          <p className="card-text">Favorite Snack: {itemData.snack}</p>
        </div>
      </article>
     
      <div className="list-group col text-center p-3">
       
       
        {itemData.related ? 
          <h2 className='text-center p-3'>Friends Include:</h2> : null
        }
        {/* added second expression ? ...:null to map through data set */}
        {itemData.related ? 
          itemData.related.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
            )
          )
          //if nothing matches null or nothing will show using expression ? ...:null
          : null
        }
       
      </div>
      </div>
      </div>
      </div>
    </Layout>
  );
}