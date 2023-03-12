import Modelisation from "./Modelisation"

//rendering week-days
const weekDaySessions = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

//the two following functions will fetch general user data
async function fetchMainInformation(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}`)
    let data = await response.json()
    return data.data
  } catch (err) {
  }
}

//the two following functions will fetch general activity data
async function fetchActivityInformation(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`)
    let data = await response.json()
    console.log('fa', data.data);
    const modelisation = new Modelisation()
    const result = modelisation.getActivity(data.data)
    return result
  } catch (err) {
  }
}

//the two following functions will fetch general session data
async function fetchAverageSessionInformation(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    let data = await response.json()
    const modelisation = new Modelisation()
    const result = modelisation.getAverageSessions(data.data)
    return result
  } catch (err) {
  }
}
//the two following functions will fetch general session data
async function fetchAveragePerformanceInformation(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`)
    let data = await response.json()
    const modelisation = new Modelisation()
    const result = modelisation.getPerformance(data.data)
    console.log(result);
    return result
  } catch (err) {
  }
}

export { fetchMainInformation, fetchActivityInformation, fetchAverageSessionInformation,fetchAveragePerformanceInformation }