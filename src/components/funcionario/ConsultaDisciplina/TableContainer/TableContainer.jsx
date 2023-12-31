import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import Modal from "../Modal/Modal";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../services/API";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

import "./TableContainer.css"
import ConsultaTurma from "../../ConsultaTurma/ConsultaTurma";
import Select from "../../../global/Select/Select";

export default function TableContainer() {
  const params = useParams()

  const [data, setData] = useState({ dados: [] })
  const [pesquisa, setPesquisa] = useState(null)
  const [tipoPesquisa, setTipoPesquisa] = useState("")
  const [dropdownPesquisa, setDropdownPesquisa] = useState([])

  const [nomeDisciplina, setNomeDisciplina] = useState(null)
  const [id, setId] = useState(false)

  function handleFilter(e) {
    setPesquisa(e.target.value)
  }


  useEffect(() => {
    if (tipoPesquisa === "nome") {
      API.get("disciplinas", `nome=${pesquisa}`).then((res) => {
        setData({ dados: [res.dados] })
      })
    }
    if (!tipoPesquisa || tipoPesquisa === "") {
      API.get("disciplinas").then(res => {
        setData(res)
      })
    }

  }, [params, pesquisa, tipoPesquisa]);

  return (
    <Fragment>

      <header className="header-table">
        <div className="right-header">
          <Input className="pesquisa-input" placeholder="Pesquisar" onChange={handleFilter} />

          <Select state={tipoPesquisa} setState={setTipoPesquisa} icon={"tune"} placeholder="Sem Filtro">
            <option value="nome">Nome</option>
          </Select>
          
        </div>

        <div className="left-header">
          <span>1 de 10</span>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_left</span>
          </Button>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_right</span>
          </Button>
          <Link to={"adicionar"} className="add-aluno-btn">
            <span class="material-symbols-rounded">add</span>
            <span>Adicionar Disciplina</span>
          </Link>

        </div>
      </header>

      <Modal />

      <div className="content-tables">
        <div className="left">
          <ContentTable contentData={data} setId={setId} setNomeDisciplina={setNomeDisciplina} />
        </div>
        <div className="right">
          <ConsultaTurma id={id} disciplina={nomeDisciplina} />
        </div>
      </div>


    </Fragment>
  );
}
