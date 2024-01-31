const sharp = require("sharp");
const fs = require("fs");

const input = "src/assets/icon.png";

main = async () => {
  const data = await sharp(input).webp({ quality: 10 }).toBuffer();

  fs.writeFileSync("./src/assets/output.webp", data);
};

main();
