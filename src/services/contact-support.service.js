import { contactSupportFakeAPI } from "../fakeAPI/contactSupport-fake-api";

export function contactSupport(details) {
  const result = contactSupportFakeAPI(details);
  return result;
}
