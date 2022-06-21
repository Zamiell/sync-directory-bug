import * as path from "path";
import syncDirectory from "sync-directory";

const dir1 = path.join(__dirname, "foo");
const dir2 = path.join(__dirname, "bar");

syncDirectory(dir1, dir2, {
  watch: true,
  type: "copy",
});

console.log("syncing...")
