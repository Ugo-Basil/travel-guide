import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/v2/list`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "11.847676",
          tr_latitude: tr_lat ? tr_lat : "12.838442",
          bl_longitude: bl_lng ? bl_lng : "109.095887",
          tr_longitude: tr_lng ? tr_lng : "109.149359",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "1d204075b3msh38c6251d606bbf8p1bea4fjsne513d83a919d",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return ;
  } catch (error) {
    return null;
  }
};

