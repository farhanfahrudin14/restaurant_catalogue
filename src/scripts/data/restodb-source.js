import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = (await response.json()).restaurants;
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
