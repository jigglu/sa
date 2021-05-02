<h1 align="center">
  scristr.org
</h1>

## Develop

    yarn
    yarn dev

This project uses:

- [Vite](https://github.com/vitejs/vite) for frontend development
- [React](https://reactjs.org/) for UI section
- [React Router](https://reactrouter.com/) for routing
- [Styled Components](https://styled-components.com/) for styling the User Interface
- And a few other libraries for various sections

## Build

    yarn build

## Serve locally (with SSR)

    yarn start

## Files

- `/src/pages/*.tsx`: Pages defined here are served on routes dynamically (based on the file name).
- `/src/components/SEO.tsx`: Place for your meta titles and descriptions.
- `/src/components/images/*`: Images used in page content, including SVGs are all here.
