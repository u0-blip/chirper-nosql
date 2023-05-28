import { User, Tweet, Relationship } from './schemas';
import { connectToDatabase } from './connect';

async function createDummyData() {
    // Connect to the database
    await connectToDatabase();

    // Create some dummy users
    const users = await User.insertMany([
        {
            username: 'johndoe',
            email: 'johndoe@example.com',
            password: 'password123',
            bio: 'I am a software developer',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            username: 'janedoe',
            email: 'janedoe@example.com',
            password: 'password456',
            bio: 'I am a web designer',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            username: 'bobsmith',
            email: 'bobsmith@example.com',
            password: 'password789',
            bio: 'I am a data analyst',
            avatar: 'https://example.com/avatar.jpg',
        },
    ]);

    // Create some dummy tweets
    const tweets = await Tweet.insertMany([
        {
            text: 'Hello, world!',
            author: users[0]._id,
        },
        {
            text: 'How are you doing?',
            author: users[1]._id,
        },
        {
            text: 'This is a tweet!',
            author: users[2]._id,
        },
    ]);

    // Create some dummy relationships
    const relationships = await Relationship.insertMany([
        {
            follower: users[0]._id,
            following: users[1]._id,
        },
        {
            follower: users[1]._id,
            following: users[2]._id,
        },
        {
            follower: users[2]._id,
            following: users[0]._id,
        },
    ]);

    console.log('Dummy data created successfully');
}

createDummyData().catch(console.error);