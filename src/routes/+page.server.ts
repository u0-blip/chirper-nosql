import { Tweet } from '../util/schemas';
import { connectToDatabase } from '../util/connect';

export async function load() {
    await connectToDatabase();
    const tweets = await Tweet.find();
    // json serialize tweets
    const tweets_json = JSON.stringify(tweets);
    return {
        tweets: JSON.parse(tweets_json),
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        await connectToDatabase();
        const tweet = new Tweet({
            text: data.get('text'),
            author: data.get('author'),
        });
        await tweet.save();
    },

    delete: async ({ request }) => {
        await connectToDatabase();
        const data = await request.formData();

        const tweet = await Tweet.findByIdAndDelete(data.get('id'));
        if (!tweet) {
            throw new Error('Tweet not found');
        }
    },

    update: async ({ request }) => {
        await connectToDatabase();
        const data = await request.formData();

        const tweet = await Tweet.findByIdAndUpdate(data.get('id'), {
            text: data.get('text'),
        });
        if (!tweet) {
            throw new Error('Tweet not found');
        }
    },
};