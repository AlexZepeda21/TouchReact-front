const MEDIA_URL = import.meta.env.VITE_ASSETS_URL;

export const getMediaUrl = (media) => {
  if (!media) return null;

  // string directo
  if (typeof media === "string") {
    return media.startsWith("http")
      ? media
      : `${MEDIA_URL}${media}`;
  }

  // formato simple Strapi 
  if (media.url) {
    return media.url.startsWith("http")
      ? media.url
      : `${MEDIA_URL}${media.url}`;
  }

  // formato populate profundo (fallback)
  if (media.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith("http")
      ? url
      : `${MEDIA_URL}${url}`;
  }

  return null;
};