import Link from "next/link";
import { fetchUserRoutines } from "@/app/lib/data";
import EditIcon from "@/app/components/svg/edit";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import AccordionWrapper from "@/app/components/accordion";

export default async function Workout() {
  const workouts = await fetchUserRoutines();
  return (
    <>
      {workouts.map((workout) => (
        <Card key={workout.id} className="max-w-[400px] mb-4">
          <CardHeader className="flex gap-3 justify-between">
            <p className="font-bold">{workout.name}</p>
            <Link href={`/routines/edit/${workout.id}`}>
              <EditIcon />
            </Link>
          </CardHeader>
          <CardBody></CardBody>
          {workout.group.map((day) => {
            return (
              <AccordionWrapper key={day.name} title={day.name}>
                <ul className="list-disc ml-8 text-[#71717A]">
                  {day.exercises.map((exercise) => {
                    return (
                      <li key={exercise.name}>
                        {exercise.name} ({exercise.sets}x{exercise.reps})
                      </li>
                    );
                  })}
                </ul>
                <Button className="bg-[#18181B] text-white w-full rounded mt-8">
                  <Link href={`workout/${workout.id}/${day.name}`}>
                    Empezar rutina
                  </Link>
                </Button>
              </AccordionWrapper>
            );
          })}
        </Card>
      ))}
    </>
  );
}
