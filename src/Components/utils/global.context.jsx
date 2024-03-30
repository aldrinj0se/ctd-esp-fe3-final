import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducer/reducer";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
  favs: [],
  patients: [],
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users/";

  const toggleTheme = state.theme === "dark" ? "dark" : "light";

  /* ---------------------------------- Validaciones texto --------------------------------- */
  function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
  }

  const validarTexto = (texto) => {
    let textoNormalizado = normalizarTexto(texto);
    let regExp = new RegExp(
      "^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+( [A-Za-záéíóúÁÉÍÓÚüÜñÑ]+)+$"
    );
    return (
      textoNormalizado != null &&
      regExp.test(textoNormalizado) &&
      textoNormalizado.length >= 3 &&
      isNaN(textoNormalizado)
    );
  };

  /* ---------------------------------- Validaciones email --------------------------------- */
  function normalizarEmail(email) {
    return email.toLowerCase();
  }
  const validarEmail = (email) => {
    let emailNormalizado = normalizarEmail(email);
    let regExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
    return emailNormalizado != null && regExp.test(emailNormalizado);
  };

  useEffect(() => {
    axios(url).then((res) => {
      // console.log(res);
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  }, []);

  useEffect(() => {
    const Favs = JSON.parse(localStorage.getItem("favs")) || [];
    console.log("Favorites:", Favs);
  }, [state.favs]);

  useEffect(() => {
    const Patients = JSON.parse(localStorage.getItem("patients")) || [];
    console.log("Patients:", Patients);
  }, [state.patients]);

  return (
    <ContextGlobal.Provider
      value={{ state, dispatch, url, validarTexto, validarEmail, toggleTheme }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
