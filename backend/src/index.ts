import express from 'express';
import cors from 'cors';
import { supabase, testConnection } from './utils/db';

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', async (req, res) => {
  res.json({
    message: 'Welcome to Bonsai Prep API',
    version: '1.0.0',
    status: 'online'
  });
});

// Test database connection
app.get('/api/db-test', async (req, res) => {
  try {
    const isConnected = await testConnection();
    res.json({ 
      connected: isConnected,
      message: isConnected ? 'Successfully connected to Supabase' : 'Failed to connect to Supabase'
    });
  } catch (error) {
    console.error('Error testing database connection:', error);
    res.status(500).json({ error: 'Failed to test database connection' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
  // Test database connection on startup
  testConnection()
    .then(isConnected => {
      if (isConnected) {
        console.log('Successfully connected to Supabase');
      } else {
        console.error('Failed to connect to Supabase');
      }
    })
    .catch(error => {
      console.error('Error testing database connection:', error);
    });
}); 