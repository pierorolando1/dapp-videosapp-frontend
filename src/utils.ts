/**
* Returns a truncated version of an string
* @param {string} str - The string to truncate
* @param {number} maxLength - The maximum length of the string
* */
export const truncateString = (
  str: string,
  maxLength: number
) => {
  return str.length > maxLength ? str.trim().substring(0, maxLength) + '...' : str;
}
/**
* Return the abreviation of a number in a string
* @param {n} number - The number to convert
* @param {decPlaces} decPlaces - The number of decimal places to show default 2
* */
export const abbreviationNum = (n:any, decPlaces:number = 2) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "K", "M", "B", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= n) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             n = Math.round(n*decPlaces/size)/decPlaces;

             // Add the letter for the abbreviation
             n += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return n + ''
}

/**
* Return the abreviation of seconds in a string
* @param {seconds} seconds - The number of seconds to convert
* */

// for example:
// secondsToTime(3661) == '1:01:01'
// secondsToTime(3661) == '1:01:01'
// secondsToTime(120) == '2:00'
export const formatTimeSeconds = (seconds:number) => {
  var numhours = Math.floor(seconds / 3600);
  var numminutes = Math.floor((seconds % 3600) / 60);
  var numseconds = Math.floor((seconds % 3600) % 60);

  var hours = (numhours < 10) ? "0" + numhours : numhours;
  var minutes = (numminutes < 10) ? "0" + numminutes : numminutes;
  var sec = (numseconds < 10) ? "0" + numseconds : numseconds;

  // if hours is 0, don't show it
  // if hours is 0 and minutes is 0, don't show it
  // if hours is 0 and minutes is 0 and seconds is 0, don't show it
  // if hours is 0 and minutes is 0 and seconds is 0, don't show it
  // if hours is 0 and minutes is 0 and seconds is 0, don't show it
  if (hours === '00' && minutes === '00' && sec === '00') {
    return '00:00'
  } else if (hours === '00') {
    return minutes + ':' + sec
  } else {
    return hours + ':' + minutes + ':' + sec
  }
}
