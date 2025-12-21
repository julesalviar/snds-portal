# SNDS Web Portal
A modern web portal application that serves as a centralized hub for accessing SNDS divisions web applications. Built with Next.js and Material UI 3, this portal provides an intuitive interface for users to discover and navigate to various SNDS services.
## Tech Stack

- **Framework**: Next.js 15.5.9
- **UI Library**: Material UI (MUI) 7.3.6
- **Styling**: Emotion (CSS-in-JS)
- **React**: 19.2.3

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd snds-portal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
# Create .env.local file for local development
# Add any required environment variables
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:4000](http://localhost:4000)

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

Start the production server:

```bash
npm start
```

## Project Structure

```
snds-portal/
├── components/
│   ├── Header.js          # Navigation header with Material 3 design
│   ├── Footer.js           # Footer component
│   └── TenantCard.js       # Card component for displaying tenant information
├── pages/
│   ├── _app.js             # App wrapper with Material UI theme provider
│   ├── _document.js        # Custom document with fonts
│   └── index.js            # Home page with tenant listing
├── package.json
└── README.md
```

## API Integration

The application fetches tenant data from:
```
http://localhost:3000/tenants/public
```

The API requires Basic Authentication. The credentials are configured in `pages/index.js` in the `getStaticProps` function.

### Data Revalidation

The tenant data is revalidated every hour (3600 seconds) to keep the content fresh while maintaining static site generation benefits.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
