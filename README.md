# fl-store

re-usable store for fluxlike applications

## USE

### install

Note: this is still in development and not registered to **npm** or **bower** yet.
      So keep this in mind and install via the Git URL for now.

via [bower](http://bower.io):

```sh
$ bower install https://github.com/danjamin/fl-store.git#master
```

OR via [npm](http://npmjs.com):

```sh
$ npm install https://github.com/danjamin/fl-store.git#master
```


## DEVELOP

### requirements

You are going to need node.  Also, install bower, and karma globally:

```sh
$ npm install -g bower karma-cli
```

### install dependencies

```sh
$ npm install
$ bower install
```

### linting and testing

```sh
$ npm test
```

note: to have karma watch for changes

```sh
$ karma start
```

note: to just run the linter

```sh
$ npm run-script lint
```

### todo

- [ ] clean up code
- [ ] Add more unit tests
- [ ] Bring in flow
- [ ] Setup travis CI
