import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: Request) {
  // Log the environment variables to ensure they are set correctly
  console.log("Airtable API Key:", process.env.AIRTABLE_PAT_HEREE);
  console.log("Airtable Base ID:", process.env.AIRTABLE_BASE_ID);

  try {
    const { email } = await request.json();
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT_HEREE }).base(process.env.AIRTABLE_BASE_ID as string);
    const existingRecords = await base('Emails').select({ filterByFormula: `email = '${email}'` }).firstPage();
    
    if (existingRecords.length === 0) {
      await base('Emails').create({ email: email });
    }
    
    return NextResponse.json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('Error adding email to Airtable:', error);
    return NextResponse.json({ error: 'Failed to add email' }, { status: 500 }); // Return JSON error response
  }
}
