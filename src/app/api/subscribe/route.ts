// pages/api/subscribe.ts

import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(process.env.AIRTABLE_BASE_ID as string);
    const existingRecords = await base('Emails').select({ filterByFormula: `email = '${email}'` }).firstPage();
    if (existingRecords.length === 0) {
      await base('Emails').create({ email: email });
    }
    return NextResponse.json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('Error adding email to Airtable:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}