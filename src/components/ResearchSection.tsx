"use client";

import { portfolioData } from '@/lib/data';

const ResearchSection = () => {
  const { publications, conferences, awards } = portfolioData;

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Academic contributions in sustainable finance, financial modeling, and agricultural economics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Publications</h3>
            
            {/* Research Papers */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Research Papers
              </h4>
              {publications.papers.map((paper, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-blue-600">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    {paper.title}
                  </h5>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Authors:</strong> {paper.authors}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{paper.year}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      {paper.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Book Chapters */}
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Book Chapters
              </h4>
              {publications.chapters.map((chapter, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-green-600">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    {chapter.title}
                  </h5>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Publication:</strong> {chapter.publication}
                  </p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {chapter.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Conferences */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
            
            {/* Awards */}
            <div className="mb-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg mb-4 border-l-4 border-yellow-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                      <p className="text-gray-700 mb-2">{award.description}</p>
                      <span className="text-sm text-gray-600">{award.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conference Participation */}
            <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Conference Participation
            </h4>
            <div className="space-y-3">
              {conferences.map((conference, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="text-gray-700 font-medium">{conference}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Impact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Research Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">PLS-SEM</div>
              <p className="text-blue-100">Advanced statistical modeling expertise</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">MICMAC</div>
              <p className="text-blue-100">Structural analysis methodology</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">UTAUT</div>
              <p className="text-blue-100">Technology acceptance theory application</p>
            </div>
          </div>
        </div>

        {/* Research Methodology */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Methodologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">MR</span>
              </div>
              <h4 className="font-semibold text-gray-900">Mixed Methods</h4>
              <p className="text-gray-600 text-sm">Quantitative & Qualitative</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">DA</span>
              </div>
              <h4 className="font-semibold text-gray-900">Data Analysis</h4>
              <p className="text-gray-600 text-sm">Statistical Modeling</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">FM</span>
              </div>
              <h4 className="font-semibold text-gray-900">Financial Modeling</h4>
              <p className="text-gray-600 text-sm">Econometric Analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-600 font-bold">LR</span>
              </div>
              <h4 className="font-semibold text-gray-900">Literature Review</h4>
              <p className="text-gray-600 text-sm">Thematic Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;