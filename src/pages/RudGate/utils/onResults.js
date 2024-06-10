export const isSignaturePose = (landmarks) => {
  if (landmarks[10].y >= landmarks[12].y) {
    console.log("1");
    return false;
  }
  if (landmarks[14].y >= landmarks[16].y) {
    console.log("2");
    return false;
  }
  if (landmarks[8].y >= landmarks[10].y) {
    console.log("3");
    return false;
  }
  if (landmarks[20].y >= landmarks[14].y) {
    console.log("4");
    return false;
  }
  if (landmarks[8].x >= landmarks[4].x) {
    if (landmarks[4].x <= landmarks[20].x) {
      console.log("5");
      return false;
    }
  }
  if (landmarks[8].x <= landmarks[4].x) {
    if (landmarks[4].x >= landmarks[20].x) {
      console.log("6");
      return false;
    }
  }
  return true;
};

export const isFuckyouPose = (landmarks) => {
  if (
    landmarks[11].y > landmarks[12].y && //중지
    landmarks[7].y < landmarks[8].y &&
    landmarks[15].y < landmarks[16].y &&
    landmarks[19].y < landmarks[20].y
  ) {
    //fuck you
    if (landmarks[3].x < landmarks[4].x && landmarks[17].x > landmarks[2].x) {
      //("오른손 뻑큐?");
      return true;
    } else if (
      landmarks[3].x > landmarks[4].x &&
      landmarks[17].x < landmarks[2].x
    ) {
      //("왼손 뻑큐?");
      return true;
    }
  }
  return false;
};
