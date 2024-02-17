import Image from "next/image";

type Todo ={
  toDoID:string;
  toDoDescription:string;
  toDoCategory:string;
}


interface values {
  path1:string;
  path2:string;
  path3:string;
}

interface Objects{
  name:string;
  values:values;
}



export default function Home() {

  const objects:Objects = {
    name : "Home",
    values : {
      path1 : "A",
      path2 : "B",
      path3 : "C",
    },
  }

  const {name, ...withoutName}:Pick<Objects, "name"> = objects;

  console.log(withoutName);


  /** 
   * !Hi THis code is awesome 
   * @hello world
   * ? this is awesome code 
   * *better comments using
  */





  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h3 className="text-4xl">Next.js Project Demo</h3>

    </main>
  );
}
