import type { INode } from "../types/file-types";

const DATA: Map<string, INode> = new Map([
  [
    "root",
    {
      id: "root",
      type: "directory",
      name: "root",
      children: ["file1", "dir1", "dir2"],
    },
  ],
  [
    "file1",
    {
      id: "file1",
      type: "file",
      name: "file1",
    },
  ],
  [
    "dir1",
    {
      id: "dir1",
      type: "directory",
      name: "dir1",
      children: ["file2"],
    },
  ],
  [
    "file2",
    {
      id: "file2",
      type: "file",
      name: "file2",
    },
  ],
  [
    "dir2",
    {
      id: "dir2",
      type: "directory",
      name: "dir2",
      children: ["file3", "dir4"],
    },
  ],
  [
    "file3",
    {
      id: "file3",
      type: "file",
      name: "file3",
    },
  ],
  [
    "dir4",
    {
      id: "dir4",
      type: "directory",
      name: "dir4",
      children: ["file4"],
    },
  ],
  [
    "file4",
    {
      id: "file4",
      type: "file",
      name: "file4",
    },
  ],
]);
/**
 * Reads an INode which can be a file or a directory.
 * @param id The id of the inode to read. Defaults to "root".
 * @returns The inode with the given id.
 * > DON'T EDIT THIS FUNCTION
 */
export async function readINode(id: string = "root"): Promise<INode> {
  return DATA.get(id) as INode;
}
