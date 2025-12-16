# # Use official Node.js 18 alpine image
# FROM node:18-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["node", "app.js"]


# final-lab-frontend/Dockerfile
# FROM node:20
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Keep server running
CMD ["node", "app.js"]
