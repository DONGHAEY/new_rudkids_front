export const isSignaturePose = (landmarks_) => {
  const landmarks = landmarks_?.map((landmark) => landmark);

  // let x = landmarks[5].x * -1;
  // let y = landmarks[5].y * -1;
  // for (let i = 0; i < landmarks.length; i++) {
  //   landmarks[i].x += x;
  //   landmarks[i].y += y;
  // }
  //
  //
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
  if (landmarks[4].x <= landmarks[20].x) {
    console.log("오른손");
    // return false;
    if (landmarks[5].x >= landmarks[4].x) {
      // console.log("왼손--");
      return false;
    }
  }
  if (landmarks[4].x >= landmarks[20].x) {
    console.log("왼손");
    if (landmarks[5].x <= landmarks[4].x) {
      // console.log("오른손--");
      return false;
    }
    // return false;
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
