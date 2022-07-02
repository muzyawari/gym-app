import Tab from "../components/Tab";

const tabs = [
  { name: "My Account", href: "#", current: false },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: true },
  { name: "Billing", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home({ folders }) {
  return (
    <div className="mt-5">
      <Tab folders={folders} />
      <div className="block h-full w-full">fasdf</div>
    </div>
  );
}
