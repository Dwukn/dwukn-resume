
// pages/resumes/[type].tsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowDownToLine } from 'lucide-react';

export default function ResumePage() {
  const router = useRouter();
  const { type } = router.query;

  // This would be replaced with actual data fetching in a real implementation
  const getResumeTitle = () => {
    switch(type) {
      case 'web-dev': return 'Web Developer';
      case 'sde': return 'Software Development Engineer';
      case 'product': return 'Product Manager';
      default: return 'Resume';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{getResumeTitle()} Resume | Your Name</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-8">
                <ArrowLeft size={20} className="mr-2" />
                Back to all resumes
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">{getResumeTitle()} Resume</h1>
            </div>
            <a
              href={`/api/download?type=${type}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center"
            >
              <ArrowDownToLine size={18} className="mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          {/* This would be replaced with the actual resume content */}
          <div className="prose max-w-none">
            <h2>Your Name</h2>
            <p className="text-gray-600">your.email@example.com • (123) 456-7890 • City, State</p>

            <h3 className="mt-8">Summary</h3>
            <p>This would be your professional summary tailored to the {getResumeTitle()} role.</p>

            <h3 className="mt-8">Experience</h3>
            <div className="mb-6">
              <h4 className="mb-1">Company Name - Role</h4>
              <p className="text-gray-600 text-sm">Jan 2022 - Present</p>
              <ul className="mt-2">
                <li>Accomplishment 1</li>
                <li>Accomplishment 2</li>
                <li>Accomplishment 3</li>
              </ul>
            </div>

            {/* More resume content would go here */}
          </div>
        </div>
      </main>
    </div>
  );
}
