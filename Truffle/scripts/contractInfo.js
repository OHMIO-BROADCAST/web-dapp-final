var fs = require("fs");

fs.copyFile(
  "build/contracts/Metacoin.json",
  "../src/contracts/LicenseToken.json",
  (err) => {
    if (err) throw err;
    console.log("✅ Your contract's ABI was copied to the frontend");
  },
);
