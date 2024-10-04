import { getTrackingFakeAPI } from "../fakeAPI/tracking-fake-api";

export function getTracking() {
  const trackingData = getTrackingFakeAPI();
  return trackingData;
}
