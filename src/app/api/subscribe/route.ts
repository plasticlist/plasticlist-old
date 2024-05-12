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
    console.error('Error occurred when adding email. Please check server logs for more details.');
    return NextResponse.json({ error: 'Failed to add email' }, { status: 500 });
  }
}
