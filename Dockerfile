# Use the official Node.js 20 image as the base image
FROM node:20-alpine AS builder

# # Set the working directory in the container
WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# # Copy the rest of the application code to the working directory
COPY . .

# # # Install dependencies
# RUN npm install


# # # Build the Next.js application
# RUN npm run build

# FROM node:20-alpine AS use
# WORKDIR /app
# COPY --from=builder /app/package.json .
# COPY --from=builder /app/package-lock.json .
# COPY --from=builder /app/next.config.mjs ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# # # Expose port 3000
# EXPOSE 3000

# # # Start the Next.js application
# # CMD ["npm", "start"]
# ENTRYPOINT ["node", "server.js"]
