import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'database.tsv');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const requiredColumns = [
      'product', 'category', 'country', 'packaging', 'sampleSize', 'levels',
      'compounds', 'author', 'title', 'published', 'reporting', 'dbp', 'bbp',
      'dehp', 'dinp', 'didp', 'dmp', 'dep', 'dibp', 'dnhp', 'dchp', 'dnop',
      'dida', 'deha', 'dinch', 'deht', 'bpa', 'bps', 'bpf', 'serving', 'notes'
    ];

    const records = parse(fileContent, {
      delimiter: '\t',
      from_line: 3,
      skip_empty_lines: true,
    });

    const data = records.map((record: any) => ({
      product: record.product,
      category: record.category,
      country: record.country,
      packaging: record.packaging,
      sampleSize: record.sampleSize ? parseInt(record.sampleSize, 10) || 0 : 0,
      levels: record.levels,
      compounds: record.compounds,
      author: record.author,
      title: record.title,
      published: record.published,
      reporting: record.reporting,
      dbp: record.dbp,
      bbp: record.bbp,
      dehp: record.dehp,
      dinp: record.dinp,
      didp: record.didp,
      dmp: record.dmp,
      dep: record.dep,
      dibp: record.dibp,
      dnhp: record.dnhp,
      dchp: record.dchp,
      dnop: record.dnop,
      dida: record.dida,
      deha: record.deha,
      dinch: record.dinch,
      deht: record.deht,
      bpa: record.bpa,
      bps: record.bps,
      bpf: record.bpf,
      serving: record.serving ? parseInt(record.serving, 10) || 0 : 0,
      notes: record.notes,
    }));

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