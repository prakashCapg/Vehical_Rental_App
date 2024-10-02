import { getReceiptFakeAPI } from "../fakeAPI/receipt-fake-api";

export function Receipt() {
  const document1 = getReceiptFakeAPI();
  return document1;
}
