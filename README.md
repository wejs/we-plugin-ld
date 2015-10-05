# We.js Linked Data plugin 

Status: **TODO!** we only have the plugin structure and hook

> A plugin for add suport to SOLID Spec and Linked data and allow to expose project resources data in one format compatible with this specs

## Features

- [ ] Suport to `application/ld+json` response format
- [ ] Close tasks in: https://github.com/wejs/we/issues/95
 
## How to test:

### With npm test

```sh
npm test
```

### Inside one project

1. Clone the https://github.com/wejs/we-plugin-ld 
2. Create one we.js project with: `yo wejs:app` and configure the database
3. link your `we-plugin-ld` in the we.js project
4. start your project and access the `/user` route with `Accept: application/ld+json` http HEADER

### Do you want to contribute?

- Join us in [Google groups](https://groups.google.com/forum/#!forum/we-js) to help with development or to hang out with us :)
- Create a new issue to report bugs: https://github.com/wejs/we-plugin-ld/issues
- Fix an issue: https://github.com/wejs/we-plugin-ld/issues

## Links

> * We.js site: http://wejs.org
> * SOLID spec: https://github.com/solid/solid-spec

## License

MIT