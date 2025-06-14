FROM node:22.16.0

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

# Set working directory
WORKDIR /testapp

# Copy only package files first (for caching & clean install)
COPY package*.json ./

# Install dependencies (inside Docker, avoids host-native modules)
RUN npm install

# Rebuild bcrypt for current Node version (optional if bcrypt is used)
RUN npm rebuild bcrypt --build-from-source

# Now copy the rest of the source code
COPY . .

# Start the app
CMD ["node", "server.js"]
