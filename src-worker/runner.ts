import { Doser } from "./doser";

const doser = new Doser(true, 32);
doser.listen("atack", (data) => console.log(data.log));
doser.listen("error", (data) => console.error(data.log));

doser
  .loadHostsFile()
  .then(() => {
    doser.start();
  })
  .catch(() => {
    process.exit(-1);
  });
