
import React, { useEffect, useState } from 'react'
import './EditAluno.css'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import API from '../../../../../services/API';

export default function EditAluno({ close }) {
  const navigate = useNavigate()
  const {id} = useParams()
  
  const [data, setData] = useState({})
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [rg, setRg] = useState("")
  const [dataNasc, setDataNasc] = useState("")
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  function dataConvert(data) {
    let newData = data.split("/")
    newData = newData.reverse();
    newData = newData.join("-");
    return newData;
  }



  function handleNome(e) {
      setNome(e.target.value)
  }

  function handleCpf(e) {
    setCpf(e.target.value)
  }

  function handleRg(e) {
    setRg(e.target.value)
  }

  function handleDataNasc(e) {
    setDataNasc(e.target.value)
  }

  function handleCep(e) {
    setCep(e.target.value)
  }

  function handleEstado(e) {
    setEstado(e.target.value)
  }

  function handleCidade(e) {
    setCidade(e.target.value)
  }

  function handleBairro(e) {
    setBairro(e.target.value)
  }

  function handleLogradouro(e) {
    setLogradouro(e.target.value)
  }

  function handleNumero(e) {
    setNumero(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleTelefone(e) {
    setTelefone(e.target.value)
  }


  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       id: event.target.id.value,
       nomeCompleto: event.target.NomeCompleto.value !== "" ? event.target.NomeCompleto.value : data.dados.nomeCompleto,
       rg: event.target.RG.value !=="" ? event.target.RG.value : data.dados.rg,
       cpf: event.target.CPF.value !=="" ? event.target.CPF.value : data.dados.cpf,
       email: event.target.Email.value !== "" ? event.target.Email.value : data.dados.email,
       dataNasc: event.target.DataNasc.value !== "" ? event.target.DataNasc.value : data.dados.dataNasc,
       telefone: event.target.Tell.value !== "" ? event.target.Tell.value : data.dados.telefone,
       cep: event.target.CEP.value !== "" ? event.target.CEP.value : data.dados.cep,
       logradouro: event.target.Logradouro.value !== "" ? event.target.Logradouro.value : data.dados.logradouro,
       numero: event.target.Numero.value !== "" ? event.target.Numero.value : data.dados.numero,
       bairro: event.target.Bairro.value !== "" ? event.target.Bairro.value : data.dados.bairro,
       cidade: event.target.Cidade.value !== "" ? event.target.Cidade.value : data.dados.cidade,
       estado: event.target.Estado.value !== "" ? event.target.Estado.value : data.dados.estado
    };

    console.log(dados)
 
    API.patch("alunos", dados);
 
    alert("Aluno(a) atualizado");
 
    navigate(-1);
 }


  useEffect(() => {
    API.get(`alunos`, `cpf=${id}`).then((res) => {
      if (res.error) {
        alert(res.error)
      }
      setData(res)
      setCpf(res.dados.cpf)
      setNome(res.dados.nomeCompleto)
      setRg(res.dados.rg)
      setDataNasc(res.dados.dataNasc)
      setCep(res.dados.cep)
      setEstado(res.dados.estado)
      setCidade(res.dados.cidade)
      setBairro(res.dados.bairro)
      setLogradouro(res.dados.logradouro)
      setNumero(res.dados.numero)
      setEmail(res.dados.email)
      setTelefone(res.dados.telefone)
    }).catch((error) => console.error(error))
  }, []);

  
  try {  


  return (
    
    <div className='modal-addaluno'>
      <Row>
        <Col
          className="bg-light border, field-addaluno"
          md={{
            offset: 3,
            size: 6
          }}
          sm="12"
        >

          <div className="title">Editar aluno
                <button className="close_ btn" onClick={close}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
          <Form method='POST' onSubmit={handleSubmit}>

            {/* Titulo da pagina */}

            <hr />
            <h2>Dados Pessoais</h2>

            {/* Formularios */}

            <Input
              id="id"
              name="id"
              value={data.dados.id}
              style={{display : "nome"}}
            />

            <FormGroup>
              
              {/* Form do Nome */}



              <Label for="NomeCompleto">
                Nome Completo
              </Label>
              <Input
                id="NomeCompleto"
                name="Nome"
                value={nome}
                onChange={handleNome}
              />
            </FormGroup>

            {/* Form do RG */}

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="RG">
                    RG
                  </Label>
                  <Input
                    id="RG"
                    name="RG"
                    value={rg}
                    onChange={handleRg}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CPF">
                    CPF
                  </Label>
                  <Input
                    id="CPF"
                    name="CPF"
                    value={cpf}
                    onChange={handleCpf}
                  />
                </FormGroup>
              </Col>
            </Row>



            <FormGroup>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                name="Email"
                type="Email"
                value={email}
                onChange={handleEmail}
              />
            </FormGroup>



            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="DataNasc">
                    Data de Nascimento
                  </Label>
                  <Input
                    id="DataNasc"
                    name="DataNasc"
                    type="date"
                    value={dataConvert(dataNasc)}
                    onChange={handleDataNasc}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Tell">
                    Telefone
                  </Label>
                  <Input
                    id="Tell"
                    name="Tell"
                    value={telefone}
                    onChange={handleTelefone}
                  />
                </FormGroup>
              </Col>
            </Row>



            <br />
            <h2>Endereço</h2>



            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="CEP">
                    CEP
                  </Label>
                  <Input
                    id="CEP"
                    name="CEP"
                    value={cep}
                    onChange={handleCep}
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="Logradouro">
                    Logradouro
                  </Label>
                  <Input
                    id="Logradouro"
                    name="Logradouro"
                    value={logradouro}
                    onChange={handleLogradouro}
                  />
                </FormGroup>
              </Col>
            </Row>



            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="Numero">
                    Número
                  </Label>
                  <Input
                    id="Numero"
                    name="Numero"
                    value={numero}
                    onChange={handleNumero}
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="Bairro">
                    Bairro
                  </Label>
                  <Input
                    id="Bairro"
                    name="Bairro"
                    value={bairro}
                    onChange={handleBairro}
                  />
                </FormGroup>
              </Col>
            </Row>



            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Cidade">
                    Cidade
                  </Label>
                  <Input
                    id="Cidade"
                    name="Cidade"
                    value={cidade}
                    onChange={handleCidade}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Estado">
                    Estado
                  </Label>
                  <Input
                    id="Estado"
                    name="Estado"
                    value={estado}
                    onChange={handleEstado}
                  />
                </FormGroup>
              </Col>
            </Row>


            <Row>
              <div className='botoes-div-addaluno'>

                  <Link to={"/"} className="Cancel">
                    Cancelar
                  </Link>

                  <Button className='Confirm'>
                    Atualizar
                  </Button>

              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </div >
  )

  } catch (error) {
    
  }


}
