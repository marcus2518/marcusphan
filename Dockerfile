# Use an official Node.js runtime as a parent image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install typescript -g

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Use an official nginx image to serve the built app
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration file if needed
COPY nginx.conf /etc/nginx/conf.d/configfile.template

# Expose port 80
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"