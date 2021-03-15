import { useState } from "react";
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DonutShop from "../components/prebuilt/DonutShop";
import CheckoutForm from "../components/CheckoutForm";
import getDonutPrice from "../utils/get-donut-price";


const Checkout = props => {
    const [numDonuts, setNumDonuts] = useState(1);
    const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
    const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));
  
    return (       
      <Layout title="Donut Shop"> 
        <Row>
          <DonutShop
            onAddDonut={addDonut}
            onRemoveDonut={remDonut}
            numDonuts={numDonuts}
          />
        </Row>
        <CheckoutForm
          price={getDonutPrice(numDonuts)}
          onSuccessfulCheckout={() => Router.push("/success")}
        />
      </Layout> 
     
    );
  };
  
  export default Checkout;