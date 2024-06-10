import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Grupos.module.css";
import TextContainer from "../../components/container/TextContainer";
import { Link } from "react-router-dom";

const Grupos = () => {
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    const fetchDesafios = async () => {
      const storedUsername = localStorage.getItem('username');
      try {
        const responseGrupos = await fetch(`http://localhost:3001/studygroup/students?studyGroup=${storedUsername}`);
        const dataGrupos = await responseGrupos.json();
        setAluno(dataGrupos)
        console.log(dataGrupos)
      } catch (error) {
        console.error('Error fetching desafios:', error);
      }
    };

    fetchDesafios();
  }, []);

  const renderGroups = () => {
    if (aluno && aluno.length > 0) {
      return (
        <div className={styles.groupsGrid}>
          {aluno.map((grupo, index) => (
            <div key={index} className={styles.groupContainer}>
              <Link key={index} to={`/Grupo/${encodeURIComponent(grupo.name)}`}>
                <TextContainer texto={`${grupo.name}`} />
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No groups available.</div>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.titulo}>
        <h4>Grupos</h4>
        <input
          type="text"
          className={styles.buscarGrupo}
          placeholder="Buscar Grupo"
        />
      </div>
      <div>
        {console.log('Rendering Grupos component')}
        {aluno && aluno.length ? (
          <div>
            {renderGroups()}
          </div>
        ) : (
          <p>sem grupos disponiveis...</p>
        )}
      </div>
    </div>
  );
};

export default Grupos;