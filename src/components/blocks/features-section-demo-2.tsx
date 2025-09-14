import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for Coders",
      description:
        "Whether you’re a beginner or a pro, NSCC is designed for dreamers, builders, and innovators who want to turn ideas into reality.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of Learning",
      description:
        "From hands-on coding sessions to real-world projects, we make learning as simple as typing your first Hello World.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Free & Open for All",
      description:
        "No hidden fees, no paywalls. Just pure coding, collaboration, and community — open to every VITian who wants to grow.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "24/7 Community",
      description: "Our Discord and club network never sleep. Whether it’s 2 PM or 2 AM, you’ll always find someone to discuss bugs, ideas, or startups",
      icon: <IconCloud />,
    },
    {
      title: "Multi-Track Growth",
      description: "Web dev, AI/ML, blockchain, cloud — choose your path, explore all, and build projects that matter.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Mentorship & Guidance",
      description:
        "Learn directly from seniors, alumni, and industry mentors who’ve walked the same path and are ready to guide you.",
      icon: <IconHelp />,
    },
    {
      title: "Hackathons & Competitions",
      description:
        "From intra-college hackathons to international stages, we prep you to code, compete, and conquer.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Beyond",
      description: "We’re not just a coding club — we’re a launchpad for your career, ideas, and lifelong friendships",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
