// MobX-State-Tree uses reassignment to self. Disable that rule for model files
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { types } from 'mobx-state-tree';
import BillingInfo from './BillingInfo';
import ShippingInfo from './ShippingInfo';
import OrderConfirmation from './OrderConfirmation';

const Checkout = types
  .model({
    shippingInfo: types.optional(ShippingInfo, {}),
    billingInfo: types.optional(BillingInfo, {}),
    orderConfirmation: types.optional(OrderConfirmation, {}),
  })
  .actions(self => ({
    // adds shipping info from checkout form
    addShippingInfo(info) {
      const infoObj = {
        first_name: info.firstName,
        last_name: info.lastName,
        street_1: info.street_1,
        street_2: info.street_2,
        city: info.city,
        state: info.state,
        zip: info.zip,
        country: info.country,
        phone: info.phone,
        email: info.email,
      };
      self.shippingInfo = (infoObj);
      // set billing info if it's the is same as shipping
      if (info.sameAsBilling) {
        self.billingInfo = (infoObj);
      } else {
        // pulls pulling info from checkout form if not same as billing and sets it.
        const billingInfoObj = {
          first_name: info.billing_first_name,
          last_name: info.billing_last_name,
          street_1: info.billing_street_1,
          street_2: info.billing_street_2,
          city: info.billing_city,
          state: info.billing_state,
          zip: info.billing_zip,
          country: info.billing_country,
          phone: info.billing_phone,
          email: info.billing_email,
        };
        self.billingInfo = (billingInfoObj);
      }
    },
  }));

export default Checkout;
