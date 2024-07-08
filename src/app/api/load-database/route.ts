import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'database.tsv');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const requiredColumns = [
      'product', 'category', 'country', 'packaging', 'sampleSize', 'summary',
      'compounds', 'phthalates', 'phthalate_substitutes', 'bisphenols', 'author', 'title', 'published', 'reporting', 'dbp', 'bbp',
      'dehp', 'dinp', 'didp', 'dmp', 'dep', 'dibp', 'dnhp', 'dchp', 'dnop',
      'dida', 'deha', 'dinch', 'deht', 'bpa', 'bps', 'bpf', 'serving', 'notes'
    ];

    const records = parse(fileContent, {
      delimiter: '\t',
      from_line: 3,
      skip_empty_lines: true,
    });

    const data = records.map((record: string[]) => {
      let processedRecord: any = {};
      requiredColumns.forEach((column, index) => {
        if (index < record.length) {
          const value = record[index];
          processedRecord[column] = value || null;
        } else {
          processedRecord[column] = null;
        }
      });
      return processedRecord;
    });

    console.log('First 5 rows of data:');
    console.log(JSON.stringify(data.slice(0, 5), null, 2));

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: `Failed to fetch data: ${error.message}` }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}