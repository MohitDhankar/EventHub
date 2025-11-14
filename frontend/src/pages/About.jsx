import { Users, Star, Award } from "lucide-react";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card"; 
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">EventHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing people together through exceptional events. Since 2020, we've been the trusted platform for event organizers and attendees worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Events Hosted</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600">Happy Attendees</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At EventHub, we believe that great events have the power to inspire, educate, and bring communities together. Our mission is to make event planning effortless and event discovery exciting.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're organizing a small workshop or a large conference, our platform provides all the tools you need to create memorable experiences that matter.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Join Our Community
            </Button>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community First</h3>
              <p className="text-gray-600">
                We prioritize building strong, inclusive communities where everyone feels welcome and valued.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our platform, from user experience to customer support.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge solutions that make event management easier.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
      <Footer /> 
    </div>
  );
};

export default About;
