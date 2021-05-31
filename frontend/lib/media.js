import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  // console.log("MEDIA: ", media, media.url)
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

export function generateSrcSet(formats) {
  let srcSetString = "";
  Object.keys(formats).forEach((format) => {
    srcSetString += `${getStrapiMedia(formats[format])} ${
      formats[format].width
    }w, `;
  });
  return srcSetString;
}
