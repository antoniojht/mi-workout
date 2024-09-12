// import { sql } from '@vercel/postgres';

import { masterRoutines, routinesUser } from "../mocks/mocks";

export async function fetchMasterRoutines(): Promise<WorkoutPlan> {
  try {
    // mock data
    return new Promise((resolve) => {
      resolve(masterRoutines);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching master routines');
  }
}

export async function fetchUserRoutines(): Promise<UserWorkoutPlan> {
  try {
    // mock data
    return new Promise((resolve) => {
      resolve(routinesUser);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching user routines');
  }
}

export async function fetchRoutineById(id: string, name: string): Promise<UserGroup> {
  try {
    // mock data
    return new Promise((resolve) => {
      const routine = routinesUser.find((routine) => routine.id === id)?.group.find((day) => day.name === name);
        
      resolve(routine!);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching routine by id');
  }
}