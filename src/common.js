import {WIDTH_PER_STAR} from "./const";

const getRating = (item) => {
  const itemRating = Math.round(item);
  return {width: WIDTH_PER_STAR * itemRating + `%`};
};

const adaptToClient = (data) => {
  const adaptedData = {
    ...data,
    previewImage: data.preview_image,
    isPremium: data.is_premium,
    isFavorite: data.is_favorite,
    maxAdults: data.max_adults,
    host: {
      ...data.host,
      avatarUrl: data.host.avatar_url,
      isPro: data.host.is_pro,
    }
  };

  delete adaptedData.preview_image;
  delete adaptedData.is_premium;
  delete adaptedData.is_favorite;
  delete adaptedData.host.avatar_url;
  delete adaptedData.host.is_pro;
  delete adaptedData.max_adults;

  return adaptedData;
};

const adaptReviewsToClient = (data) => {
  const adaptedData = {...data,
    user: {
      ...data.user,
      avatarUrl: data.user.avatar_url,
      isPro: data.user.is_pro,
    }
  };

  delete adaptedData.user.avatar_url;
  delete adaptedData.user.is_pro;


  return adaptedData;
};

const adaptAuthInfoToClient = (data) => {
  const adaptedData = {
    ...data,
    avatarUrl: data.avatar_url,
    isPro: data.is_pro,
  };

  delete adaptedData.data.avatar_url;
  delete adaptedData.data.is_pro;


  return adaptedData;
};

export {
  getRating,
  adaptToClient,
  adaptReviewsToClient,
  adaptAuthInfoToClient
};

