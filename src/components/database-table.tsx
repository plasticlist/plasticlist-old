import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const seafoodData = [
  {
    product: "Basa", category: "Fish", country: "Canada", packaging: "Packaged", sampleSize: 4,
    phthalates: 10032, substitutes: 20708, bisphenols: 2100,
    dbp: 3.62, dehp: 3.16, dinp: 28.3, dep: 31.8,
    dida: 0, deha: 136, dinch: 2.05, bpa: 0, bps: 14.0
  },
  {
    category: "Basa", country: "Canada", packaging: "Non-packaged", sampleSize: 2,
    phthalates: 8558, substitutes: 22554, bisphenols: 1740,
    dbp: 21.2, dehp: 8.70, dinp: 1.95, dep: 25.2,
    dida: 0, deha: 148, dinch: 2.36, bpa: 0, bps: 11.6
  },
  // ... Add the rest of the data here
];

export function DatabaseTable() {
  return (
    <div className="mx-auto my-10 overflow-x-auto border border-gray-700">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-700 border border-gray-700">Product</TableHead>
            <TableHead className="text-gray-700 border border-gray-700">Category</TableHead>
            <TableHead className="text-gray-700 border border-gray-700">Country</TableHead>
            <TableHead className="text-gray-700 border border-gray-700">Reported packaging</TableHead>
            <TableHead className="bg-blue-200 text-gray-700 border border-gray-700">Sample size (n)</TableHead>
            <TableHead className="text-gray-700 border border-gray-700">Findings (ng/serving)</TableHead>
            <TableHead className="text-gray-700 border border-gray-700">Analytes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seafoodData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-gray-700 border border-gray-700">{item.product}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.category}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.country}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.packaging}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.sampleSize}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.phthalates}</TableCell>
              <TableCell className="text-gray-700 border border-gray-700">{item.substitutes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}