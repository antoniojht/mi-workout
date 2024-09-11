import { Button } from "@nextui-org/button";

import AddIcon from "../components/svg/add";
import StartIcon from "../components/svg/play";
import NavLink from "../components/navlink";

export default function WorkoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      name: "Rutinas",
      href: "/workouts",
    },
    { name: "Planes de entrenamiento", href: "/workouts/master" },
  ];

  return (
    <main>
      <header>
        <h1 className="text-2xl font-bold">Workouts</h1>
        <div className="flex flex-col gap-2">
          <Button
            className="bg-[#18181B] text-white rounded"
            startContent={<AddIcon />}
          >
            Crear rutina
          </Button>
          <Button
            variant="bordered"
            startContent={<StartIcon />}
            className="rounded"
          >
            Empezar rutina vacía
          </Button>
        </div>
      </header>
      <NavLink links={links} />
      {children}
    </main>
  );
}
