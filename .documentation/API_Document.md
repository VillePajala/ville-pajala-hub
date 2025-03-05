# API Documentation

## 1. Overview

This document outlines the API endpoints and integrations for the Ville Pajala Hub platform. The API is built using Next.js API routes and integrates with Sanity.io for content management, Supabase for database operations, and Clerk for authentication.

## 2. Authentication

### 2.1 Clerk Authentication
All authenticated endpoints require a valid JWT token from Clerk.

```typescript
// Example authentication middleware
import { clerkClient } from '@clerk/nextjs';

export async function authenticate(req: NextApiRequest) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('Unauthorized');
  return await clerkClient.verifyToken(token);
}
```

### 2.2 Authentication Headers
```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

## 3. Content API (Sanity.io)

### 3.1 Blog Posts

#### Get All Posts
```typescript
GET /api/blog
Query Parameters:
- page (number, default: 1)
- limit (number, default: 10)
- category (string, optional)
- tag (string, optional)

Response:
{
  posts: [{
    _id: string,
    title: string,
    slug: string,
    excerpt: string,
    publishedAt: string,
    category: string,
    tags: string[],
    author: {
      name: string,
      image: string
    }
  }],
  total: number,
  page: number,
  totalPages: number
}
```

#### Get Single Post
```typescript
GET /api/blog/[slug]

Response:
{
  _id: string,
  title: string,
  slug: string,
  content: any[], // Portable Text
  publishedAt: string,
  category: string,
  tags: string[],
  author: {
    name: string,
    image: string
  }
}
```

### 3.2 Portfolio Items

#### Get All Portfolio Items
```typescript
GET /api/portfolio
Query Parameters:
- category (string, optional)
- tag (string, optional)

Response:
{
  items: [{
    _id: string,
    title: string,
    slug: string,
    category: string,
    tags: string[],
    thumbnail: {
      url: string,
      alt: string
    }
  }]
}
```

#### Get Single Portfolio Item
```typescript
GET /api/portfolio/[slug]

Response:
{
  _id: string,
  title: string,
  slug: string,
  description: any[], // Portable Text
  category: string,
  tags: string[],
  images: [{
    url: string,
    alt: string
  }],
  links: [{
    title: string,
    url: string
  }]
}
```

## 4. User Interactions API (Supabase)

### 4.1 Comments

#### Get Comments
```typescript
GET /api/comments
Query Parameters:
- contentId (string)
- contentType (string) // 'blog' | 'portfolio'

Response:
{
  comments: [{
    id: string,
    content: string,
    createdAt: string,
    user: {
      id: string,
      name: string,
      avatar: string
    }
  }]
}
```

#### Add Comment
```typescript
POST /api/comments
Authorization Required

Request Body:
{
  contentId: string,
  contentType: string, // 'blog' | 'portfolio'
  content: string
}

Response:
{
  id: string,
  content: string,
  createdAt: string,
  user: {
    id: string,
    name: string,
    avatar: string
  }
}
```

### 4.2 Likes

#### Get Likes
```typescript
GET /api/likes
Query Parameters:
- contentId (string)
- contentType (string) // 'blog' | 'portfolio'

Response:
{
  count: number,
  hasLiked: boolean // if authenticated
}
```

#### Toggle Like
```typescript
POST /api/likes
Authorization Required

Request Body:
{
  contentId: string,
  contentType: string // 'blog' | 'portfolio'
}

Response:
{
  count: number,
  hasLiked: boolean
}
```

## 5. Analytics API

### 5.1 Page Views

#### Record Page View
```typescript
POST /api/analytics/pageview

Request Body:
{
  path: string,
  contentId?: string,
  contentType?: string
}

Response:
{
  success: true
}
```

#### Get Page Views
```typescript
GET /api/analytics/pageview
Authorization Required (Admin Only)
Query Parameters:
- startDate (string)
- endDate (string)
- path (string, optional)

Response:
{
  views: [{
    path: string,
    count: number,
    date: string
  }]
}
```

## 6. Newsletter API (Substack Integration)

### 6.1 Newsletter Subscription

#### Subscribe
```typescript
POST /api/newsletter/subscribe

Request Body:
{
  email: string,
  name?: string
}

Response:
{
  success: true,
  message: string
}
```

## 7. Contact API

### 7.1 Contact Form

#### Submit Contact Form
```typescript
POST /api/contact

Request Body:
{
  name: string,
  email: string,
  subject: string,
  message: string
}

Response:
{
  success: true,
  message: string
}
```

## 8. Error Handling

### 8.1 Error Response Format
```typescript
{
  error: {
    code: string,
    message: string,
    details?: any
  }
}
```

### 8.2 Common Error Codes
- `unauthorized`: Authentication required
- `forbidden`: Insufficient permissions
- `not_found`: Resource not found
- `validation_error`: Invalid input data
- `rate_limited`: Too many requests
- `internal_error`: Server error

## 9. Rate Limiting

### 9.1 Limits
- Public API: 100 requests per minute
- Authenticated API: 1000 requests per minute
- Contact Form: 5 requests per hour

### 9.2 Headers
```http
X-RateLimit-Limit: <max_requests>
X-RateLimit-Remaining: <remaining_requests>
X-RateLimit-Reset: <reset_timestamp>
```

## 10. Webhooks

### 10.1 Sanity.io Webhooks
```typescript
POST /api/webhooks/sanity
- Content updates
- Content deletions
- Content publications

Request Body:
{
  type: string, // 'created' | 'updated' | 'deleted'
  documentId: string,
  documentType: string,
  revision: string
}
```

### 10.2 Clerk Webhooks
```typescript
POST /api/webhooks/clerk
- User creation
- User deletion
- User updates

Request Body:
{
  type: string,
  data: {
    id: string,
    // ... other user data
  }
}
```

## 11. API Versioning

### 11.1 Version Headers
```http
Accept-Version: v1
```

### 11.2 Version Routes
- `/api/v1/*` - Current stable version
- `/api/v2/*` - Beta features (when available)

## 12. Development Tools

### 12.1 API Testing
- Postman collection available
- OpenAPI specification
- Integration tests
- Rate limit testing tools

### 12.2 Development Environment
- Local API endpoints
- Mock data generators
- Test authentication tokens
- Webhook testing tools

## 13. Security

### 13.1 API Security Measures
- CORS configuration
- Rate limiting
- Input validation
- Output sanitization
- JWT validation
- HTTPS only

### 13.2 Security Headers
```http
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 14. Performance

### 14.1 Caching
- Redis cache for frequent queries
- CDN caching for static content
- Browser caching headers
- Query result caching

### 14.2 Response Times
- API response time < 100ms
- Cache hit response < 20ms
- Long operations async handling
- Timeout handling 