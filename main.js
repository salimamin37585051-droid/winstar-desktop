# Winstar Desktop App

Winstar Uniform Inventory Management System — Desktop Edition

## Download

Go to the [Releases page](../../releases) and download:
- `Winstar-portable.exe` — run directly, no installation
- `Winstar-Setup.exe` — installs with desktop shortcut

## Features

- Full uniform inventory management
- Guard profiles & dispatch tracking
- Cloud sync via Supabase (cross-device)
- Works offline with local storage
- Excel/CSV export
- QR code generation
- Role-based access control

## Development

```bash
# Install dependencies
npm install

# Run in development
npm start

# Build .exe
npm run build:win
```

## Setup

1. Download the `.exe` from Releases
2. Run it
3. Click **avatar → Database Setup**
4. Enter your Supabase URL and anon key
5. Create your account and sign in
