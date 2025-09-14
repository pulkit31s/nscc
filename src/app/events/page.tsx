import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

const EventCard = ({
  title,
  description,
  imageUrl,
  date,
  location,
}: {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location: string;
}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
    <div className="relative h-48 w-full">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="text-sm text-gray-500">
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  </div>
);

const EventsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="upcoming-events" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Workshop on React"
              description="A hands-on workshop covering the fundamentals of React."
              imageUrl="https://utfs.io/f/zPjnl6p73EdYGQcRfN9vA5a29fiNJWckwsLzEoPHQgVjUBSM"
              date="October 26, 2025"
              location="Online"
            />
            <EventCard
              title="Competitive Coding Contest"
              description="Test your coding skills against the best."
              imageUrl="https://utfs.io/f/zPjnl6p73EdYGQcRfN9vA5a29fiNJWckwsLzEoPHQgVjUBSM"
              date="November 15, 2025"
              location="VIT Chennai Campus"
            />
            <EventCard
              title="Guest Lecture on AI"
              description="An insightful talk by an industry expert on the future of AI."
              imageUrl="https://utfs.io/f/zPjnl6p73EdYGQcRfN9vA5a29fiNJWckwsLzEoPHQgVjUBSM"
              date="December 5, 2025"
              location="Online"
            />
          </div>
        </section>

        <section id="current-events" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Current Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Hackathon 2025"
              description="A 24-hour hackathon to build innovative solutions."
              imageUrl="https://via.placeholder.com/400x200"
              date="September 20-21, 2025"
              location="VIT Chennai Campus"
            />
          </div>
        </section>

        <section id="past-events">
          <h2 className="text-3xl font-bold mb-6 text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Introduction to Git and GitHub"
              description="A beginner-friendly session on version control."
              imageUrl="https://via.placeholder.com/400x200"
              date="August 10, 2025"
              location="Online"
            />
            <EventCard
              title="Web Development Bootcamp"
              description="A week-long bootcamp on full-stack web development."
              imageUrl="https://via.placeholder.com/400x200"
              date="July 15-22, 2025"
              location="VIT Chennai Campus"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;