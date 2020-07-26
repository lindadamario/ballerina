import 'isomorphic-fetch';
const accessToken = '71oHEi7dFFbh8_dcyprZiha95KrzCv0Omgw5jW67di8';
const spaceId = 'zz275uq3zgwz';

export default class Util {
  static async getPressFeedbacks() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=author&&fields.category=Press`
    );
    const json = await res.json();
    return json;
  }

  static async getAudienceFeedbacks() {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=author&&fields.category=Audience`
    );
    const json = await res.json();
    return json;
  }
}

