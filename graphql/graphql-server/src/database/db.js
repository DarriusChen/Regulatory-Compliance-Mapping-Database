import Database from 'better-sqlite3';

// Initialize a connection to the SQLite database
const db = new Database('./src/database/framework.db',  { readonly: true, fileMustExist: true});

// Function to initialize the database connection
const initializeDatabase = () => {
  // Additional setup or migrations can be added here if needed
};

export { db, initializeDatabase };
