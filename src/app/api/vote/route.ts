// api/vote/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: Request) {
  try {
    const { item } = await request.json();

    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
      process.env.AIRTABLE_BASE_ID as string
    );

    const existingRecords = await base('Requests')
      .select({ filterByFormula: `item = '${item}'` })
      .firstPage();

    if (existingRecords.length === 0) {
      await base('Requests').create({ item: item, votes: 1 });
    } else {
      const recordId = existingRecords[0].getId();
      const votes = existingRecords[0].get('votes') as number;
      await base('Requests').update(recordId, { votes: votes + 1 });
    }

    return NextResponse.json({ message: 'Vote recorded successfully' });
  } catch (error) {
    console.error('Error recording vote in Airtable:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}