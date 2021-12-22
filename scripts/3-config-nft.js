import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xbE2560F4Ca311BB71C4B045f6D79287031649073",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Member GUN",
        description: "This NFT will give you access to gangter DAO!",
        image: readFileSync("scripts/assets/gun.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()