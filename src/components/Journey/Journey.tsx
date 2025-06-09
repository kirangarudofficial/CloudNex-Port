import React from 'react';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'career' | 'learning' | 'achievement';
  details: string[];
}

const Journey: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Career Pivot Decision',
      description: 'Made the strategic decision to transition from commercial sector to cloud technology',
      type: 'career',
      details: [
        'Identified cloud computing as the future of technology',
        'Began intensive research into DevOps and AWS careers',
        'Started planning systematic learning approach'
      ]
    },
    {
      year: '2023',
      title: 'AWS & Linux Foundation',
      description: 'Completed comprehensive AWS and Linux training programs',
      type: 'learning',
      details: [
        'AWS Cloud Practitioner and Solutions Architect study',
        'Linux system administration and command line mastery',
        'Hands-on labs with EC2, S3, VPC, and core services'
      ]
    },
    {
      year: '2024',
      title: 'DevOps Methodology Mastery',
      description: 'Deep dive into DevOps tools, practices, and automation',
      type: 'learning',
      details: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code with Terraform and CloudFormation',
        'Container orchestration with Docker and Kubernetes'
      ]
    },
    {
      year: '2024',
      title: 'AI Integration Exploration',
      description: 'Explored AI tools and their integration with DevOps workflows',
      type: 'learning',
      details: [
        'Mastered 10+ AI tools for development and automation',
        'Built AI-enhanced monitoring and deployment solutions',
        'Integrated AI into infrastructure management workflows'
      ]
    },
    {
      year: '2024',
      title: '20+ Projects Deployed',
      description: 'Achieved milestone of deploying 20+ real-world projects on AWS',
      type: 'achievement',
      details: [
        'Multi-tier web applications with auto-scaling',
        'Serverless architectures using Lambda and API Gateway',
        'Complete CI/CD pipelines with monitoring and alerting'
      ]
    },
    {
      year: '2025',
      title: 'Professional DevOps Ready',
      description: 'Ready to contribute to forward-thinking organizations as a DevOps Engineer',
      type: 'career',
      details: [
        'Comprehensive skill set in cloud architecture and automation',
        'Proven track record of successful project deliveries',
        'Fresh perspective with modern, cloud-native approaches'
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'career': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      case 'learning': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'achievement': return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From commercial background to cloud expertise - a transformation driven by passion and dedication
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full ${getIconColor(event.type)} flex items-center justify-center`}>
                  {event.type === 'career' && <MapPin className="h-4 w-4" />}
                  {event.type === 'learning' && <Calendar className="h-4 w-4" />}
                  {event.type === 'achievement' && <Award className="h-4 w-4" />}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-1/2' : 'md:pl-8 md:ml-1/2'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {event.description}
                    </p>

                    <ul className="space-y-2">
                      {event.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;