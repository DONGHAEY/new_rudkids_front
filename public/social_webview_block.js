var inappdeny_exec_vanillajs = (callback) => {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
};

inappdeny_exec_vanillajs(() => {
  /* Do things after DOM has fully loaded */
  var useragt = navigator.userAgent.toLowerCase();
  var target_url = location.href;
  if (useragt.match(/kakaotalk/i)) {
    location.href =
      "kakaotalk://web/openExternal?url=" + encodeURIComponent(target_url);
  } else if (useragt.match(/line/i)) {
    if (target_url.indexOf("?") !== -1) {
      location.href = target_url + "&openExternalBrowser=1";
    } else {
      location.href = target_url + "?openExternalBrowser=1";
    }
  } else if (
    useragt.match(
      /inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsApp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|trill|SamsungBrowser\/[^1]/i
    )
  ) {
    if (useragt.match(/iphone|ipad|ipod/i)) {
      location.href =
        "kakaotalk://web/openExternal?url=" + encodeURIComponent(target_url);
    } else {
      location.href =
        "intent://" +
        target_url.replace(/https?:\/\//i, "") +
        "#Intent;scheme=http;package=com.android.chrome;end";
    }
  }
});
