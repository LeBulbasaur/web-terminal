export default function GetPath(state) {
  const path = [];
  let currentDirectory = state.currentDirectory;
  while (currentDirectory !== 0) {
    const parent = state.files.find((element) => {
      return element.id === currentDirectory;
    });
    path.push("/" + parent.name);
    currentDirectory = parent.parentId;
  }
  return path.reverse().join("");
}
