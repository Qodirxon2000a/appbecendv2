# Next.js Backend API (Vercel uchun)

Bu loyiha Vercel platformasida ishlashi uchun tayyorlangan.

## O'rnatish va Ishga Tushirish

1. **Node.js** o‘rnatilganligiga ishonch hosil qiling.
2. Paketlarni o‘rnatish:
```sh
npm install
```
3. Lokal serverni ishga tushirish:
```sh
npm run dev
```

## Vercelga Yuklash

1. Vercel CLI'ni o‘rnating:
   ```sh
   npm install -g vercel
   ```
2. Vercelga login qiling:
   ```sh
   vercel login
   ```
3. Loyihani yuklang:
   ```sh
   vercel --prod
   ```

Shundan so‘ng API quyidagicha ishlaydi:
- `https://your-vercel-app.vercel.app/api/worker`
- `https://your-vercel-app.vercel.app/api/objects`

## API Endpointlar

- **GET** `/api/worker` - Ishchilarni olish
- **POST** `/api/worker` - Yangi ishchi qo‘shish
- **PUT** `/api/worker` - Ishchi ma’lumotlarini yangilash
- **DELETE** `/api/worker` - Ishchini o‘chirish

Barcha endpointlar bir xil formatda ishlaydi.
