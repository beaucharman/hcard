# Quick start

As defined in the `package.json`:

```
npm install
npm run build
npm run dev
npm run release
```

These install the project dependencies; build the output files; build and continue to watch for changes; build a minified and production ready release, respectively.

# Technology stack

I am using:
- *React* for UI components,
- *Babel* for JSX and es2015 compilation,
- *Stylus* for CSS pre processing and CSS modules for component-level style encapsulation,
- *Redux* for maintaining state,

I am managing all these dependancies and their output with a fairly basic *webpack* configuration.

I am not using controlled inputs to avoid using component-level state in this particular project.

# Structure explanation

App wide constants are maintained in the `constants` directory (mainly used to share action creator types and their corresponding reducer type)

`actions` and `reducers` declare and maintain the application's state (via *Redux*).

`containers` hold components that deal with Redux state, data flow and logic; and pass the result of each to the presentational `components`

There is a `.gitignore`, `.editorconfig`, `.eslint`, and `.nvmrc` for codebase consistence and communication.

# Roadmap

Where I would take this project next.

1. Add tests, particularly for reducers
2. Add validation to the form fields
3. Extend the .eslintrc (Use the Air B n B .eslintrc as a starting point if there is no internal JavaScript code style guide)
4. Add hot module reloading for faster development
5. (I made this change after writing the though down) Maybe change the output. The React render could look for a `div` with an id of `hcard`. We could also output to an `hcard` folder, with the bundles renamed to `hcard.js` and `hcard.css` (and drop the whole index.html file in the folder).
6. Version control :)
