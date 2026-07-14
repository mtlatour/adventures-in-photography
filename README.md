# Adventures in Photography — your portfolio site

A simple 3-page site: Home, Gallery, About. No build tools, no dependencies —
just open index.html in a browser, or upload the whole folder to any web host.

## Add your own photos
1. Drop your image files into the `images` folder (jpg or png, roughly square
   crops work best since the grid uses even squares).
2. Open `js/main.js` and find the `PHOTOS` array near the top.
3. Add one line per photo:

   { file: "your-photo.jpg", category: "Landscape", caption: "A short caption" }

4. Delete the placeholder entries (and placeholder .svg files in /images) once
   you've swapped in real photos.

## About categories
You don't need to decide your final categories yet. The filter buttons on the
Gallery page are generated automatically from whatever category names appear
in the PHOTOS array — rename them, split them, or add new ones any time by
editing that one file.

## Personalize
- Site title / brand: search for "Adventures in Photography" across the HTML
  files to change it everywhere.
- Your name and bio: edit about.html.
- Email address: search for "hello@example.com" and replace it (appears in
  the footer and About page contact button).
- Hero image: replace images/hero.svg with a real photo (name it hero.jpg
  and update the src in index.html), ideally a wide, striking shot.

## Deploy
Any static host works — Netlify, Vercel, GitHub Pages, or your own server.
Just upload the whole folder as-is.
