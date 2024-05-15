// api/suggest/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: Request) {
  try {
    const { items, email } = await request.json();

    if (!Array.isArray(items)) {
      return NextResponse.json(
        { error: 'Items must be an array' },
        { status: 400 }
      );
    }

    const filteredItems = items.filter((item: string) => item.trim() !== '');

    if (filteredItems.length === 0) {
      return NextResponse.json(
        { error: 'Items array cannot be empty' },
        { status: 400 }
      );
    }

    if (filteredItems.length > 5) {
      return NextResponse.json(
        { error: 'Items array cannot have more than 5 elements' },
        { status: 400 }
      );
    }

    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
      process.env.AIRTABLE_BASE_ID as string
    );

    const createPromises = filteredItems.map((item: string) => {
      const fields: { item: string; email?: string } = { item };
      if (email) {
        fields.email = email;
      }
      return base('Requests').create(fields);
    });

    await Promise.all(createPromises);

    return NextResponse.json({ message: 'Items suggested successfully' });
  } catch (error) {
    console.error('Error suggesting items in Airtable:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}