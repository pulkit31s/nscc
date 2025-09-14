import { TeamMemberCard } from "./magicui/team-card";

const cardData = [
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmJ1dNffUnBr0q3IThKYjPfkgdx5scUEzpAo9D",
        name: "Krish Kalaria",
        role: "President",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmSnf7FaH0VUvTHOEscRG3BN4xSCe7PrX2p5bD",
        name: "Priyanshu Kumar Jha",
        role: "Treasurer",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmbfMNFfhQxuwWsmihgCKMFE3zTyqvLGaJd40p",
        name: "Vasundhra Sharma",
        role: "Joint Secretory",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmNDizxrvrXMTZBae6hu9jmHQVYW5nqUD1RtO2",
        name: "Pulkit",
        role: "Web Development",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmMe5v3iNTW7KPBDzuvxaNGEL3A8bHqI2wR5Ui",
        name: "Ashrithi",
        role: "UI/UX",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmTVX7VGPbNkZuq0xnpFQcXSrtm2MlBAfgoJdD",
        name: "Aryan",
        role: "Overall Technical Lead",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmr4Q4N1XAQnPxcp37zTsHqK2NeuW8h06iorMO",
        name: "Vishwesh Pal Saini",
        role: "Web Development",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmutRPM2sXqBcL5JZWSwTAVrjKlC8Px26vYk9f",
        name: "Sai Boddapati",
        role: "Competitive Programming",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmgS31yCGL2N6WDqUzyYnkSohZEwQMbi8R4t10",
        name: "Nikhil",
        role: "Design and Content",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmS1LOnEH0VUvTHOEscRG3BN4xSCe7PrX2p5bD",
        name: "Ishita Das",
        role: "Social Media",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmNeYVD1zrvrXMTZBae6hu9jmHQVYW5nqUD1Rt",
        name: "Nishita",
        role: "Marketing",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmpuHJMdCwyoFhAgfUD30HJxrNlwzOqaviXjW6",
        name: "Dheeksha M",
        role: "Management",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
    {
        imageUrl: "https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDm9PdxKS7ofhDm1gkBKrMV58lSA4YO7ZHEUib6",
        name: "Ashwin Shankar",
        role: "Research",
        linkedinUrl: "https://linkedin.com/in/johndoe",
        githubUrl: "https://github.com/johndoe"
    },
];

export const TeamGrid: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Core Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
