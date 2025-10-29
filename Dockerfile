# # Step 1: Use an official Node.js image from Docker Hub
# FROM node:18-alpine

# # Step 2: Set working directory inside the container
# WORKDIR /usr/src/app

# # Step 3: Copy package.json and package-lock.json (if exists)
# COPY package*.json ./

# # Step 4: Install dependencies (none here, but it’s standard)
# RUN npm install --production

# # Step 5: Copy all project files into container
# COPY . .

# # Step 6: Set environment variables
# ENV PORT=3000
# ENV ROLL_NO=fa22-bse-124

# # Step 7: Tell Docker which port the app uses
# EXPOSE 3000

# # Step 8: Command to run your app
# CMD ["node", "app.js"]

# //this is the new changes i made for pull command



# Step 1: Use an official Node.js image from Docker Hub
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install dependencies (none here, but it’s standard)
RUN npm install --production

# Step 5: Copy all project files into container
COPY . .

# Step 6: Set environment variables
ENV PORT=3000
ENV ROLL_NO=fa22-bse-124

# Step 7: Tell Docker which port the app uses
EXPOSE 3000

# Step 8: Command to run your app
CMD ["node", "app.js"]

# this is the new changes i made for pull command
#this is new changes
