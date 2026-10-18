# aakashindia

Aakash India website built with Next.js 16.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Before publishing changes, run `npm run lint` and `npm run build`.

## Deploy with Vercel

1. In Vercel, choose **Add New → Project** and import `Shyanil/aakashindia` from GitHub.
2. Keep the root directory as `./` and the detected **Next.js** framework settings. The repository includes the `npm run build` script and lockfile; no environment variables are currently required for the site to build.
3. Deploy. Future pushes to `main` can trigger production deployments once the GitHub repository is connected to Vercel.
4. If this deployment should serve `aakashindia.in`, add that domain in the Vercel project and update its DNS records as Vercel instructs. The app's metadata currently points to `https://aakashindia.in`.

The site pages build and render, but lead and career forms do **not** send submissions yet. `lib/submit-form.ts` deliberately returns `not-configured`, and the form shows visitors a contact phone number and email address. Connect a submission backend before relying on those forms for leads.
