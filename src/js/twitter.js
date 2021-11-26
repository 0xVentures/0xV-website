import members from "./members-generated.js";

// return @map
export default function getProfiles() {

  var membersImages = [];

  members.forEach((member) => {
      membersImages.push([member[0], member[1], member[2]]);
    // }

  });

  // console.log(membersImages);

  return membersImages;
}
