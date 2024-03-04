# Use the official lightweight Node.js 16 Alpine image.
FROM node:18-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json, package-lock.json, and next.config.js
COPY package*.json next.config.mjs ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application source code from the current directory to /app inside the container
COPY . .

# Build the application
RUN npm run build

# Set the environment to production
ENV NODE_ENV production

# The application listens on port 3000. Expose it.
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

