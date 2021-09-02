import members from "./members.js";

// return @map
export default async function getProfiles() {

  var membersImages = new Map();

  members.forEach((name, twitter) => {
    // const memberImg = getTwitterProfile(member);
    // if (memberImg !== null) {
      membersImages.set(
        name.replace("@", "").trim(),
        twitter.replace("@", "").trim(),
      );
    // }

  });

  console.log(membersImages);

  return membersImages;
}
