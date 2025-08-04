import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Roovexo transformed our outdated website into a modern masterpiece. The attention to detail and technical expertise exceeded our expectations. Our conversion rate increased by 300% within the first month!'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoShop',
      company: 'EcoShop',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      text: 'The e-commerce platform Roovexo built for us is incredible. The user experience is seamless, and the admin dashboard makes managing our inventory effortless. Sales have doubled since launch!'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Creative Director, ArtStudio',
      company: 'ArtStudio',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Roovexo was a dream. They understood our creative vision perfectly and delivered a portfolio website that truly represents our brand. The animations and interactions are stunning!'
    },
    {
      name: 'David Thompson',
      position: 'Marketing Manager, FitLife',
      company: 'FitLife Gym',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      text: 'The progressive web app Roovexo created for our gym members is fantastic. It works perfectly on all devices and the offline functionality is a game-changer. Highly recommended!'
    },
    {
      name: 'Lisa Wang',
      position: 'Startup Founder, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Roovexo delivered our SaaS platform ahead of schedule and under budget. The code quality is exceptional, and the user interface is intuitive. Our users love the experience!'
    },
    {
      name: 'James Wilson',
      position: 'Restaurant Owner, Bella Vista',
      company: 'Bella Vista Restaurant',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The restaurant website and online ordering system Roovexo built has revolutionized our business. Online orders increased by 400% and the reservation system works flawlessly!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Roovexo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-2xl p-8 hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 mb-4 opacity-20" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
    <Star key={i} className="w-5 h-5 text-yellow-400 group-hover:fill-white group-hover:text-white" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 leading-relaxed italic opacity-80">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm opacity-80">{testimonial.position}</div>
                  <div className="text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600 text-sm">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">150+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">24h</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;