import type { INode } from "../types/file-types";

const DATA: Map<string, INode> = new Map([
  [
    "root",
    {
      id: "root",
      type: "directory",
      name: "src",
      children: ["index.tsx", "components", "types"],
    },
  ],
  [
    "index.tsx",
    {
      id: "index.tsx",
      type: "file",
      name: "index.tsx",
    },
  ],
  [
    "components",
    {
      id: "components",
      type: "directory",
      name: "components",
      children: ["button.tsx"],
    },
  ],
  [
    "button.tsx",
    {
      id: "button.tsx",
      type: "file",
      name: "button.tsx",
    },
  ],
  [
    "types",
    {
      id: "types",
      type: "directory",
      name: "types",
      children: ["file-types.tsx", "other-types.tsx"],
    },
  ],
  [
    "file-types.tsx",
    {
      id: "file-types.tsx",
      type: "file",
      name: "file-types.tsx",
    },
  ],
  [
    "other-types.tsx",
    {
      id: "other-types.tsx",
      type: "file",
      name: "other-types.tsx",
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
