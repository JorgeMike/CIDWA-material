/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
  Card, Form, Container, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { env } from 'process';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../../components/general/loadingSpinner';
import { validacionArray } from '../../../funciones/validacion';
import './planilla.css';
import { NavBar } from '../../../components/admin/navUsuario';

const { REACT_APP_ROOT } = process.env;

export function Planilla() {
  const [formulas, setFormulas] = useState([]);
  const [checkForm, setCheckForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [opacity, setOpacity] = useState('100%');
  const [nombreUsuario, setNombreUsuario] = useState('');

  const history = useHistory();
  const loginPage = () => {
    history.push('/login');
  };

  useEffect(() => {
    function setHeaders() {
      if (!window.localStorage.getItem('AuthorizationVotacionesUsuario')) { loginPage(); }
      const token = window.localStorage.getItem(
        'AuthorizationVotacionesUsuario',
      );
      axios.defaults.headers.common.Authorization = token;
      setNombreUsuario(window.localStorage.getItem(
        'nombreUsarioVotaciones',
      ));
    }
    setHeaders();
  }, []);

  const addEleccion = (idEleccion, idFormula, eleccion) => {
    const result = checkForm.findIndex(
      (formula) => formula.idEleccion === idEleccion,
    );
    if (result === -1 || eleccion.nombreEleccion.includes('Consejo Técnico (Multiples Adscripciones)')) {
      setCheckForm([...checkForm, { idEleccion, idFormula }]);
    } else {
      checkForm[result].idFormula = idFormula;
    }
  };

  else {
    // Handling non-Comisiones Dictaminadoras elections
      const index = checkForm.findIndex((form) => form.idEleccion === idEleccionHabilitada);
      console.log(index);
      if (index === -1 || nombreEleccion.includes('Consejo Técnico')) {
        setCheckForm([...checkForm, { idEleccion: idEleccionHabilitada, idFormula }]);
        setSelectedOptions((prev) => ({ ...prev, [eleccion.uniqueId]: idFormula }));
      } else {
        console.log('actualizando');
        const newCheckForm = [...checkForm]; // Hacemos una copia del array original
        newCheckForm[index].idFormula = idFormula; // Modificamos la copia
        console.log(newCheckForm);
        setCheckForm(newCheckForm);
        setSelectedOptions((prev) => ({ ...prev, [eleccion.uniqueId]: idFormula }));
      }
    }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${REACT_APP_ROOT}${'/planilla'}`);
        const res = response.data.data;
        const idsUnicos = new Set();
        const formulasFiltradas = [];
        const forms = res.map((form) => {
          if (!idsUnicos.has(form.idEleccionHabilitada)) {
            idsUnicos.add(form.idEleccionHabilitada);
            const { idEleccionHabilitada, ...formw } = form;
            formulasFiltradas.push(formw);
          }
          return form;
        });
        setFormulas(res);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Parece que ha ocurrido un error',
          text: `${error.response ? error.response.data.msj : ''}`,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#d33',
        });
        if (error.response && error.response.status === 403) {
          // go to login page
          loginPage();
        }
        if (!error.response) {
          loginPage();
        }
      }
    }
    fetchData();
  }, []);

  const Send = async (votos) => {
    if (validacionArray(votos)) return;
    try {
      setLoading(true);
      setOpacity('60%');
      await axios.post(`${REACT_APP_ROOT}${'/votar'}`, {
        votos,
      });
      await Swal.fire({
        icon: 'success',
        title: 'Su votación fue éxitosa',
        text: 'Gracias por su participación',
        confirmButtonText: 'OK',
        confirmButtonColor: '#46c200',
      });
      localStorage.removeItem('nombreUsarioVotaciones');
      localStorage.removeItem('AuthorizationVotacionesUsuario');
      setLoading(false);
      setOpacity('100%');
      loginPage();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Parece que ha ocurrido un error',
        text: `${error.response ? error.response.data.msj : ''}`,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d33',
      });
      if (error.response && error.response.status === 403) {
        // go to login page
        loginPage();
      }
      if (!error.response) {
        loginPage();
      }
      setLoading(false);
      setOpacity('100%');
    }
  };

  return (
    <div>
      <NavBar nombreUsuario={nombreUsuario} />
      <Container className="container">
        <h1>Fórmulas electorales</h1>
        <div>
          {formulas.length > 0 ? (
            formulas.map((eleccion, index) => (
              <div key={eleccion.idEleccionHabilitada}>
                <h3
                  style={{
                    textAlign: 'left',
                    marginTop: '1rem',
                    paddingLeft: '120px',
                  }}
                >
                  {eleccion.nombreEleccion}
                </h3>
                <div className="cardContaner">
                  {eleccion.formula.map((form) => (
                    <div key={form.idFormula}>
                      <Card className="cardStely">
                        <Card.Title style={{ margin: '1rem', textAlign: 'center' }}>
                          <h3>{form.nombreFormula}</h3>
                        </Card.Title>
                        <div className="imageCenter">
                          {form.rutaImagenFormula ? (
                            <Card.Img
                              className="img"
                              variant="top"
                              src={
                                form.rutaImagenFormula
                                  ? `${REACT_APP_ROOT}${form.rutaImagenFormula}`
                                  : ''
                              }
                            />
                          ) : (
                            <div style={{ marginTop: '120px' }} />
                          )}
                        </div>
                        <Card.Body>
                          <div style={{ textAlign: 'left' }}>
                            {form.roles.map((candidato) => (
                              <div key={candidato.idRol}>
                                <Card.Text className="nombreCandidato">
                                  {' '}
                                  <div className="" style={{ width: '200px' }}>
                                    <strong className="m-2">
                                      {candidato.nombreRol}
                                      :
                                      {' '}
                                    </strong>
                                    <p className="m-2">
                                      {` ${candidato.nombre.length > 0
                                        ? `${candidato.nombre}`
                                        : ''
                                      } ${candidato.apellidoPaterno} ${candidato.apellidoMaterno
                                      }`}
                                    </p>
                                  </div>
                                </Card.Text>
                              </div>
                            ))}
                          </div>
                        </Card.Body>
                        <Card.Footer>
                          <Form.Check
                            id={`${form.idFormula} ${eleccion.idEleccionHabilitada} * ${index}`}
                            className="botonVotar"
                            type="radio"
                            label="Elegir"
                            name={`${eleccion.idEleccionHabilitada} ${index}`}
                            onClick={() => addEleccion(eleccion, form)}
                          />
                        </Card.Footer>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '145px' }}>
              <h3>No hay elecciones por el momento</h3>
            </div>
          )}
        </div>
        {
        formulas.length > 0 && loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <Button
            className="btn-UNAM"
            size="md"
            onClick={() => Send(checkForm)}
          >
            Enviar
          </Button>
        )
        }
      </Container>
      <style type="text/css">
        {`
                  .btn-UNAM {
                    background-color: rgb(187, 136, 0);
                    border: none;
                    color: white;
                    height: 2.5rem;
                    width: 30%;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 1rem;
                    border-radius: 1rem;
                    -webkit-transition-duration: 0.4s; /* Safari */
                    transition-duration: 0.4s;
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    margin-top: 2rem;
                  }
                  .btn-UNAM:hover {
                    background-color: #46c200;
                    color: white;
                  }
                  .cardContaner {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    text-align: center;
                  }
                  .img {
                    width: 190px;
                    height: 270px;
                  }
                  .imageCenter{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                  }
                  .cardStelyEditar {
                    width: 470px;
                    height: auto;
                    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
                  }
                  .cardStely {
                    height: 485px;
                  }
                  @media (max-width: 450px) {
                    .btn-UNAM {
                      text-align: center;
                      margin-top: 3rem;
                      width: 70%;
                    }
                  }
                `}
      </style>
    </div>
  );
}
try {
    await axios.post(`${REACT_APP_ROOT}${'/votar'}`, { votos: combinedVotes });
    Swal.fire({
      icon: 'success',
      title: 'Listo',
      text: 'Se ha votado con exito, Gracias',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#d33',
    });
    loginPage();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Parece que ha ocurrido un error',
      text: `${error.response ? error.response.data.msj : ''}`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#d33',
    });
    if (error.response.data.msj !== 'La votación está incompleta') {
      loginPage();
    }
  }