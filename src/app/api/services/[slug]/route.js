// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function GET(request, { params }) {
//   const slug = params.slug;

//   const filePath = path.join(
//     process.cwd(),
//     "src/data/services",
//     `${slug}.json`
//   );

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json(
//       {
//         error: "Service not found",
//       },
//       { status: 404 }
//     );
//   }

//   // Read the JSON file
//   const content = fs.readFileSync(filePath, "utf-8");
//   const service = JSON.parse(content);

//   return NextResponse.json({
//     ...service,
//   });
// }
