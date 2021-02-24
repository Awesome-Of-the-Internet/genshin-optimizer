import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useReducer } from 'react';
import { Badge, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Artifact from '../Artifact/Artifact';
import Assets from '../Assets/Assets';
import { Stars } from '../Components/StarDisplay';
import { StatIconEle } from '../Components/StatIcon';
import Stat from '../Stat';
import Weapon from '../Weapon/Weapon';
import Character from './Character';
import CharacterDatabase from './CharacterDatabase';
export default function CharacterCard(props) {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(() => {
    Promise.all([
      Character.getCharacterDataImport(),
      Weapon.getWeaponDataImport(),
      Artifact.getDataImport(),
    ]).then(() => forceUpdate())
  }, [])
  let { characterId, onEdit, onDelete } = props
  let character = CharacterDatabase.getCharacter(characterId)
  if (!character) return null;
  let build = Character.calculateBuild(character)
  let { setToSlots } = build

  let { characterKey, name, weapon = {}, constellation } = character
  let elementKey = Character.getElementalKey(characterKey)
  let weaponTypeKey = Character.getWeaponTypeKey(characterKey)
  let weaponName = Weapon.getWeaponName(weapon.key)
  let weaponMainVal = Weapon.getWeaponMainStatValWithOverride(weapon)
  let weaponSubKey = Weapon.getWeaponSubStatKey(weapon.key)
  let weaponSubVal = Weapon.getWeaponSubStatValWithOverride(weapon)
  let weaponLevelName = Weapon.getLevelName(weapon.levelKey)
  let weaponPassiveName = Weapon.getWeaponPassiveName(weapon.key)
  const statkeys = ["final_hp", "final_atk", "final_def", "ele_mas", "crit_rate_", "crit_dmg_", "ener_rech_",]
  return (<Card className={props.cardClassName} bg={props.bg ? props.bg : "darkcontent"} text="lightfont">
    <Card.Header className="pr-2">
      <Row className="no-gutters">
        <Col >
          {props.header ? props.header : <h6><b>{name}</b></h6>}
        </Col>
        <Col xs={"auto"}>
          <span className="float-right align-top ml-1">
            {props.onEdit && <Button variant="primary" size="sm" className="mr-1"
              onClick={onEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>}
            {props.onDelete && <Button variant="danger" size="sm"
              onClick={onDelete}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>}
          </span>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body onClick={onEdit} style={{ cursor: onEdit ? "pointer" : "default" }}>
      <Row>
        <Col xs="auto" className="pr-0">
          <Image src={Character.getThumb(characterKey)} className={`w-100 h-auto grad-${Character.getStar(characterKey)}star p-0`} thumbnail />
        </Col>
        <Col>
          <h4>{Character.getName(characterKey)} <Image src={Assets.elements[elementKey]} className="inline-icon" /> <Image src={Assets.weaponTypes?.[weaponTypeKey]} className="inline-icon" /></h4>
          <h6><Stars stars={Character.getStar(characterKey)} colored /></h6>
          <span>{`Lvl. ${Character.getStatValueWithOverride(character, "character_level")} C${constellation}`}</span>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h6 className="mb-0">{weaponName}{weaponPassiveName && `(${weapon.refineIndex + 1})`} {weaponLevelName}</h6>
          <span>ATK: {weaponMainVal}  {weaponPassiveName && <span>{Stat.getStatName(weaponSubKey)}: {weaponSubVal}{Stat.getStatUnit(weaponSubKey)}</span>}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          {Object.entries(Artifact.getSetEffects(setToSlots)).map(([key, arr]) => {
            let artifactSetName = Artifact.getSetName(key)
            let highestNum = Math.max(...arr)
            return <h5 key={key}><Badge variant="secondary">{artifactSetName} <Badge variant="success">{highestNum}</Badge></Badge></h5>
          })}
        </Col>
      </Row>
      <Row>
        {statkeys.map(statKey => {
          let unit = Stat.getStatUnit(statKey)
          let statVal = build.finalStats[statKey]
          return <Col xs={12} key={statKey}>
            <h6 className="d-inline">{StatIconEle(statKey)} {Stat.getStatName(statKey)}</h6>
            <span className={`float-right`}>
              {statVal?.toFixed(Stat.fixedUnit(statKey)) + unit}
            </span>
          </Col>
        })}
      </Row>
    </Card.Body>
    {props.footer && <Card.Footer>
      <Button as={Link} to={{
        pathname: "/build",
        selectedCharacterId: characterId
      }}>
        Generate Builds
        </Button>
    </Card.Footer>}
  </Card>)
}