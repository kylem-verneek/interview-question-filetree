export interface File {
  id: string;
  type: "file";
  name: string;
}

export interface Directory {
  id: string;
  type: "directory";
  name: string;
  children: string[]; // file or directory ids
}

export type INode = File | Directory;
