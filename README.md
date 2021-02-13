# Star Wars characters GraphQL Server with Node and TypeScript

## Install dependencies
```
npm install
```

## Run the following to start the server
```
npm start
```

## Access the API at:
```
http://localhost:9000/api
```

### Fetch characters
```
query {
  characters {
    id,
    name,
    image,
    wiki,
    species
  }
}
```

### Delete character
```
mutation {
  deleteCharacter(id: characterToDeleteIDHere) {
    id: id
  }
}
```
