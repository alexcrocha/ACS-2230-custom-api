# API Routes

## Brands

### Create Brand

**Endpoint:** `/categories/:categoryId/brands`

**Method:** `POST`

**Headers:** `Authorization: Bearer <token>`

**Body:**

```json
{
  "name": "string"
}
```

**Response:**

```json
{
  "message": "Brand created successfully!",
  "brand": {
    "id": "string",
    "name": "string"
  }
}
```

### List Brands

**Endpoint:** `/categories/:categoryId/brands`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

### Get Brand

**Endpoint:** `/categories/:categoryId/brands/:id`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "id": "string",
  "name": "string"
}
```

### Update Brand

**Endpoint:** `/categories/:categoryId/brands/:id`

**Method:** `PUT`

**Headers:** `Authorization: Bearer <token>`

**Body:**

```json
{
  "name": "string"
}
```

**Response:**

```json
{
  "message": "Brand updated successfully!",
  "brand": {
    "id": "string",
    "name": "string"
  }
}
```

### Delete Brand

**Endpoint:** `/categories/:categoryId/brands/:id`

**Method:** `DELETE`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "message": "Brand deleted successfully!"
}
```
