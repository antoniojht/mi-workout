const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@mail.com',
    password: '123456',
  },
];

const routineMaster = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Torso-Pierna',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Push-Pull',
  },
];

const routines = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Torso-Pierna Personalizado',
    user_id: users[0].id,
    routine_master_id: routineMaster[0].id,
  },
  {
    id: '9ed1bed4-7905-49e5-b30a-57b51f76a053',
    name: 'Hibrido',
    user_id: users[0].id,
    routine_master_id: null,
  }
];



const exercises = [
  {
    id: '93c499f9-8e04-4ac7-acc8-7692f3275fd1',
    name: 'Press de banca',
    user_id: null
  },
  {
    id: 'd494ada7-699e-4bf6-b0b3-43ce5bbbaab5',
    name: 'Sentadillas',
    user_id: null
  },
  {
    id: 'c19eec61-a405-47e9-a855-7ba35634c43a',
    name: 'Dominadas',
    user_id: null
  },
  {
    id: 'eff79221-c8f6-4dc0-aa97-381b3ced2208',
    name: 'Cruce de poleas',
    user_id: users[0].id,
  }
];

const routineExercise = [
  {
    id: '93c499f9-8e04-4ac7-acc8-7692f3275fd1',
    routine_id: routines[0].id,
    group_name: "Torso 1",
    exercise_id: exercises[0].id,
    order: 1,
    sets: 3,
    reps: "10-12",
    timer: 120,
    prev: "",
    notes: "Notas de press de banca"
  },
  {
    id: '09ed158f-bb39-4bbe-b439-4578bb57c9a4',
    routine_id: routines[0].id,
    group_name: "Torso 1",
    exercise_id: exercises[1].id,
    order: 1,
    sets: 3,
    reps: "8-10",
    timer: 120,
    prev: "",
    notes: "Notas de sentadilla"
  },
];

const routineExerciseMaster = [
  {
    id: '09ed158f-bb39-4bbe-b439-4578bb57c9a4',
    routine_master_id: routineMaster[0].id,
    group_name: "Torso 1",
    exercise_id: exercises[1].id,
    order: 1,
    sets: 3,
    reps: "8-10",
    timer: 120
  },
]

const workout = [
  {
    id: 'f73e1c1b-97a2-475a-9b3e-4a96284e456f',
    routine_id: routines[0].id,
    user_id: users[0].id,
    total_time: 3600,
  }
]

export { users, routineMaster, routines, exercises, routineExercise, routineExerciseMaster, workout };
