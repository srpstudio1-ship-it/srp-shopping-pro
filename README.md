# SRP Shopping — Full Multi-Vendor Starter

## Run
1. Install Node.js 18+.
2. `npm install`
3. Copy `.env.example` to `.env` and change secrets.
4. `npm start`
5. Open `http://localhost:3000`

## Dashboards
- Storefront: `/`
- Admin: `/admin.html`
- Seller: `/seller.html`

## Demo credentials
Admin: `admin@srpshopping.local` / `Admin@12345`
Seller: `fashion@srp.local` / `seller123`

## Included
Customer registration/login, catalog search/filter/sort, cart, checkout, orders, vendor directory, seller onboarding, seller dashboard, product/inventory/order management, admin dashboard, vendor approval, catalog management and order status management.

## Production replacements
The bundled JSON store is intentionally simple for local development. For production, replace it with PostgreSQL, add Redis/session infrastructure, object storage for product images, real payment gateway webhooks, courier/shipping APIs, email/SMS OTP, refresh-token rotation, CSRF/rate limiting, audit logs, backups and observability. Never keep demo credentials or secrets in source control.
