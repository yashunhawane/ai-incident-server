# AI Incident Server

Backend API for an AI incident/project tracking application. The server provides user authentication, project management, issue reporting, comments, employee lookup, and image uploads through Cloudinary.

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- JSON Web Tokens for authentication
- bcrypt/bcryptjs for password hashing
- Multer for file upload handling
- Cloudinary for image storage
- dotenv for environment configuration

## Project Structure

```text
src/
  app.js                 Express app setup and route mounting
  server.js              Server startup and MongoDB connection
  config/                Environment, MongoDB, and Cloudinary config
  controllers/           Request/response handlers
  middleware/            Auth and upload middleware
  models/                Mongoose schemas
  routes/                API route definitions
  services/              Business logic and database operations
```

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the development server:

```bash
npm run dev
```

Run the production server:

```bash
npm start
```

By default, the API runs on `http://localhost:4000`.

## Health Check

```http
GET /health
```

Returns:

```json
{ "status": "ok" }
```

## Authentication

Register a user:

```http
POST /api/auth/register
```

Body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "role": "employee"
}
```

Login:

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Most API routes require a bearer token:

```http
Authorization: Bearer <token>
```

## API Routes

### Projects

```http
POST /api/projects
GET /api/projectslist
GET /api/projects/:projectId
GET /api/projects/employee/:employeeId
GET /api/projects/teamLead/:teamLeadId
```

Projects include a title, description, team lead, members, status, and timestamps.

### Issues / Posts

```http
POST /api/posts
GET /api/getallposts
GET /api/posts/:postId
GET /api/posts/employee/:employeeId
GET /api/posts/teamLead/:teamLeadId
DELETE /api/posts/:postId
```

Issues are linked to a project and reporter. They can include a description, screenshot URLs, AI summary fields, and status.

### Comments

```http
POST /api/comments
GET /api/comments/post/:issueId
PUT /api/updatecomments/:commentId
DELETE /api/deletecomments/:commentId
```

Comments belong to an issue and are authored by a user.

### Employees

```http
GET /api/employees
```

Returns users with the `employee` role.

### Uploads

```http
POST /api/upload
```

Upload a single image using multipart form data with the field name `image`. The uploaded file is sent to Cloudinary and the response includes the image URL and public ID.

## Data Models

- `User`: name, email, password, role
- `Project`: title, description, teamLead, members, status, closedAt
- `Issue`: project, reportedBy, description, screenshots, aiSummary, status
- `Comment`: issue, author, content

## Notes

- The server uses ES modules, so imports use `import`/`export`.
- MongoDB connection failures are logged without crashing the development server.
- Protected routes require a valid JWT signed with `JWT_SECRET`.
- There is currently no automated test suite configured.
