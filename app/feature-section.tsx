import { Button } from "@/components/ui/button";
import { FC } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description, imageUrl, isImageLeft }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
    {isImageLeft && (
      <div className="order-1 md:order-1">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
    <div className={`order-2 ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
      <h3 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h3>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      {/* <div className="mt-4">
        <Button variant="secondary">Learn more</Button>
      </div> */}
    </div>
    {!isImageLeft && (
      <div className="order-1 md:order-2">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
  </div>
);

const DEFAULT_ITEMS: FeatureItemProps[] = [
  // {
  //   title: "Contextual Legal Intelligence",
  //   description: "Advanced natural language processing understands legal concepts, not just keyword matching. Search 'contract breach remedies' and discover comprehensive case law analysis across Indian jurisdictions.",
  //   imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
  //   isImageLeft: true,
  // },
  {
    title: "Supreme Court & High Court Analysis",
    description:
      "Detailed judicial reasoning breakdowns from Supreme Court of India and all High Courts. Understand precedent patterns and legal evolution through AI-powered case study generation.",
    imageUrl: "/law-angel.avif",
    isImageLeft: true,
  },
  {
    title: "9 Indian Languages + 40 International Languages",
    description:
      "Legal research in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi and 40+ global languages. Breaking language barriers in Indian legal practice.",
    imageUrl: "/language.jpg",
    isImageLeft: false,
  },
  // {
  //   title: "Historical Legal Evolution Tracking",
  //   description:
  //     "Filter legal precedents by time periods. Track how Indian legal interpretations evolved from colonial law to modern constitutional jurisprudence.",
  //   imageUrl: "/tally.jpg",
  //   isImageLeft: false,
  // },
  {
    title: "Multi-Court Pattern Recognition",
    description:
    "AI identifies patterns across Supreme Court and High Court judgments. Compare similar cases across different Indian jurisdictions for comprehensive legal strategy.",
    imageUrl: "/pattern.avif",
    isImageLeft: true,
  },
  {
    title: "Zero Hallucination Legal AI",
    description:
    "Every response sourced from verified Indian legal databases. No artificial legal advice - only authenticated case law, statutes, and regulatory citations.",
    imageUrl: "/hallucination.avif",
    isImageLeft: false,
  }
];

interface FeatureSectionProps {
  items?: FeatureItemProps[];
  brand?: string;
  title?: string;
  description?: string;
}

export const FeatureSection: FC<FeatureSectionProps> = (props) => {
  const {
    items = DEFAULT_ITEMS,
    brand = "LexRam",
    title = "LexRam",
    description = "LexRam.ai revolutionizes legal research in India with artificial intelligence that delivers verified responses from authenticated Indian legal sources. No hallucination - only accurate legal intelligence from Supreme Court judgments, High Court decisions, and statutory provisions.",
  } = props;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        {/* <div className="text-base font-semibold leading-7 text-primary">{brand}</div> */}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">{title}</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
      <div className="mt-8 flex flex-col gap-16">
        {items.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
