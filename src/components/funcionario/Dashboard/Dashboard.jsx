import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import GraficoLinha from './GraficoLinha'
import GraficoPizza from './GraficoPizza'
import Select from '../../global/Select/Select'

import API from '../../../services/API'

export default function Dashboard() {
   const [chartSelectState1, setChartSelectState1] = useState([])
   const [chartSelectState2, setChartSelectState2] = useState([])

   const [alunos, setAlunos] = useState([])
   const [professores, setProfessores] = useState([])
   const [disciplinas, setDisciplinas] = useState([])

   useEffect(() => {
      API.get("alunos").then(res => {
         setAlunos(res.dados)
      })
      API.get("professores").then(res => {
         setProfessores(res.dados)
      })
      API.get("disciplinas").then(res => {
         setDisciplinas(res.dados)
      })
   }, []);

  return (
   <div className='container-main'>
      <div className='page-title'>
         <h1 className='title_'>Dashboard</h1>
         <p className='subtitle_'>Registros</p>
      </div>

      <div className="stats-cards-container">
         <div className="stats-card">
            <span className='stats-number'>{alunos.length || 0 }</span>
            <span className='stats-title'>Alunos Cadastrados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>{alunos.length || 0 }</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>{professores.length || 0}</span>
            <span className='stats-title'>Professores Cadastrados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>{disciplinas.length || 0}</span>
            <span className='stats-title'>Disciplinas Cadastradas</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Turmas Cadastradas</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Boletins Cadastrados</span>
         </div>
      </div>

      <br />
      <h1>Mais Informações</h1>
      <br />

      <div className="grafico-container">
         <div className="stats-card">
            <div className='grafico-titulo'>
               <Select state={chartSelectState1} setState={setChartSelectState1} icon={"tune"}>
                  <option value="status">Alunos Matriculados</option>
                  <option value="status">Professores Cadastrados</option>
               </Select>
            </div>
            <div className='grafico'>
               <GraficoLinha/>
            </div>
         </div>

         <div className="stats-card">
            <div className='grafico-titulo'>
               <Select state={chartSelectState2} setState={setChartSelectState2} icon={"tune"}>
                  <option value="status">Alunos por disciplina</option>
                  <option value="status">Professores por disciplina</option>
               </Select>
            </div>
            <div className='grafico'>
               <GraficoPizza/>
            </div>
         </div>
      </div>
   </div>
  )
}
