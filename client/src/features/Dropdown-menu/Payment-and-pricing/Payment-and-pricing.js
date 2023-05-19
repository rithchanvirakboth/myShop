import React from "react";

function PaymentAndPricing() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="col-9 mt-4">
          <a href="/" className="text-decoration-none go-back-link">
            Back
          </a>
          <h1 className="text-start mt-2" style={{ fontWeight: "600" }}>
            Payment and Pricing
          </h1>
          <div className="section-1 col-12 col-md-12 col-lg-9">
            <p className="text-start mt-4">
              <strong>Payment</strong>
            </p>
            <p className="text-start mt-2">
              We accept the following payment methods:
            </p>
            <ul className="text-start mt-2">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
              <li>Google Pay</li>
              <li>Shopify Pay</li>
            </ul>
            <p className="text-start mt-2">
              Unfortunately, we do not accept checks or money orders in the website. If you are
              having issues checking out, please contact us at our customer 
              service by clicking<a href="/contact" className="text-decoration-none"> here</a>.
            </p>
            <p className="text-start mt-2">
              <strong>Pricing</strong>
            </p>
            <p className="text-start mt-2">
              All prices are in USD. We reserve the right to change pricing at
              any time without prior notice. However, in our store, we have a
              flexible pricing policy. If you want to buy a large number of
              products, we will be happy to offer you a discount. You can pay
              with your local currency. The price in your local currency is
              calculated according to the current exchange rate of the Central
              Bank of the country where you are located.
            </p>

            <p className="text-start mt-2">
              In our store, we do accept payments in cash. If you want to pay
              for your order in cash, you need to provide us with tax pricing as well
              as the exact amount of money for your order. You can pay for your
              order in cash at our office or at the time of delivery if it is
              in the local area.
            </p>

            <p className="text-start mt-2">
              <strong>Shipping price</strong>
            </p>
            <p className="text-start mt-2">
              The shipping price depends on the weight of the product and the
              country of delivery. You can find out the exact shipping price
              when placing an order. The shipping price is calculated
              automatically.
            <br />
            <br />
              Our shop offers free shipping in local for orders over $100 and 
              free shipping worldwide for orders over $200. However, it is only included
              price of the product and the original price of product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentAndPricing;
