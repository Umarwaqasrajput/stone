import MachineryCard from "../components/MachineryCard";

const machineryData = [
  {
    title: "Stone Crusher Machine",
    image: "1.jpg",
    description: "High power crushing machine used to break stones into small pieces.",
  },
  {
    title: "Loader",
    image: "2.jpg",
    description: "Used for loading stones and materials into trolleys and trucks.",
  },
  {
    title: "Tractor",
    image: "3.jpg",
    description: "Carries crushed stones from plant to delivery points.",
  },
  {
    title: "Conveyor Belt",
    image: "4.jpg",
    description: "Moves stones automatically from crusher to loading area.",
  },
  {
    title: "Excavator",
    image: "5.jpg",
    description: "Used for digging and moving heavy stones efficiently.",
  },
];

export default function MachineryPage() {
  return (
    <section className="py-16 px-8 bg-black">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Heavy Machinery
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 container mx-auto">
        {machineryData.map((item, i) => (
          <MachineryCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
