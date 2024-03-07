import {useId} from "react";

export type Todo = {
  toDoID: string;
  toDoDescription: string;
  toDoCategory: string;
}


export interface Values {
  path1: string;
  path2: string;
  path3: string;
}

export interface Objects {
  name: string;
  values: Values;
}



