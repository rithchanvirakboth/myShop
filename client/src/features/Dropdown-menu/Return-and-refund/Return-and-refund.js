import React from "react";

function ReturnRefund() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="col-9 mt-4">
          <a href="/" className="text-decoration-none go-back-link">
            Back
          </a>
          <h1 className="text-start mt-2" style={{ fontWeight: "600" }}>
            How do I return my product?
          </h1>

          <div className="section-1 col-12 col-md-12 col-lg-9">
            <h3 className="text-start mt-4">What is the return policy?</h3>
            <p className="text-start mt-3">
              If you are not satisfied with your purchase, you can return your
              product within 30 days of receiving your order. You can return
              your product for a different product, or a refund to the original
              payment method. Here are our return policy you need to know and
              follow:
              <br />
              <br />
              <ul>
                <li>
                  <strong>Product must be in new condition</strong>
                  <br />
                  Any product you return must be in the same condition you
                  received it and in the original packaging. Certain products
                  cannot be returned, such as perishable goods, custom products
                  (such as special orders or personalized items), and personal
                  care goods (such as beauty products). which we do not accept
                  returns. We advice you to check the product description before
                  ordering. Most of our products are not design for return. We
                  want customers to be happy with their purchase. However, if
                  the products do not meet your expectation, you can return it
                  within 30 days of receiving your order.
                </li>
                <br />
                <li>
                  <strong>Return shipping fees</strong>
                  <br />
                  If you return an item using a paid method, we'll deduct the
                  cost of return shipping and restocking fees from your refund.
                  However, if the return is the result of a shipping error or a
                  damaged or defective product, we will refund the full cost of
                  the merchandise and shipping charges. If you return an item
                  using our prepaid return label, and the reason for return is
                  not a result of a shipping error, the cost of return shipping
                  will be deducted from your refund. For more information about
                  refunds, please contact our customer service clicking on the
                  link{" "}
                  <a href="/contact" className="text-decoration-none">
                    Here
                  </a>
                </li>
                <br />
                <li>
                  <strong>Items that cannot be returned</strong>
                  <br />
                  Some items cannot be returned, including:
                  <ul>
                    <li>Items that are marked as final sale</li>
                    <li>Items that are damaged or missing parts</li>
                    <li>Items that are not in original condition</li>
                    <li>Items that are more than 30 days after delivery</li>
                    <li>Items that are not in the original packaging</li>
                    <li>
                      Items that customers have tried to return more than two
                      times
                    </li>
                    <li>Items that were not purchased directly from us</li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>Items with a special return policy</strong>
                  <br />
                  Some items may have a modified return policy, including some
                  items that are not returnable. For more information about our
                  return policy, please contact our customer service clicking on
                  the link{" "}
                  <a href="/contact" className="text-decoration-none">
                    Here
                  </a>
                  \
                </li>
              </ul>
            </p>
          </div>
          <div className="section-2 col-12 col-md-12 col-lg-9">
            <h3 className="text-start mt-4">
              How do I return for an exchange?
            </h3>
            <p className="text-start mt-3">
              Our shop does accept returns for exchange. However, we do have 
              some rules you need to follow about the return for an exchange.
              Here are our return policy you need to know and follow:
              <br />
              <ul>
                <li>
                  <strong>Product must be in new condition</strong>
                  <br />
                  Any product you return must be in the same condition you
                  received it and in the original packaging. Certain products
                  cannot be returned, such as perishable goods, custom products
                  (such as special orders or personalized items), and personal
                  care goods (such as beauty products). 
                </li>
                <li>
                  <strong> We only accept return for color dissatisfaction. </strong>
                </li>
                <li>
                  <strong>We accept if the size does not fit you. </strong>
                </li>
                <li>
                  <strong> We do not accept return for design dissatisfaction. </strong>
                </li>
              </ul>
            
             If you have any questions, please
              contact our customer service click on the link{" "}
              <a href="/contact" className="text-decoration-none">
                Here
              </a>
              <br />
              beside the return policy, we also have some rules you need to
              follow:
              <br />
              Users need to have at least an account to be able to return for an
              exchange. If you do not have an account, please create one by
              clicking on the link{" "}
              <a href="/login" className="text-decoration-none">
                Here
              </a>
              <br />
              <br />
              <ul>
                <li>
                  <strong>Step 1: Sign in to your account</strong>
                  <br />
                </li>
                <br />
                <li>
                  <strong>Step 2: Go to your order history</strong>
                  <br />
                </li>
                <br />
                <li>
                  <strong>Step 3: Select the item you want to return</strong>
                  <br />
                </li>

                <br />
                <li>
                  <strong>Step 4: Select the reason for return</strong>
                  <br />
                </li>
                <br />

                <li>
                  <strong>
                    Step 5: Click on the button "Return for exchange"
                  </strong>
                  <br />
                </li>

                <br />
                <li>
                  <strong>
                    Step 6: You will recieve an email with the return label
                    within 2weeks.
                  </strong>
                </li>
              </ul>
            </p>
          </div>
          <div className="section-3 col-12 col-md-12 col-lg-9">
            <h3 className="text-start mt-4">Where do I send my return?</h3>
            <p className="text-start mt-3">
              You can send your return to the address below:
              <br />
              <br />
              <strong>Address: 1234 Street Name, City Name, United States</strong>
              <br />
              <br />
              <strong style={{ color: "red"}}>
                *Please note that you will be responsible for the return shipping
                cost.
              </strong>
            </p>
          </div>
          <div className="FAQ-section col-12 col-md-12 col-lg-9">
            <h3 className="text-start mt-4">Did you find this article helpful?</h3>
            <p className="text-start mt-3">
              <strong>Yes</strong>
              <br />
              <strong>No</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnRefund;
