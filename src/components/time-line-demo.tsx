import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/magicui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Byte Battles: Clash of Coders",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A team based competition that test your skills in Data Structures and Algorithms and Competitive Programming. Compete with your peers in two rounds and climb up the leaderboard to win exciting prizes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDm5AaTLubMuabgzcHs34kod5XUn96BOVeAPyiq"
              alt="Club Foundation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmgJklmmAGL2N6WDqUzyYnkSohZEwQMbi8R4t1"
              alt="Inauguration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "BizClash",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            BizClash is a dynamic business competition designed to challenge participants' analytical and entrepreneurial skills. The event consists of two engaging rounds:
1.	Online Quiz Round: A business-themed quiz testing participants' knowledge in areas such as marketing, finance, and management.
2.	Scenario Pitch Round: Shortlisted teams are presented with a business scenario and must develop and pitch a solution, demonstrating their strategic thinking and problem-solving abilities.
</p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmWs4epjV1f5EGSyPO6ITwZu3n2drzCotsHBkg"
              alt="Workshop"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDma8CbBCtJwEGiCtToKBv85zkngYP9S0DNQcAR"
              alt="Participants"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "LaTeX Workshop",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This workshop introduces participants to LaTeX, a powerful typesetting system widely used for creating professional-quality documents, particularly in academia and research. The session is designed to provide hands-on experience with LaTeX, enabling attendees to produce well-structured reports, research papers, resumes, presentations, and more.
            </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmFgE8A0uSiFow63AmOpWbr2dS8HC9EyUYPnsj"
              alt="Workshop"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmteUeqayxKD5CbhnNyHFBZJ2AOg6EMmqSl9Ys"
              alt="Participants"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "GitHub Workshop",
    //   id:4,
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //         This workshop is designed to introduce participants to the fundamentals of Git and GitHub, essential tools for modern software development and version control. Whether you are a beginner or have some experience with version control, this workshop will help you understand and use these tools effectively in collaborative and personal projects.
    //         </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmuSNOvW5sXqBcL5JZWSwTAVrjKlC8Px26vYk9"
    //           alt="Workshop"
    //           width={500}
    //           height={500}
    //           unoptimized
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmM4HtZoNTW7KPBDzuvxaNGEL3A8bHqI2wR5Ui"
    //           alt="Participants"
    //           width={500}
    //           height={500}
    //           unoptimized
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: "FunWin",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //         This event  is the ultimate game challenge where participants has to compete through 3 exciting rounds of mind-bending puzzles and games. It can be played in team of 1-4 and the teams will be selected based on the elimination.
    //         </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmDKCYcN56Sn7vXwHKGguFEtJh8mY4oV0iqA1s"
    //           alt="Workshop"
    //           width={500}
    //           height={500}
    //           unoptimized
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmmNEz9eOXKrGinVW30XZcqoDxLIt4s2bPplRO"
    //           alt="Participants"
    //           width={500}
    //           height={500}
    //           unoptimized
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Recent Activities - 2025",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         A quick look at our recent activities and achievements.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Launched our official website.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Conducted a hackathon with over 100 participants.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Started a mentorship program for junior students.
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Collaborated with other clubs for a tech fest.
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://via.placeholder.com/500x500"
    //           alt="Hackathon"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://via.placeholder.com/500x500"
    //           alt="Mentorship Program"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      <Timeline
        data={data.map((item) => ({
          ...item,
          key: item.title, // ✅ ensures each child has a unique key
        }))}
      />
    </div>
  );
}