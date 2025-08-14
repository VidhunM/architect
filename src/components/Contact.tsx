
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby544OZN_80wWvADB4m6c61o_du-s0jGh-X5gatAFK73CRbJRudrotc2D2VcQVUMq8v/exec",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Let's Create Something <span className="text-red-600">Amazing</span>
          </h2>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with us today for a free
            consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-blue-900 leading-relaxed mb-8">
                We're here to help you create the perfect space. Whether you
                have a specific vision or need guidance on where to start, our
                team of experts is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                  <p className="text-blue-900">+91 99624 57539</p>
                  <p className="text-sm text-blue-900">Mon-Fri 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                  <p className="text-blue-900">info@thearchitecturefirm.in</p>
                  <p className="text-sm text-blue-900">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Office</h4>
                  <p className="text-blue-900">
                    W-126, 3rd Floor, 3rd Ave, <br />
                    Anna Nagar, Chennai, Tamil Nadu 60004
                  </p>
                  <p className="text-sm text-blue-900">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Hours</h4>
                  <p className="text-blue-900">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-blue-900">Saturday: 10AM - 4PM</p>
                  <p className="text-blue-900">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Start Your Project
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  Thank you!
                </h4>
                <p className="text-blue-900">
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-blue-900 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-blue-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-blue-900 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-blue-900 mb-2"
                    >
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="hospitality">Hospitality Design</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="renovation">Full Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-blue-900 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-blue-900 border border-blue-900 py-4 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl font-semibold"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;