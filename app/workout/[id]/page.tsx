import ProgressBarWrapper from "@/app/components/progress";
import Timer from "@/app/components/timer";
import { fetchRoutineById } from "@/app/lib/data";
import { Button, Input, Divider } from "@nextui-org/react";

export default async function WorkoutOverview() {
  const routine = await fetchRoutineById(
    "a00f6bb9-f964-4d6c-805b-60abbbcdff7a",
    "Torso 1"
  );

  return (
    <>
      <h1 className="text-2xl font-bold">{routine.name}</h1>
      <ProgressBarWrapper progress={0} />
      {/* TODO: Controlar el tiempo, las horas, etc... */}
      <h2 className="text-lg font-bold">Tiempo 00:00</h2>
      {/* TODO: Cuando haya comenzado, poner 2 botones: pausar y cancelar */}
      <Button className="bg-[#18181B] text-white w-full rounded">
        Empezar rutina
      </Button>
      <ul>
        {routine.exercises.map((exercise) => {
          return (
            <li key={exercise.name}>
              <h3 className="text-lg font-bol inline">{exercise.name}</h3>
              <p className="text-[#71717A] inline">
                ({exercise.sets}x{exercise.reps})
              </p>
              <div>
                {Array(exercise.sets)
                  .fill(0)
                  .map((set, index) => {
                    return (
                      <div
                        key={set.id}
                        className="grid grid-cols-3 items-center gap-2 col-span-3 mb-4"
                      >
                        <span className="text-[#71717A]">
                          {exercise.previous.split("-")[index]}
                        </span>
                        <Input
                          type="number"
                          placeholder="Peso"
                          className="w-90"
                        />
                        <Input
                          type="number"
                          placeholder="Repeticiones"
                          className="w-90"
                        />
                      </div>
                    );
                  })}
                <div className="flex items-center justify-between">
                  <Timer time={180} />
                  <div className="flex gap-2">
                    <Button className="bg-[#18181B] text-white w-1/2 rounded">
                      Iniciar
                    </Button>
                    <Button
                      className="bg-white w-1/2 rounded"
                      variant="bordered"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
                <Divider className="my-4" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
