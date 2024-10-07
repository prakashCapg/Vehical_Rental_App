import { getTrackingFakeAPI } from "../fakeAPI/tracking-fake-api";

export function getTracking(statusFilter) {
  return getTrackingFakeAPI(statusFilter);
}
