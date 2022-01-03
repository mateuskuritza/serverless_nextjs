import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
	if (cachedDb) {
		return cachedDb;
	}

	const client = await MongoClient.connect(uri);

	const dbName = "urls";

	const db = client.db(dbName);

	cachedDb = db;

	return db;
}

export default async function getUrl(request: VercelRequest, response: VercelResponse) {
	try {
		const db = await connectToDatabase(String(process.env.MONGODB_URI));
		const collection = db.collection("urls");
		const savedUrl = await collection.findOne();
		response.status(200).send(savedUrl);
		response.end();
	} catch (err) {
		console.log(err);
		response.status(500);
		response.end();
	}
}
