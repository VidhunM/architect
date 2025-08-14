import React, { useState } from 'react';
import { motion } from 'framer-motion';

type TeamMember = {
  name: string;
  title: string;
  image: string;
  details?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'MR SHAKTHIVEL',
    title: 'CEO, Architect',
    image: '/images/ceo.png',
    details: 'CEO and lead architect with 20+ years of experience.',
  },
  {
    name: 'Ms. NIDHI',
    title: 'Managing Director, Architect',
    image: '/images/team/Picture1.png',
    details: 'Managing Director and architect.',
  },
  {
    name: 'Mr.ELAYARAJ',
    title: 'Construction Head',
    image: '/images/team/Picture2.png',
    details: 'Head of construction operations.',
  },
  {
    name: 'Mr. RAJASEKARAN',
    title: 'Projects Head',
    image: '/images/team/Picture3.png',
    details: 'Oversees all projects.',
  },
  {
    name: 'Ms. KANISHKA',
    title: 'Design Head',
    image: '/images/team/Picture4.png',
    details: 'Head of design team.',
  },
  {
    name: 'MR.RAGHAVAN',
    title: 'Business Development Manager',
    image: '',
    details: 'Manages business development.',
  },
  {
    name: 'Ms. MONICA',
    title: 'Sales Head',
    image: '',
    details: 'Leads the sales team.',
  },
  {
    name: 'Mr. AKASH',
    title: 'CRM',
    image: '',
    details: 'Customer relationship manager.',
  },
];

const OurTeam = () => {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            OUR TEAM
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"
          />
          
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-semibold text-blue-900 mb-4"
          >
            Meet our dedicated professionals
          </motion.h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setSelected(member)}
            >
              <motion.div 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-4 border-4 border-blue-100 group-hover:border-blue-400 transition shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${idx === 0 ? 'object-center' : 'object-top'}`}
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                )}
              </motion.div>
              <motion.div 
                className="text-center px-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
              >
                <h3 className="font-semibold text-lg text-gray-800 leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 leading-snug whitespace-normal break-words mt-1 uppercase">
                  {member.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-lg"
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4 flex items-center justify-center">
                  {selected.image ? (
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-1">{selected.name}</h3>
                <p className="text-gray-600 mb-2 uppercase">{selected.title}</p>
                {selected.details && (
                  <p className="text-gray-700 text-center">{selected.details}</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;
