const cron = require("node-cron");

// *	any value
// ,	value list separator
// -	range of values
// /	step values
// @yearly	(non-standard)
// @annually	(non-standard)
// @monthly	(non-standard)
// @weekly	(non-standard)
// @daily	(non-standard)
// @hourly	(non-standard)
// @reboot	(non-standard)

cron.schedule("* * * * * *", function () {
  console.log("Running task every second");
});
