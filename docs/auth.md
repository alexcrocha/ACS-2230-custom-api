# API Routes

## Authentication

### Register

**Endpoint:** `/auth/register`

**Method:** `POST`

**Body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "Register Successful!",
  "user": {
    "id": "string",
    "username": "string"
  }
}
```

### Login

**Endpoint:** `/auth/login`

**Method:** `POST`

**Body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "Login Successful!",
  "user": {
    "id": "string",
    "username": "string"
  }
}
```

### Logout

**Endpoint:** `/auth/logout`

**Method:** `GET`

**Response:**

```json
{
  "message": "Logout Successful!"
}
```
