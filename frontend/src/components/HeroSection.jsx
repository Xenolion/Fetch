import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Smartphone, Download, Apple, CheckCircle, Star, MessageCircle } from 'lucide-react';
import { mockData, mockWaitlistSignup } from '../mock';
import { useToast } from '../hooks/use-toast';

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePlayStoreClick = () => {
    window.open(mockData.app.playStoreUrl, '_blank');
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await mockWaitlistSignup(phoneNumber);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        setPhoneNumber('');
        setIsWaitlistOpen(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
                <span className="text-green-600 font-semibold">WhatsApp Integration</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {mockData.app.tagline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {mockData.app.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {mockData.app.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Feature Highlight */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-2">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Share to WhatsApp Groups</h3>
                  <p className="text-green-700 text-sm">
                    Send contribution requests and payment updates directly to your WhatsApp groups with one tap. 
                    Keep everyone informed and engaged throughout the planning process.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div id="download" className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handlePlayStoreClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="h-6 w-6 mr-3" />
                Get on Play Store
              </Button>
              <Button 
                onClick={() => setIsWaitlistOpen(true)}
                variant="outline"
                className="border-2 border-green-300 hover:border-green-600 hover:bg-green-50 text-gray-700 hover:text-green-600 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Apple className="h-6 w-6 mr-3" />
                Join iOS Waitlist
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockData.stats.activeUsers}</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockData.stats.eventsManaged}</div>
                <div className="text-sm text-gray-600">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockData.stats.totalContributions}</div>
                <div className="text-sm text-gray-600">Total Contributions</div>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <div className="text-sm font-semibold text-gray-800">Michango</div>
                    </div>
                    <div className="flex space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-600">Wedding Planning</div>
                          <div className="text-sm font-semibold">$1,250 collected</div>
                        </div>
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-green-600">Birthday Party</div>
                          <div className="text-sm font-semibold text-green-800">$380 collected</div>
                        </div>
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-emerald-600">Group Trip</div>
                          <div className="text-sm font-semibold text-emerald-800">$2,100 collected</div>
                        </div>
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Join iOS Waitlist</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <div className="text-center text-gray-600">
              Be the first to know when Michango launches on the App Store!
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                type="tel"
                placeholder="+254 700 123 456"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-center"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? 'Adding to Waitlist...' : 'Join Waitlist'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;