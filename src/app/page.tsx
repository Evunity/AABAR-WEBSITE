"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Heart, 
  MapPin, 
  Brain, 
  MessageSquare, 
  Users, 
  Calendar, 
  Bell, 
  Activity,
  Bus,
  Camera,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  TrendingUp,
  DollarSign,
  Building,
  Home,
  Zap,
  Eye,
  BarChart3,
  HeartHandshake,
  UserCheck,
  Timer,
  Wifi,
  Award,
  Target,
  LineChart,
  Send,
  X
} from 'lucide-react';

const AABAR = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    setShowDemoForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our sales team will contact you soon.');
    setShowDemoForm(false);
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-time Tracking & Safety",
      description: "Live GPS tracking of children and buses with 99.9% accuracy",
      details: ["Live GPS tracking", "QR code boarding system", "Speed monitoring", "Live camera feeds"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Advanced Health Monitoring", 
      description: "24/7 continuous health tracking with AI-powered insights",
      details: ["Non-invasive blood glucose", "Heart rate & SpO2", "Sleep pattern tracking", "Multi-sport capabilities"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Smart insights and predictive health recommendations",
      details: ["Monthly health reports", "Predictive insights", "Personalized recommendations", "AI chatbot assistant"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Seamless Communication",
      description: "Instant connect between parents, teachers, and administrators",
      details: ["Parent-teacher messaging", "Real-time updates", "Emergency notifications", "Multi-language support"]
    }
  ];

  const stats = [
    { label: "Global Market Size", value: "$204.6M", sublabel: "2024" },
    { label: "Projected Growth", value: "8.9%", sublabel: "CAGR" },
    { label: "UAE Families", value: "1.2M", sublabel: "School-age children" },
    { label: "ROI Projection", value: "250%", sublabel: "5-year return" }
  ];

  const pricingPlans = [
    {
      name: "Basic Package",
      type: "B2C",
      features: ["Real-time tracking", "Basic health monitoring", "Communication platform", "Daily reports"],
      popular: false
    },
    {
      name: "Premium Package", 
      type: "B2C",
      features: ["All Basic features", "Advanced health analytics", "AI-powered insights", "Multi-child support"],
      popular: true
    },
    {
      name: "School Package",
      type: "B2B",
      features: ["Unlimited students", "Advanced analytics", "Custom integrations", "Dedicated support"],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "AABAR has transformed how we care for children with special needs. The real-time health monitoring and communication features give us confidence and peace of mind every day.",
      author: "Carolina",
      role: "Parent for Special Need Child, Brazil"
    },
    {
      quote: "As a nursery owner, AABAR has revolutionized our operations. The seamless communication with parents and comprehensive child monitoring makes our caregiving more effective and transparent.",
      author: "Simone",
      role: "Owner of CEI Criarte, Florianópolis, Brazil"
    }
  ];

  const privacyContent = {
    title: "Privacy Policy",
    lastUpdated: "Last updated: January 2025",
    content: [
      {
        heading: "Information We Collect",
        text: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes personal information like names, email addresses, and child-related data necessary for our services."
      },
      {
        heading: "How We Use Your Information", 
        text: "We use the information we collect to provide, maintain, and improve our services, communicate with you, ensure child safety, and comply with legal obligations. Child safety and privacy are our top priorities."
      },
      {
        heading: "Data Security",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All child-related data is encrypted and stored securely."
      },
      {
        heading: "Data Sharing",
        text: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
      },
      {
        heading: "Your Rights",
        text: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights."
      }
    ]
  };

  const termsContent = {
    title: "Terms of Service",
    lastUpdated: "Last updated: January 2025",
    content: [
      {
        heading: "Acceptance of Terms",
        text: "By accessing and using AABAR services, you accept and agree to be bound by the terms and provision of this agreement."
      },
      {
        heading: "Description of Service",
        text: "AABAR provides child care management services including real-time tracking, health monitoring, communication tools, and AI-powered analytics for parents, schools, and care providers."
      },
      {
        heading: "User Responsibilities",
        text: "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to provide accurate and complete information."
      },
      {
        heading: "Child Safety",
        text: "Our services are designed to enhance child safety and well-being. Users must comply with all applicable laws and regulations regarding child protection and data privacy."
      },
      {
        heading: "Limitation of Liability",
        text: "AABAR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
      }
    ]
  };

  const cookieContent = {
    title: "Cookie Policy",
    lastUpdated: "Last updated: January 2025",
    content: [
      {
        heading: "What Are Cookies",
        text: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services."
      },
      {
        heading: "How We Use Cookies",
        text: "We use cookies to analyze website traffic, personalize content, remember your preferences, and ensure security. This helps us improve our services and provide you with relevant information."
      },
      {
        heading: "Types of Cookies We Use",
        text: "Essential cookies (required for basic functionality), Analytics cookies (to understand how you use our site), and Preference cookies (to remember your settings and choices)."
      },
      {
        heading: "Managing Cookies",
        text: "You can control and/or delete cookies as you wish through your browser settings. However, doing so may affect the functionality of our website."
      },
      {
        heading: "Third-Party Cookies",
        text: "We may use third-party services that place cookies on your device. These services have their own privacy policies which we encourage you to review."
      }
    ]
  };

  const renderLegalPage = (content) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      </div>
      
      <nav className="relative z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AABAR
              </span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('home')}
              className="border-purple-400 text-purple-300 hover:bg-purple-500/20"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {content.title}
          </h1>
          <p className="text-gray-400 mb-8">{content.lastUpdated}</p>
          
          <div className="space-y-8">
            {content.content.map((section, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-semibold mb-4 text-white">{section.heading}</h2>
                <p className="text-gray-300 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'privacy') return renderLegalPage(privacyContent);
  if (currentPage === 'terms') return renderLegalPage(termsContent);
  if (currentPage === 'cookies') return renderLegalPage(cookieContent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      <nav className="relative z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AABAR
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}  className="hover:text-purple-300 transition-colors">Features</a>
              <a href="#" onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}  className="hover:text-purple-300 transition-colors">Solutions</a>
              <a href="#"  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}  className="hover:text-purple-300 transition-colors">Pricing</a>
              <Button onClick={handleDemoClick} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 Innovative Child Care Solution
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Enhancing Your Child's
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Safety & Communication
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-driven platform that seamlessly monitors safety, health, and daily activities 
              from home to school and back.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" onClick={handleDemoClick} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} className="border-purple-400 text-purple-300 hover:bg-purple-500/20 text-lg px-8 py-4 rounded-xl">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology meets child care with our comprehensive suite of monitoring and management tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-purple-500 bg-white/10' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-red-400">The Problem</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Child Safety Concerns</h4>
                    <p className="text-gray-300">73% of parents worry about child safety during school transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Communication Gaps</h4>
                    <p className="text-gray-300">45% of schools lack integrated communication systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Health Monitoring Gaps</h4>
                    <p className="text-gray-300">89% of parents want real-time health monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-green-400">Our Solution</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Fleet Management Integration</h4>
                    <p className="text-gray-300">Real-time bus tracking, QR boarding, live camera feeds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Advanced Health Monitoring</h4>
                    <p className="text-gray-300">Non-invasive monitoring with AI-powered recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Seamless Communication</h4>
                    <p className="text-gray-300">Instant messaging, real-time updates, emergency notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Who We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Primary markets for our child care management system
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Educational Institutions</CardTitle>
                <CardDescription className="text-gray-300">Primary B2B Market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400 mb-2">15,000+</div>
                <div className="text-sm text-gray-400">Potential institutions in UAE</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Parents & Families</CardTitle>
                <CardDescription className="text-gray-300">Direct B2C Market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400 mb-2">1.2M</div>
                <div className="text-sm text-gray-400">Families with school-age children</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Government Sector</CardTitle>
                <CardDescription className="text-gray-300">Strategic Partnership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
                <div className="text-sm text-gray-400">UAE education sector budget</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bus className="w-8 h-8" />
                </div>
                <CardTitle className="text-white">Transportation</CardTitle>
                <CardDescription className="text-gray-300">B2B Integration Partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-400 mb-2">35K+</div>
                <div className="text-sm text-gray-400">Emirates Transport vehicles</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Choose Your Package
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the unique needs of families and institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <Badge variant="outline" className="w-fit mx-auto mb-4 border-purple-400 text-purple-300">
                    {plan.type}
                  </Badge>
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="text-lg text-gray-400 mt-4">
                    Contact us for pricing
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleDemoClick}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-purple-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Child Care?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of parents and educators who trust AABAR for comprehensive child care management
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" onClick={handleDemoClick} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 rounded-xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-black/40 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AABAR
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Enhancing child safety and communication through innovative AI-powered solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-3">
                <p className="text-gray-300">Email: info@evunity.co</p>
                <p className="text-gray-300">Website: www.evunity.co</p>
                <p className="text-gray-300">Support: Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 AABAR by Evunity Co. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-purple-300 transition-colors">Privacy Policy</button>
              <button onClick={() => setCurrentPage('terms')} className="text-gray-400 hover:text-purple-300 transition-colors">Terms of Service</button>
              <button onClick={() => setCurrentPage('cookies')} className="text-gray-400 hover:text-purple-300 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {showDemoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Schedule a Demo</h3>
              <button 
                onClick={() => setShowDemoForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Request
              </Button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4 text-center">
              Our sales team will contact you within 24 hours to schedule your personalized demo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AABAR;