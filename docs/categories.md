# API Routes

## Categories

### Create Category

**Endpoint:** `/categories`

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
    "id": "string",
    "name": "string"
  }
}
```

### List Categories

**Endpoint:** `/categories`

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

### Get Category

**Endpoint:** `/categories/:id`

**Method:** `GET`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "id": "string",
  "name": "string"
}
```

### Update Category

**Endpoint:** `/categories/:id`

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
    "id": "string",
    "name": "string"
  }
}
```

### Delete Category

**Endpoint:** `/categories/:id`

**Method:** `DELETE`

**Headers:** `Authorization: Bearer <token>`

**Response:**

```json
{
  "message": "Category deleted successfully!"
}
```
