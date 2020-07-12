import { citydataraw, metadataraw } from "./rawCityData";
export class CityData {
  getCityData(id: number) {
    return citydataraw[id];
  }
  getCityMetadata() {
    return metadataraw;
  }
}
