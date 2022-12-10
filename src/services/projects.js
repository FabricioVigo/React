import {  HOTELS_DETAILS } from "../utils/projects";
import hotels from  '../data/hotels.json'

export function getAllProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hotels);
    }, 2500);
  });
}

export function getProject(hotelsId) {
  return new Promise((resolve, reject) => {
    const targetHotels = HOTELS_DETAILS.find(
      (hotels) => hotels.id === hotelsId
    );
    setTimeout(() => resolve(targetHotels), 1000);
  });
}
