import mongoose from "mongoose";
import config from "config";

mongoose.set("strictQuery", false);
//mongoose.set("strictQuery", true);

//Logger
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (e) {
    Logger.error("Não foi possivel conectar!");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
