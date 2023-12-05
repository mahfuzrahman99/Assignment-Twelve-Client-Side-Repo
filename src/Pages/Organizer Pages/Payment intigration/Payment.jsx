import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import TestCheckout from "./TestCheckout";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe('pk_test_51OEJdgBEfNYZbQL6lIkmQbH9H5Nn4kzVxOhAdi4FKuqiQ2R3aYzSD4NmSVbEEv0mzWzLfmxCyVxXAU4MdQoqZnMv00G9MBCa0t')
const Payment = () => {
    return (
        <div className="max-w-3xl mx-auto">
        <Helmet>
          <title>CareCampusPro | Payment</title>
        </Helmet>
            <div>
                <SectionTitle heading={"PAYMENT"}/>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <TestCheckout/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;