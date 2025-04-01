import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  
  // Validate resume type
  const validTypes = ['web-dev', 'sde', 'product'];
  if (!validTypes.includes(type)) {
    return NextResponse.json({ error: 'Invalid resume type' }, { status: 400 });
  }
  
  try {
    // Map resume types to file paths in public directory
    const resumeFiles = {
      'web-dev': 'web-dev-resume.tsx',
      'sde': 'sde-resume.tsx',
      'product': 'product-resume.tsx'
    };
    
    // Get the file path from public directory
    const filePath = path.join(process.cwd(), 'public', 'resumes', resumeFiles[type]);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log('File not found:', filePath);
      return NextResponse.json({ error: 'Resume file not found' }, { status: 404 });
    }
    
    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create response with appropriate headers
    const response = new NextResponse(fileContent);
    response.headers.set('Content-Type', 'text/plain');
    response.headers.set('Content-Disposition', `attachment; filename=${resumeFiles[type]}`);
    
    return response;
  } catch (error) {
    console.error('Error downloading resume:', error);
    return NextResponse.json({ error: 'Failed to download resume' }, { status: 500 });
  }
}
