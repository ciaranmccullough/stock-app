"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const { PORT = 5000 } = process.env;
app_1.app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map