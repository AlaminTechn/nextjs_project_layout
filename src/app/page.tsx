import Image from "next/image";

type Todo ={
  toDoID:string;
  toDoDescription:string;
  toDoCategory:string;
}

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h3 className="text-4xl">Next.js Project Demo </h3>

    </main>
  );
}
