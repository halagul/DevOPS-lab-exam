# # Use official Node.js 18 slim image for small size and stability
# FROM node:18-alpine

# # Create and set working directory
# WORKDIR /usr/src/app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy backend source code
# COPY . .

# # Expose backend port
# EXPOSE 4000

# # Start backend server
# CMD ["node", "server.js"]


# final-lab-backend/Dockerfile
# FROM node:20
FROM node:18-alpine


WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
