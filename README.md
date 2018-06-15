# express-notes

> An application for storing notes, built using node.js and nuxt.js

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## Server-Api Routes

Per request, here is documenation for existing server side routes:

*These are subject to change*

- `/api`
  - // This is the parent scope everything lives under this.

- `/auth`
  - Authorization current has 4 methods and 1 alias.
  - POST `/login`
    - required fields: `username`, `password`
  - POST `/register` OR `/signup`
    - required fields: `username`, `password`
  - POST `/me`
    - required fields: None. Checks existence of `Authorization` header cookie and validates it.
  - POST `/logout`
    - required fields: None. Requires `Authorization` header, destorys token in cookie.

- `/notes`
  - Notes currently 6 methods.
  - GET `/` Gets a list of notes for a user.
    - Requires authorization header
  - GET `/:id` Gets a specific note for user.
    - Requires authorization header
  - GET `/shared/:id`
    - `id` is required. No Authorization.
  - POST `/`
    - Requires `Authorization` header
    - Required fields: `content`
    - Optional fields: 
      - `archived: Boolean`
      - `title: String` 
      - `shared: Boolean`
  - PUT `/:id`
    - Requires `Authorization` header
    - Requires `id`
    - Requires entire existing document.
  - DELETE `/:id`
    - Requires `Authorization` header
    - Requires `id`


