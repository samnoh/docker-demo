# Specify a base image
FROM node:alpine

# Set the environment variables
ENV PORT 3000

# Set working directory
WORKDIR /app

# Install dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .

# Default command
CMD ["npm", "start"]