// class modelisation for data from BACK-END data

class Modelisation {
  // Method to show month and day.
  getActivity(apiData){
    console.log(apiData);
    let data = []
    for (let item of apiData.sessions) {
      const [yyyy, mm, dd] = item.day.split("-");
        data.push({
          day: `${dd}`,
          kilogram: item.kilogram,
          calories: item.calories,
        })
      }
      console.log(data);
    return data
  }
  // Method to show information from a week of data.
  getAverageSessions(apiData){
     const weekDaySessions = {
       1: 'L',
       2: 'M',
       3: 'M',
       4: 'J',
       5: 'V',
       6: 'S',
       7: 'D'
  }
     const userWeeklySessions = []
     for (let sess of apiData.sessions) {
       userWeeklySessions.push({
         day:weekDaySessions[sess.day],
         sessionLength: sess.sessionLength
       })
     }
     return userWeeklySessions
  }
  // Method to show all categories from Performance user activity
  getPerformance(apiData) {
    const categories = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    for (const allActivities in apiData.data) {
      apiData.data[allActivities].kind = categories[parseInt(allActivities) + 1]
    }

    return Object.values(apiData.data).reverse()
  }
}

export default Modelisation
