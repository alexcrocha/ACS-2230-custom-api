# API Routes

## Categories

### Create Category

**Endpoint:** `/v1/categories`

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
  "message": "Category created successfully!",
  "category": {
    "_id": "string",
    "name": "string",
    "brands": []
  }
}
```

### List Categories

**Endpoint:** `/v1/categories`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
[
  {
    "_id": "string",
    "name": "string",
    "brands": [
      {
        "_id": "string",
        "name": "string",
      }
    ]
  }
]
```

### Get Category

**Endpoint:** `/v1/categories/:id`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "_id": "string",
  "name": "string",
  "brands": [
    {
      "_id": "string",
      "name": "string",
    }
  ]
}
```

### Update Category

**Endpoint:** `/v1/categories/:id`

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
  "message": "Category updated successfully!",
  "category": {
    "_id": "string",
    "name": "string",
    "brands": []
  }
}
```

### Delete Category

**Endpoint:** `/v1/categories/:id`

**Method:** `DELETE`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "message": "Category deleted successfully!"
}
```
