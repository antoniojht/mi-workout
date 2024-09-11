import Home from "../components/svg/home";
import Profile from "../components/svg/profile";
import Workout from "../components/svg/workout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-around">
      <Link href="/">
        <Home />
        <span className="sr-only">Home</span>
      </Link>
      <Link href="workout">
        <Workout />
        <span className="sr-only">Rutinas</span>
      </Link>
      <Link href="profile">
        <Profile />
        <span className="sr-only">Perfil</span>
      </Link>
    </footer>
  );
}
