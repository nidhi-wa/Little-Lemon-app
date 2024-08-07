
export const fetchAPI = async (date) => {
    // Simulating an API call with a delay
    const availableTimes = {
      "2024-08-01": ["17:00", "18:00", "19:00"],
      "2024-08-02": ["18:00", "19:00", "20:00"],
      "2024-08-03": ["17:00", "20:00", "21:00"],
      "2024-08-06": ["18:00", "20:00", "21:00"],
      // Add more dates and times as needed
    };
  
    // Simulating a delay for fetching data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(availableTimes[date] || ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]); // Default times if date is not found
      },);
    });
  };


// export const seededRandom = function (seed) {
//     var m = 2**35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//         return (s = s * a % m) / m;
//     };
// }

// export const fetchAPI = function(date) {
//     let result = [];
//     let random = seededRandom(date);

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if(random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     return result;
// };