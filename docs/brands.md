# API Routes

## Brands

### Create Brand

**Endpoint:** `/v1/categories/:categoryId/brands`

**Method:** `POST`

**Headers:** `Authorization: Bearer <token>`

**Body:**

```json
{
  "name": "string",
  "description": "string"
}
```

**Response:**

```json
{
  "message": "Brand created successfully!",
  "brand": {
    "_id": "string",
    "name": "string",
    "description": "string",
    "category": {
      "_id": "string",
      "name": "string"
    }
  }
}
```

### List Brands

**Endpoint:** `/v1/categories/:categoryId/brands`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
[
  {
    "_id": "string",
    "name": "string",
    "description": "string",
    "category": {
      "_id": "string",
      "name": "string"
    }
  }
]
```

### Get Brand

**Endpoint:** `/v1/categories/:categoryId/brands/:id`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "category": {
    "_id": "string",
    "name": "string"
  }
}
```

### Update Brand

**Endpoint:** `/v1/categories/:categoryId/brands/:id`

**Method:** `PUT`

**Headers:** `Authorization: Bearer <token>`

**Body:**

```json
{
  "name": "string",
  "description": "string",
}
```

**Response:**

```json
{
  "message": "Brand updated successfully!",
  "brand": {
    "_id": "string",
    "name": "string",
    "description": "string",
    "category": {
      "_id": "string",
      "name": "string"
    }
  }
}
```

### Delete Brand

**Endpoint:** `/v1/categories/:categoryId/brands/:id`

**Method:** `DELETE`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "message": "Brand deleted successfully!"
}
```
