"use client";

import { portfolioData } from '@/lib/data';

const AboutSection = () => {
  const { personal, education, researchInterests } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {personal.bio}
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="text-blue-600 font-bold">
                      {edu.percentage}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-3">Key Achievement</h4>
              <p className="text-blue-100">
                Qualified for Assistant Professor and Ph.D. with{' '}
                <span className="font-bold text-white">98.47 percentile</span>{' '}
                (179.49/300 marks) in Commerce
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">98.47</div>
              <span className="block">Percentile Score In</span>
              <span className="block">UGC-NET</span>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;