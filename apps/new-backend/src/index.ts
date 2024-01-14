import { createServer } from "./server";

const app = createServer();

app.listen(7000, () => {
    console.log("started on 7000 port");
});
