# Book Store Api

## Create Books

**Endpoint** POST /api/books

Request Body:

```json
{
    "title": "String",
    "description": "String"
}
```

Response (Success):

```json
{
    "data": {
        "title": "String",
        "description": "String"
    }
}
```

Response (Error):

```json
{
    "error": {
        "message": "String"
    }
}
```
