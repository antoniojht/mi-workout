/* eslint-disable @typescript-eslint/no-unused-vars */
type Exercise = {
  name: string;
  order: number;
  sets: number;
  reps: string;
  timer: number;
};

type Group = {
  name: string;
  exercises: Exercise[];
};

type Routine = {
  name: string;
  group: Group[];
};

type WorkoutPlan = Routine[];

type UserExercise = Exercise & {
  notes: string;
  previous: string;
};

type UserGroup = {
  name: string;
  exercises: UserExercise[];
};

type UserRoutine = {
  name: string;
  group: UserGroup[];
};

type UserWorkoutPlan = UserRoutine[];
