import React from "react";
import Navbar from "../../components/Navbar";
import ContainerG from "../../components/container/ContainerG";
import styles from "./CriarGrupo.module.css";
import Footer from "../../components/Footer";
import FormularioCriarGrupo from "../../components/form/FormularioCriarGrupo"; 
import { Link } from "react-router-dom";

const CriarGrupo = () => {
  return (
    <div className={styles.content} style={{ backgroundColor: "#BEC941" }}>
      <Navbar />
      <ContainerG className={styles.content} style={{ backgroundColor: "#BEC941" }}>
        <h2 className={styles.heading}>Criar Grupo</h2>
        <FormularioCriarGrupo/> 
      </ContainerG>
      <Footer />
    </div>
  );
};

export default CriarGrupo;

