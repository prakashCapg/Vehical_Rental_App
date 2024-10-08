import { getInvoiceFakeAPI } from "../fakeAPI/Invoice-fake-api";

export const fetchInvoiceData = async (bookingId) => {
  try {
    const invoiceData = getInvoiceFakeAPI(bookingId);
    return invoiceData;
  } catch (error) {
    console.error("Error fetching invoice data:", error);
    throw error;
  }
};
