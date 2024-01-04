const batteryLevelHtml = document.querySelector(".batteryLevel");
const charging = document.querySelector(".batteryCharging");
const chargingtime = document.querySelector(".batteryChargingTime");
const dischargingTime = document.querySelector(".batteryDischargingTime");

const batteryData = () => {
  console.log("hello");
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      console.log(battery);
      //Batter charging change
      battery.addEventListener("chargingchange", () => {
        batteryChargingStatus();
      });
      function batteryChargingStatus() {
        const isCharging = battery.charging ? "Yes" : "NO";
        charging.innerHTML = isCharging;
      }

      // babttery charging time
      battery.addEventListener("chargingtimechange", () => {
        console.log("chargingtimechange got changed");
      });

      //Battery discharginh time
      battery.addEventListener("dischargingtimechange", () => {
        console.log("dischargingtimechange got changed");
        disCharge();
      });

      //battery status
      battery.addEventListener("chargingchange", () => {
        console.log("charging got changed");
      });
      batteryLevel();
      function batteryLevel() {
        const level = battery.level * 100 + "%";
        batteryLevelHtml.innerHTML = level;
        console.log();
      }
      battery.addEventListener("levelchange", () => {
        console.log("charging got changed");
      });
    });
  }
};
batteryData();
