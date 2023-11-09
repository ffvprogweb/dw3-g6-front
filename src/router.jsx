import {Route, Routes} from "react-router-dom"
import React from "react";

import FuncionarioAluno from "./pages/FuncionarioAluno";
import FuncionarioDisciplina from "./pages/FuncionarioDisciplina";
import FuncionarioProfessor from "./pages/FuncionarioProfessor";
import AlunoMatricula from "./pages/AlunoMatricula";
import AlunoBoletim from "./pages/AlunoBoletim";
import Login from "./pages/Login";

export default function Router() {
  	return (
		<Routes>
			{/* Rotas Login */}
			
			<Route exact path="/login" element={<Login/>}/>

			{/* Rotas Aluno */}

			<Route exact path="/aluno/matricula" element={<AlunoMatricula/>}/>
			<Route exact path="/aluno/boletim" element={<AlunoBoletim/>}/>
				{/* <Route exact path="/aluno/:modalType/:id" element={<FuncionarioAluno/>}/>
				<Route exact path="/aluno/:modalType" element={<FuncionarioAluno/>}/> */}

			{/* Rotas Funcionário */}

			<Route exact path="/" element={<FuncionarioAluno/>}/>
				<Route exact path="/:modalType/:id" element={<FuncionarioAluno/>}/>
				<Route exact path="/:modalType" element={<FuncionarioAluno/>}/>

			<Route exact path="/disciplina" element={<FuncionarioDisciplina/>}/>
				<Route exact path="/disciplina/:modalType/:id" element={<FuncionarioDisciplina/>}/>
				<Route exact path="/disciplina/:modalType" element={<FuncionarioDisciplina/>}/>	

					<Route exact path="/disciplina/:idDisciplina/turma/:modalType/:idTurma" element={<FuncionarioDisciplina/>}/>
					<Route exact path="/disciplina/:idDisciplina/turma/:modalType" element={<FuncionarioDisciplina/>}/>
					<Route exact path="/disciplina/turma/:modalType" element={<FuncionarioDisciplina/>}/>

			<Route exact path="/professor" element={<FuncionarioProfessor/>}/>
			<Route exact path="/professor/:modalType/:id" element={<FuncionarioProfessor/>}/>
			<Route exact path="/professor/:modalType" element={<FuncionarioProfessor/>}/>
			
		</Routes>
  	);
}
