import { backendData } from "../backendData";

export function getvehicleDataFakeAPI() {
  return {
    carData: backendData["carData"],
    bikeData: backendData["bikeData"],
    sixSeaterData: backendData["sixSeaterData"],
  };
}
