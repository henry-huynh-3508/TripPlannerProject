import { citydataraw, metadataraw } from "./rawCityData";
export class CityData {
  getCityData(id: number) {
    return citydataraw.find((city) => city.ID === String(id));
  }
  getCityMetadata() {
    return metadataraw;
  }
}
