import card from './Character_Lisa_Card.jpg'
import thumb from './Character_Lisa_Thumb.png'
import c1 from './Constellation_Infinite_Circuit.png'
import c2 from './Constellation_Electromagnetic_Field.png'
import c3 from './Constellation_Resonant_Thunder.png'
import c4 from './Constellation_Plasma_Eruption.png'
import c5 from './Constellation_Electrocute.png'
import c6 from './Constellation_Pulsating_Witch.png'
import normal from './Talent_Lightning_Touch.png'
import skill from './Talent_Violet_Arc.png'
import burst from './Talent_Lightning_Rose.png'
import passive1 from './Talent_Induced_Aftershock.png'
import passive2 from './Talent_Static_Electricity_Field.png'
import passive3 from './Talent_General_Pharmaceutics.png'
//import DisplayPercent from '../../../Components/DisplayPercent'

//AUTO

const hitPercent = [
  [],
  [],
  [],
  [],
]

const charged_atk_spinnning = []
const charged_final_atk = []
const plunging_dmg = []
const plunging_dmg_low = []
const plunging_dmg_high = []

//SKILL
const breastplateStats = {
  skill_dmg: [],
  shield_def: [],
  shield_flat: [],
  heal_def: [],
  heal_flat: [],
  heal_trigger: [],
}

//BURST
const sweepingTimeStats = {
  burst_dmg: [],
  skill_dmg: [],
  atk_bonu: [],
}

let char = {
  name: "Lisa",
  cardImg: card,
  thumbImg: thumb,
  star: 4,
  elementKey: "electro",
  weaponTypeKey: "catalyst",
  gender: "F",
  constellationName: "Tempus Fugit",
  titles: ["Witch of Purple Rose", "The Librarian"],
  baseStat: {
    character_hp: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],
    character_atk: [19, 50, 64, 96, 107, 123, 136, 153, 163, 179, 189, 205, 215, 232],
    character_def: [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 533, 573]
  },
  specializeStat: {
    key: "ele_mas",
    value: [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96]
  },
  talent: {
    auto: {
      name: "TEMPLATE",
      img: normal,
      normal: {
        text: <span>TEMPLATE</span>,
        fields: hitPercent.map((percentArr, i) =>
        ({
          text: `${i + 1}-Hit DMG`,
          basicVal: (tlvl) => percentArr[tlvl] + "%",
          finalVal: (tlvl, stats) => (percentArr[tlvl] / 100) * stats.physical_normal_avg_dmg
        }))
      },
      charged: {
        text: <span>TEMPLATE</span>,
        fields: [{
          text: `Spinning DMG`,
          basicVal: (tlvl) => charged_atk_spinnning[tlvl] + "%",
          finalVal: (tlvl, stats) => (charged_atk_spinnning[tlvl] / 100) * stats.physical_charged_avg_dmg
        }, {
          text: `Spinning Final DMG`,
          basicVal: (tlvl) => charged_final_atk[tlvl] + "%",
          finalVal: (tlvl, stats) => (charged_final_atk[tlvl] / 100) * stats.physical_charged_avg_dmg
        }, {
          text: `Stamina Cost`,
          value: `40/s`,
        }, {
          text: `Max Duration`,
          value: `5s`,
        }]
      },
      plunging: {
        text: <span>TEMPLATE</span>,
        fields: [{
          text: `Plunge DMG`,
          basicVal: (tlvl) => plunging_dmg[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunging_dmg[tlvl] / 100) * stats.physical_plunging_avg_dmg
        }, {
          text: `Low Plunge DMG`,
          basicVal: (tlvl) => plunging_dmg_low[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunging_dmg_low[tlvl] / 100) * stats.physical_plunging_avg_dmg
        }, {
          text: `High Plunge DMG`,
          basicVal: (tlvl) => plunging_dmg_high[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunging_dmg_high[tlvl] / 100) * stats.physical_plunging_avg_dmg
        }]
      }
    },
    skill: {
      name: "TEMPLATE",
      img: skill,
      text: <span>TEMPLATE</span>,
      fields: [{
        text: "TEMPLATE",
        basicVal: (tlvl) => breastplateStats.skill_dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (breastplateStats.skill_dmg[tlvl] / 100) * s.physical_skill_avg_dmg,
      }, {
        text: "TEMPLATE",
        basicVal: (tlvl) => breastplateStats.shield_def[tlvl] + "% DEF + " + breastplateStats.shield_flat[tlvl],
        finalVal: (tlvl, s) => (breastplateStats.shield_def[tlvl] / 100) * s.def + breastplateStats.shield_flat[tlvl],
      }, {
        text: "TEMPLATE",
        basicVal: (tlvl) => breastplateStats.heal_def[tlvl] + "% DEF + " + breastplateStats.heal_flat[tlvl],
        finalVal: (tlvl, s) => (breastplateStats.heal_def[tlvl] / 100) * s.def + breastplateStats.heal_flat[tlvl],
      }, {
        text: "CD",
        value: "12s",
      }, {
        text: "TEMPLATE",
        value: (tlvl, s, c, a) => "24s" + a > 4 ? " -1s Every 4 hits" : "",
      }]
    },
    burst: {
      name: "TEMPLATE",
      img: burst,
      text: <span>TEMPLATE</span>,
      fields: [{
        text: "TEMPLATE",
        basicVal: (tlvl) => sweepingTimeStats.burst_dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (sweepingTimeStats.burst_dmg[tlvl] / 100) * s.physical_burst_avg_dmg,
      }, {
        text: "TEMPLATE",
        basicVal: (tlvl) => sweepingTimeStats.skill_dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (sweepingTimeStats.skill_dmg[tlvl] / 100) * s.physical_burst_avg_dmg,
      }, {
        text: "TEMPLATE",
        basicVal: (tlvl, s, constellation) => `${sweepingTimeStats.atk_bonu[tlvl]}%${constellation >= 6 ? " +50%" : ""} DEF`,
        finalVal: (tlvl, s, constellation) => ((sweepingTimeStats.atk_bonu[tlvl] + (constellation >= 6 ? 50 : 0)) / 100) * s.def,
      }, {
        text: "TEMPLATE",
        value: (tlvl, s, constellation) => "15s" + (constellation >= 6 ? " +1s per kill, up to 10s" : ""),
      }, {
        text: "CD",
        value: "15s",
      }, {
        text: "Energy Cost",
        value: 60,
      }]
    },
    passive1: {
      name: "TEMPLATE",
      img: passive1,
      text: <span>TEMPLATE</span>
    },
    passive2: {
      name: "TEMPLATE",
      img: passive2,
      text: <span>TEMPLATE</span>
    },
    passive3: {
      name: "TEMPLATE",
      img: passive3,
      text: <span>TEMPLATE</span>
    },
  },
  constellation: [{
    name: "TEMPLATE",
    img: c1,
    text: <span>TEMPLATE</span>
  }, {
    name: "TEMPLATE",
    img: c2,
    text: <span>TEMPLATE</span>
  }, {
    name: "TEMPLATE",
    img: c3,
    text: <span>TEMPLATE</span>
  }, {
    name: "TEMPLATE",
    img: c4,
    text: <span>TEMPLATE</span>
  }, {
    name: "TEMPLATE",
    img: c5,
    text: <span>TEMPLATE</span>
  }, {
    name: "TEMPLATE",
    img: c6,
    text: <span>TEMPLATE</span>
  }],
};
export default char;
