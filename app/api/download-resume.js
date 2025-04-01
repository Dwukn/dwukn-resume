import { NextResponse } from 'next/server';
import { renderToString } from 'react-dom/server';
import ResumePage from '../pages/index'; // Adjust the import according to your file structure

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // Validate resume type
  const validTypes = ['web-dev', 'sde', 'product'];
  if (!validTypes.includes(type)) {
    return NextResponse.json({ error: 'Invalid resume type' }, { status: 400 });
  }

  try {
    // Map resume types to the respective components
    const resumeFiles = {
      'web-dev': 'web-dev-resume.html',
      'sde': 'sde-resume.html',
      'product': 'product-resume.html'
    };

    // Render the page to a string
    const resumeContent = renderToString(<ResumePage />); // Assuming that ResumePage is your index.js component

    // Create a response with HTML content
    const response = new NextResponse(resumeContent);
    response.headers.set('Content-Type', 'text/html');
    response.headers.set('Content-Disposition', `attachment; filename=${resumeFiles[type]}`);

    return response;
  } catch (error) {
    console.error('Error generating resume:', error);
    return NextResponse.json({ error: 'Failed to generate resume' }, { status: 500 });
  }
}
