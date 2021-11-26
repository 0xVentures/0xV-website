import members from "./members-generated.js";

// return @map
export default async function getProfiles() {

  var membersImages = new Map();

  members.forEach((member) => {
      membersImages.set(member[0], [member[1], [member[2]]]);
    // }

  });

  // console.log(membersImages);

  return membersImages;
}
