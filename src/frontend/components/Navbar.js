import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import 'H:/ContractProject/NFT-MarketPlace/src/style/global.css'
import 'H:/ContractProject/NFT-MarketPlace/src/style/app.css'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar  className="nabav"  >
            <Container >
                <Navbar.Brand href="#" className="size">
                    🛒 Marketplace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav text">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="a">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create" className="a">Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items" className="a">My Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases" className="a">My Purchases</Nav.Link>
                    </Nav>
                    <div  className="a">
                        <input placeholder=" Search" className="font-size-search"/>
                    </div>
                    {/* <button className="buttonsearch a">search</button> */}


                    <Nav className="acc">
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4 acc">
                                <Button variant="outline-light" className="acc">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light" className="acc" >Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;