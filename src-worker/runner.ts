import { Doser } from "./doser";

const workersCount = parseInt(process.env.WORKERS_COUNT, 10) || 32;

console.log("workers count", workersCount);

const doser = new Doser(true, workersCount);
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
