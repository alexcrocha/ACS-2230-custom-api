# API Routes

## Authentication

### Register

**Endpoint:** `/v1/auth/register`

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

**Endpoint:** `/v1/auth/login`

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

**Endpoint:** `/v1/auth/logout`

**Method:** `GET`

**Response:**

```json
{
  "message": "Logout Successful!"
}
```
