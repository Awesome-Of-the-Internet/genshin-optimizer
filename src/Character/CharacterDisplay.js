import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { lazy } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactGA from 'react-ga';
import { DatabaseInitAndVerify } from '../DatabaseUtil';
import Character from './Character';
import CharacterCard from './CharacterCard';
import CharacterDatabase from './CharacterDatabase';

//lazy load the character display
const CharacterDisplayCardPromise = import('../Character/CharacterDisplayCard');
const CharacterDisplayCard = lazy(() => CharacterDisplayCardPromise)

export default class CharacterDisplay extends React.Component {
  constructor(props) {
    super(props)
    DatabaseInitAndVerify();
    this.state = {
      charIdToEdit: "",
      showEditor: false,
    }
    ReactGA.pageview('/character')
  }

  deleteCharacter = (id) => {
    Character.removeCharacter(id)
    this.forceUpdate()
  }

  editCharacter = (id) =>
    this.setState({ charIdToEdit: id, showEditor: true },
      () => this.scrollRef.current.scrollIntoView({ behavior: "smooth" }))

  cancelEditCharacter = () =>
    this.setState({ charIdToEdit: null, showEditor: false })

  componentDidMount() {
    this.scrollRef = React.createRef()
  }
  render() {
    let charIdList = CharacterDatabase.getCharacterIdList()
    return (<Container ref={this.scrollRef}>
      {/* editor/character detail display */}
      {this.state.showEditor ? <Row className="mt-2"><Col>
        <React.Suspense fallback={<span>Loading...</span>}>
          <CharacterDisplayCard editable
            characterId={this.state.charIdToEdit}
            onClose={this.cancelEditCharacter}
            footer={<Button variant="danger" onClick={this.cancelEditCharacter}>Close</Button>}
          />
        </React.Suspense>
      </Col></Row> : null}

      <Row className="mt-2">
        {this.state.showEditor ? null : <Col lg={4} md={6} className="mb-2">
          <Card className="h-100" bg="darkcontent" text="lightfont">
            <Card.Header className="pr-2">
              <span>Add New Character</span>
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Row className="d-flex flex-row justify-content-center">
                <Col xs="auto">
                  <Button onClick={() => this.editCharacter("")}>
                    <h1><FontAwesomeIcon icon={faPlus} className="fa-fw" /></h1>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>}
        {charIdList.map(id =>
          <Col key={id} lg={4} md={6} className="mb-2">
            <CharacterCard
              cardClassName="h-100"
              characterId={id}
              onDelete={() => this.deleteCharacter(id)}
              onEdit={() => this.editCharacter(id)}
            />
          </Col>
        )}
      </Row>
    </Container>)

  }
}