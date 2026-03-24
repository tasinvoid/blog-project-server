import app from "./app";
import { prisma } from "./lib/prisma";
const PORT = process.env.PORT || 5000;
async function main() {
  try {
    await prisma.$connect();
    console.log("connected to DB successfully");
    app.listen(PORT, () => {
      console.log(`blog-project-server is running on port : ${PORT}`);
    });
    app.get("/", (req, res) => {
      res.send("blog-project-server is running");
    });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
main();
