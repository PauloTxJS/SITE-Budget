import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Container, 
	Jumbotron,
	Button, Form, FormGroup, Label, Input, FormText,
	Alert
} from 'reactstrap';

function HomePage() {

	const [orcamento, setOrcamento] = useState({
		name: '',
		email: '',
		phone: '',
		whatsapp: '',
		msg: ''
	});

	const [response, setResponse] = useState({
		formSave: false,
		type: '',
		message: ''
	});

	const onChangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value});

	const sendOrcamento = async e => {
		e.preventDefault();
		setResponse({formSave: true}); // enviando...
		try {
			const res = await fetch('http://localhost:8080/orcamento', {
				method: 'POST',
				body: JSON.stringify(orcamento),
				headers: {'Content-Type': 'application/json'}
			});

			const responseEnv = await res.json();
			// console.log(responseEnv.error);

			if (responseEnv.error) {
				setResponse({
					formSave: false,
					type: 'error',
					message: responseEnv.message
				})
			} else {
				setResponse({
					formSave: false,
					type: 'success',
					message: responseEnv.message
				})
			}

		} catch(err) {
			setResponse({
				formSave: false,
				type: 'error',
				message: 'Erro: Solicitação de orçamento não enviada com sucesso, tente mais tarde!'
			})
		}
	}

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	
	return (
		<div>
			<Navbar color="info" dark expand="md">
				<Container>
					<NavbarBrand href="/">Paulo</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/">Orçamento</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
		</Navbar>

			<Jumbotron className="pg-orcamento">
				<style>
					{`.pg-orcamento{
						background-color: #f5fbfa;
						color: #17a2b8;
						padding-top: 50px;
						padding-bottom: 100px;
						margin-bottom: 0rem !important;
					}`}
				</style>
				<Container>
					<h1 className="display-4 text-center">Nossos consultores estão prontos pra lhe ajudar</h1>
					<p className="lead text-center mb-4">Deixe seus contatos abaixo que retornaremos com uma proposta 
					específica para a sua necessidade.</p>

					

					<Form onSubmit={sendOrcamento}>
						<FormGroup>
							<Label for="name">Nome</Label>
							<Input type="text" name="name" id="name" placeholder="Nome completo" onChange={onChangeInput}/>
						</FormGroup>

						<FormGroup>
							<Label for="email">E-mail</Label>
							<Input type="email" name="email" id="email" placeholder="Digite seu e-mail" onChange={onChangeInput}/>
						</FormGroup>

						<FormGroup>
							<Label for="phone">Telefone</Label>
							<Input type="text" name="phone" id="phone" placeholder="Digite o número do seu telefone. Fixo ou celular" onChange={onChangeInput}/>
						</FormGroup>

						<FormGroup>
							<Label for="whatsapp">Whatsapp</Label>
							<Input type="text" name="whatsapp" id="whatsapp" placeholder="Digite o número do seu whatsapp -> (xx) xxxx-xxxx" onChange={onChangeInput}/>
						</FormGroup>

						<FormGroup>
							<Label for="msg">Conteúdo</Label>
							<Input type="textarea" name="msg" id="msg" placeholder="Fale um pouco sobre o seu projeto" onChange={onChangeInput}/>
						</FormGroup>

						{response.formSave ? <Button type="submit" outline color="info" disabled>Enviando...</Button> : <Button type="submit" outline color="info">Enviar</Button>}
						{response.type === 'error'? <Alert color="danger">{response.message}</Alert> : ""}
						{response.type === 'success'? <Alert color="success">{response.message}</Alert> : ""}
					</Form>
					
				</Container>
			</Jumbotron>

			<Jumbotron fluid className="rodape bg-info">
				<style>
					{`.rodape{
						color: #fff;
						padding-top: 10px;
						padding-bottom: 10px;
						margin-bottom: 0rem !important;
					}`}
				</style>
					<Container>
						<h1 className="lead text-center">Rodapé</h1>
					</Container>
			</Jumbotron>
		</div>
	)
}
	
export default HomePage
	