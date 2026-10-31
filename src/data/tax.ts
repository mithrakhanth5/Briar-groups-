/**
 * TAX & SHIPPING CONFIGURATION
 * 
 * TODO: User confirmation needed on whether product prices (e.g. ₹325) are
 * GST-inclusive (MRP) or GST-exclusive (taxes added on top at checkout).
 * Current assumption: Base price is displayed, with GST calculated as configured below.
 */

export const TAX_CONFIG = {
  // Tea GST rate in India: 5%
  TEA_GST_RATE: 0.05,
  TEA_CGST_RATE: 0.025,
  TEA_SGST_RATE: 0.025,
  TEA_IGST_RATE: 0.05,

  // Courier/Transport Services GST rate: 18%
  SHIPPING_GST_RATE: 0.18,
  SHIPPING_CGST_RATE: 0.09,
  SHIPPING_SGST_RATE: 0.09,
  SHIPPING_IGST_RATE: 0.18,

  // Origin State of Briar Tea Head Office / Dispatch Factory
  ORIGIN_STATE: 'Tamil Nadu',

  /**
   * SHIPPING RULE CONFIG
   * TODO: Confirm shipping rate threshold. Original briartea.com site states "Free Shipping"
   * across all products. Set default to free (0).
   */
  DEFAULT_SHIPPING_FEE: 0,
  FREE_SHIPPING_DEFAULT: true,
};

export interface TaxBreakdown {
  subtotal: number;
  teaGst: number;
  teaCgst: number;
  teaSgst: number;
  teaIgst: number;
  isInterstate: boolean;
  shipping: number;
  shippingGst: number;
  shippingCgst: number;
  shippingSgst: number;
  shippingIgst: number;
  totalGst: number;
  total: number;
}

export function calculateOrderTax(
  subtotal: number,
  deliveryState: string = 'Tamil Nadu',
  customShippingFee?: number
): TaxBreakdown {
  const isInterstate =
    deliveryState.trim().toLowerCase() !== TAX_CONFIG.ORIGIN_STATE.toLowerCase();

  // Tea GST
  const teaGst = subtotal * TAX_CONFIG.TEA_GST_RATE;
  const teaCgst = isInterstate ? 0 : subtotal * TAX_CONFIG.TEA_CGST_RATE;
  const teaSgst = isInterstate ? 0 : subtotal * TAX_CONFIG.TEA_SGST_RATE;
  const teaIgst = isInterstate ? subtotal * TAX_CONFIG.TEA_IGST_RATE : 0;

  // Shipping fee
  const shipping =
    typeof customShippingFee === 'number'
      ? customShippingFee
      : TAX_CONFIG.FREE_SHIPPING_DEFAULT
      ? 0
      : TAX_CONFIG.DEFAULT_SHIPPING_FEE;

  // Shipping GST (18%)
  const shippingGst = shipping * TAX_CONFIG.SHIPPING_GST_RATE;
  const shippingCgst = isInterstate ? 0 : shipping * TAX_CONFIG.SHIPPING_CGST_RATE;
  const shippingSgst = isInterstate ? 0 : shipping * TAX_CONFIG.SHIPPING_SGST_RATE;
  const shippingIgst = isInterstate ? shipping * TAX_CONFIG.SHIPPING_IGST_RATE : 0;

  const totalGst = teaGst + shippingGst;
  const total = subtotal + teaGst + shipping + shippingGst;

  return {
    subtotal,
    teaGst,
    teaCgst,
    teaSgst,
    teaIgst,
    isInterstate,
    shipping,
    shippingGst,
    shippingCgst,
    shippingSgst,
    shippingIgst,
    totalGst,
    total,
  };
}
