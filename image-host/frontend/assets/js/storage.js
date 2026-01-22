// // ✅ localStorage logic only

// // storage.js

// const STORAGE_KEYS = {
//   SEARCH: "lastSearch",
//   IMAGES: "lastSearchImages"
// };

// // Save search keyword
// export function saveSearch(query) {
//   localStorage.setItem(STORAGE_KEYS.SEARCH, query);
// }

// // Save images
// export function saveImages(images) {
//   localStorage.setItem(
//     STORAGE_KEYS.IMAGES,
//     JSON.stringify(images)
//   );
// }

// // Load saved search
// export function loadSearch() {
//   return localStorage.getItem(STORAGE_KEYS.SEARCH);
// }

// // Load saved images
// export function loadImages() {
//   const data = localStorage.getItem(STORAGE_KEYS.IMAGES);
//   return data ? JSON.parse(data) : null;
// }

// // Clear saved data (optional)
// export function clearStorage() {
//   localStorage.removeItem(STORAGE_KEYS.SEARCH);
//   localStorage.removeItem(STORAGE_KEYS.IMAGES);
// }
