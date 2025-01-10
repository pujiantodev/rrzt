# RRZT

stack :
- React + Vite
- React Router
- Zustand
- TailwindCSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Development

- clone this repository with `git clone https://github.com/rrzt/rrzt.git`
- install dependencies with `pnpm install`
- start the dev server with `pnpm dev`

## Structure Folder

```
src
├── api/
├── assets/
├── middleware/
├── pages/
├── store/
├── App.jsx
├── index.css
└── main.jsx
```
**Penjelasan Tambahan**

- `api` folder berisi file apiClient.js, yaitu axios yang diconfigurasi untuk koneksi ke backend dengan beberapa tambahan interceptor seperti interceptor untuk token dan error handling
- `middleware` folder berisi file `Authenticated.jsx` dan `Guest.jsx`. Authenticated digunakan untuk memeriksa apakah pengguna sudah login, sedangkan Guest digunakan untuk memeriksa apakah pengguna belum login.
- `store` folder berisi file authStore.js, yaitu Zustand yang digunakan untuk mengelola state pengguna.
- `pages` folder berisi file semua halaman yang ada di aplikasi, seperti Home, About, Login, dan NotFound.
