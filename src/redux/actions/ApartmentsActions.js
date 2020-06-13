import { APARTMENTS } from "../../constants/apiConstants";
import AuthHelper from "../../config/AuthHelper";

const data = AuthHelper.firestore
  .collection("cities")
  .doc("Amsterdam")
  .collection("Apartments")
  .get();

export const getCityList = () => dispatch => {
  AuthHelper.firestore
    .collection("cities")
    .get()
    .then(doc => {
      const { docs } = doc;
      if (doc.size > 0) {
        const newData = docs.map(item => item.id);
        dispatch({
          type: APARTMENTS.UPDATE_DATA,
          payload: { cities: newData }
        });
      }
    });
};

export const getApartmentsByCity = city => dispatch => {
  AuthHelper.firestore
    .collection("cities")
    .doc(city)
    .collection("Apartments")
    .get()
    .then(doc => {
      const { docs } = doc;
      if (doc.size > 0) {
        const newData = docs.map((item, key) => {
          const itemData = item.data();
          return {
            ...itemData
          };
        });
        dispatch({ type: APARTMENTS.GET_APARTMENTS, payload: newData });
      } else {
        console.log("No such document!");
      }
    })
    .catch(error => console.log("NOT WORKING", error));
};

export const getApartments = () => dispatch => {
  data
    .then(doc => {
      const { docs } = doc;
      if (doc.size > 0) {

        const newData = docs.map(item => {
          const itemData = item.data();
          return {
            id: item.id,
            ...itemData
          };
        });
        dispatch({ type: APARTMENTS.GET_APARTMENTS, payload: newData });
      } else {
        console.log("No such document!");
      }
    })
    .catch(error => console.log("NOT WORKING", error));
};

export const addApartmentToFavorites = data => dispatch =>
  dispatch({ type: APARTMENTS.ADD_APARTMENT_TO_FAVORITES, payload: data });

export const addApartmentToRejected = data => dispatch =>
  dispatch({ type: APARTMENTS.REJECTED_APARTMENT, payload: data });

export const updateAparments = data => dispatch =>
  dispatch({ type: APARTMENTS.UPDATE_APARTMENTS, payload: data });

export const saveApartment = (data = {}, history) => dispatch => {
  const firestore = AuthHelper.firestore
    .collection("cities")
    .doc(data.place.locality);
  firestore
    .set({ id: data.place.locality }, { merge: true })
    .then(() => {
      firestore
        .collection("Apartments")
        .add(data)
        .then(response => {
          getApartments();
          getCityList();
          history.push("/admin/apartments", { save: true });
        })
        .catch(error => {
          console.log("Erorr writing document", error);
          history.push("/admin/apartments", { save: false });
        });
    })
    .catch(error => {
      console.log("ERROR", error);
    })
};

export const storePic = async (item, city) => {
  const storage = AuthHelper.firebase.storage();
  const storageRef = storage.ref(
    `/${city}/${Date.now().toString()}-${item.name}`
  );
  const uploadTask = await storageRef.put(item);
  const url = await uploadTask.ref.getDownloadURL();
  return url;
};
