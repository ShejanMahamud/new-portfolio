import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    // Get the resume file path
    const filePath = path.join(
      process.cwd(),
      "private",
      "documents",
      "shejan-mahamud-resume.pdf"
    );

    // Read the file
    const fileBuffer = readFileSync(filePath);

    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename=shejan_mahamud_resume.pdf"',
        "Cache-Control": "public, max-age=31536000", // Cache for 1 year
      },
    });

    return response;
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Resume not found", { status: 404 });
  }
}
