import React from 'react';
import { Users, MessageCircle, Shield, Zap } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Users,
  MessageCircle,
  Shield,
  Zap
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage group contributions and share seamlessly with WhatsApp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl group-hover:bg-green-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Integration Highlight */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              WhatsApp Integration Made Simple
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Share contribution requests, payment confirmations, and event updates directly to your WhatsApp groups. 
              Keep everyone in the loop with real-time notifications and seamless communication.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-green-600 font-semibold mb-2">1. Create Event</div>
                <div className="text-gray-600 text-sm">Set up your event and contribution goals in seconds</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-green-600 font-semibold mb-2">2. Share to WhatsApp</div>
                <div className="text-gray-600 text-sm">Send contribution requests directly to your group chats</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-green-600 font-semibold mb-2">3. Track Progress</div>
                <div className="text-gray-600 text-sm">Everyone gets real-time updates on contribution progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h3>
            <p className="text-gray-600">
              Join thousands of satisfied users who trust Michango
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockData.testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-green-50 transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
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

export default ServicesSection;