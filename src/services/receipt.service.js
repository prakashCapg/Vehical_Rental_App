import { getReceiptFakeAPI } from "../fakeAPI/receipt-fake-api";

export const fetchReceipt = async (bookingId) => {
  try {
    const invoiceData = getReceiptFakeAPI(bookingId);
    return invoiceData;
  } catch (error) {
    console.error("Error fetching invoice data:", error);
    throw error;
  }
};
