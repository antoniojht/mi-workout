import Link from "next/link";
import { fetchUserRoutines } from "@/app/lib/data";
import EditIcon from "@/app/components/svg/edit";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default async function Workout() {
  const workouts = await fetchUserRoutines();
  return (
    <>
      {workouts.map((workout) => (
        <Card key={workout.id} className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <p className="font-bold">{workout.name}</p>
            <Link href={`/workouts/${workout.id}`}>
              <EditIcon />
            </Link>
          </CardHeader>
          <CardBody>
            <ul>
              {workout.group.map((day) => (
                <li key={day.name} className="flex gap-2">
                  <div>
                    <p className="font-medium">{day.name}</p>
                    <p className="text-[#71717A]">
                      {day.exercises.length} ejercicios
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter>
            <Button className="bg-[#18181B] text-white w-full rounded">
              Empezar rutina
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
