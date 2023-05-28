import mongoose, { type ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const password = process.env.MONGO_PASSWORD;

// Replace the connection string with your own
const uri = `mongodb+srv://chenduona:${password}@nodeexpressprojects.lc0ddtm.mongodb.net/?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  // Handle events related to the database connection
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to the MongoDB database');
  });
}  