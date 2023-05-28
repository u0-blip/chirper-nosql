import { Tweet } from '../../util/schemas';
import { connectToDatabase } from '../../util/connect';
import { json } from '@sveltejs/kit';

export async function GET() {
    await connectToDatabase();

    const tweets = await Tweet.find();
    return json(tweets);
}
