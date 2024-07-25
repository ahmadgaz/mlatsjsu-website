import { db } from '@vercel/postgres';

async function seed() {
  const client = await db.connect();
}
