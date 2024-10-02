import { getInvoiceReceiptFakeAPI } from "../fakeAPI/Invoice-fake-api";

export function Invoice() {
  const document = getInvoiceReceiptFakeAPI();
  return document;
}
