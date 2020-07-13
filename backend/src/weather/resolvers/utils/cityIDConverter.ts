import { CityData } from "../../../city/data/cityData";
export function convertCityIDtoCoordinates(cityID: number) {
  const citydata = new CityData();
  const cityinfo = citydata.getCityData(cityID);
  if (
    cityinfo === undefined ||
    cityinfo.Coordinates === undefined ||
    cityinfo.Coordinates.lat === undefined ||
    cityinfo.Coordinates.lng === undefined
  ) {
    console.error("CityID is Invalid");
  }
  return cityinfo!.Coordinates;
}
