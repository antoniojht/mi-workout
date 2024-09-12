import AccordionWrapper from "@/app/components/accordion";
import { fetchMasterRoutines } from "@/app/lib/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default async function MasterWorkout() {
  const workouts = await fetchMasterRoutines();

  return (
    <>
      {workouts.map((workout) => (
        <Card key={workout.id} className="max-w-[400px]">
          <CardHeader className="flex gap-3 justify-between">
            <p className="font-bold">{workout.name}</p>
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
              </AccordionWrapper>
            );
          })}
          <CardFooter>
            <Button className="bg-[#18181B] text-white w-full rounded">
              Guardar rutina
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
