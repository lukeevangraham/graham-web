import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  // console.log("MEDIA: ", media, media.url)
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
