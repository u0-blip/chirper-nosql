import { Schema, model } from 'mongoose';

// Define the user schema
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String },
});

// Define the tweet schema
const tweetSchema = new Schema({
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    retweets: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
});

// Define the relationship schema
const relationshipSchema = new Schema({
    follower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    following: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Define the user model
const User = model('User', userSchema);

// Define the tweet model
const Tweet = model('Tweet', tweetSchema);

// Define the relationship model
const Relationship = model('Relationship', relationshipSchema);

export { User, Tweet, Relationship };