
import { db } from '@vercel/postgres';
import { users, routineMaster, routines, exercises, routineExercise, routineExerciseMaster, workout } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedRoutineMaster() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS routine_master (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedRoutineMaster = await Promise.all(
    routineMaster.map(
      (routine) => client.sql`
        INSERT INTO routine_master (id, name)
        VALUES (${routine.id}, ${routine.name})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedRoutineMaster;
}

async function seedRoutine() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS routine (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      user_id UUID NOT NULL,
      routine_master_id UUID
    );
  `;

  const insertedRoutine = await Promise.all(
    routines.map(
      (routine) => client.sql`
        INSERT INTO routine (id, name, user_id, routine_master_id)
        VALUES (${routine.id}, ${routine.name}, ${routine.user_id}, ${routine.routine_master_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedRoutine;
}

async function seedExercise() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS exercise (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      user_id UUID
    );
  `;

  const insertedExercise = await Promise.all(
    exercises.map(
      (exercise) => client.sql`
        INSERT INTO exercise (id, name, user_id)
        VALUES (${exercise.id}, ${exercise.name}, ${exercise.user_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedExercise;
}

async function seedRoutineExercise() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS routine_exercise (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      routine_id UUID NOT NULL,
      exercise_id UUID NOT NULL,
      order_exercise INT NOT NULL,
      sets INT NOT NULL,
      reps VARCHAR(255) NOT NULL,
      timer INT NOT NULL,
      previous VARCHAR(255),
      group_name TEXT,
      notes VARCHAR(255) 
    );
  `;

  const insertedExercise = await Promise.all(
    routineExercise.map(
      (routineExerc) => client.sql`
        INSERT INTO routine_exercise (id, routine_id, exercise_id, order_exercise, sets, reps, timer, previous, group_name, notes)
        VALUES (${routineExerc.id}, ${routineExerc.routine_id}, ${routineExerc.exercise_id}, ${routineExerc.order}, ${routineExerc.sets}, ${routineExerc.reps}, ${routineExerc.timer}, ${routineExerc.prev}, ${routineExerc.group_name}, ${routineExerc.notes})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedExercise;
}

async function seedRoutineExerciseMaster() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS routine_exercise_master (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      routine_master_id UUID NOT NULL,
      exercise_id UUID NOT NULL,
      order_exercise INT NOT NULL,
      sets INT NOT NULL,
      reps VARCHAR(255) NOT NULL,
      group_name TEXT,
      timer INT NOT NULL
    );
  `;

  const insertedExercise = await Promise.all(
    routineExerciseMaster.map(
      (routine) => client.sql`
        INSERT INTO routine_exercise_master (id, routine_master_id, exercise_id, order_exercise, sets, reps, group_name, timer)
        VALUES (${routine.id}, ${routine.routine_master_id}, ${routine.exercise_id}, ${routine.order}, ${routine.sets}, ${routine.reps}, ${routine.group_name}, ${routine.timer})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedExercise;
}

async function seedWorkout() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS workout (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      routine_id UUID NOT NULL,
      user_id UUID NOT NULL,
      total_time INT NOT NULL
    );
  `;

  const insertedWorkouts = await Promise.all(
    workout.map(
      (exercise) => client.sql`
        INSERT INTO workout (id, routine_id, user_id, total_time)
        VALUES (${exercise.id}, ${exercise.routine_id}, ${exercise.user_id}, ${exercise.total_time})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedWorkouts;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedRoutineMaster();
    await seedRoutine();
    await seedExercise();
    await seedRoutineExercise();
    await seedRoutineExerciseMaster();
    await seedWorkout();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
