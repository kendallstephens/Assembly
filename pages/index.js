import { useState } from "react";
import Router from "next/router";
import { Provider } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import {useSession} from 'next-auth/client'

import Home from '../components/Home'
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DonutShop from "../components/prebuilt/DonutShop";
import CheckoutForm from "../components/CheckoutForm";
import getDonutPrice from "../utils/get-donut-price";


const MainPage = props => {
  const [numDonuts, setNumDonuts] = useState(1);
  const [session, loading] = useSession()

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    //   <Home />  
    <div className={styles.container}>
    <Home />  
    <Head>
      <title>Nextjs | Next-Auth</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}></h1>
      <div className={styles.user}>
        {loading && <div className={styles.title}>Loading...</div>}
        {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
          <img src={session.user.image} alt="" className={styles.avatar} />
        </>}
        {!session &&
          <>
            <p className={styles.title}>Please Sign in</p>
                 
</>
        }
      </div>
    </main>
  </div>
  
   
   
    // <Layout title="Donut Shop">
    
     
    
       
    
    //   <Row>
    //     <DonutShop
    //       onAddDonut={addDonut}
    //       onRemoveDonut={remDonut}
    //       numDonuts={numDonuts}
    //     />
    //   </Row>
    //   <CheckoutForm
    //     price={getDonutPrice(numDonuts)}
    //     onSuccessfulCheckout={() => Router.push("/success")}
    //   />
    // </Layout>
  );
};

export default MainPage;
