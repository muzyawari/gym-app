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

export default function Home() {
  return (
    <div className="mt-5">
      <Tab />
      <div className="block h-full w-full		"></div>
    </div>
  );
}
