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
	Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

function HomePage() {

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
						padding-bottom: 150px;
						margin-bottom: 0rem !important;
					}`}
				</style>
				<Container>
					<h1 className="display-4 text-center">Nossos consultores estão prontos pra lhe ajudar</h1>
					<p className="lead text-center mb-4">Deixe seus contatos abaixo que retornaremos com uma proposta 
					específica para a sua necessidade.</p>

					<Form>
						<FormGroup>
							<Label for="name">Nome</Label>
							<Input type="text" name="name" id="name" placeholder="Nome completo" />
						</FormGroup>

						<FormGroup>
							<Label for="email">E-mail</Label>
							<Input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
						</FormGroup>

						<FormGroup>
							<Label for="phone">Telefone</Label>
							<Input type="text" name="phone" id="phone" placeholder="Digite o número do seu telefone. Fixo ou celular" />
						</FormGroup>

						<FormGroup>
							<Label for="whatsapp">Whatsapp</Label>
							<Input type="text" name="whatsapp" id="whatsapp" placeholder="Digite o número do seu whatsapp -> (xx) xxxx-xxxx" />
						</FormGroup>

						<FormGroup>
							<Label for="msg">Conteúdo</Label>
							<Input type="textarea" name="msg" id="msg" placeholder="Fale um pouco sobre o seu projeto" />
						</FormGroup>

						<Button type="submit" outline color="info">Enviar</Button>
					</Form>

				</Container>
			</Jumbotron>
		</div>
	)
}
  
export default HomePage
  