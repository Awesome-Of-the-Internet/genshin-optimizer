import card from './Character_Zhongli_Card.png'
import thumb from './Character_Zhongli_Thumb.png'
import c1 from './Constellation_Rock,_the_Backbone_of_Earth.png'
import c2 from './Constellation_Stone,_the_Cradle_of_Jade.png'
import c3 from './Constellation_Jade,_Shimmering_through_Darkness.png'
import c4 from './Constellation_Topaz,_Unbreakable_and_Fearless.png'
import c5 from './Constellation_Lazuli,_Herald_of_the_Order.png'
import c6 from './Constellation_Chrysos,_Bounty_of_Dominator.png'
import normal from './Talent_Rain_of_Stone.png'
import skill from './Talent_Dominus_Lapidis.png'
import burst from './Talent_Planet_Befall.png'
import passive1 from './Talent_Resonant_Waves.png'
import passive2 from './Talent_Dominance_of_Earth.png'
import passive3 from './Talent_Arcanum_of_Crystal.png'
//import DisplayPercent from '../../../Components/DisplayPercent'

//AUTO

const hitPercent = [
  [],
  [],
  [],
  [],
]

const charged_atk_spinnning = []
const charged_atk_final = []
const plunge_dmg = []
const plunge_dmg_low = []
const plunge_dmg_high = []

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
  name: "Zhongli",
  cardImg: card,
  thumbImg: thumb,
  star: 5,
  elementKey: "geo",
  weaponTypeKey: "polearm",
  gender: "M",
  constellationName: "Lapis Dei",
  titles: ["Vago Mundo"],
  baseStat: {
    hp_base: [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695],
    atk_character_base: [20, 51, 67, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251],
    def_base: [57, 149, 198, 297, 332, 382, 428, 479, 514, 564, 699, 651, 686, 738]
  },
  specializeStat: {
    key: "geo_ele_dmg_bonus",
    value: [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8]
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
          finalVal: (tlvl, stats) => (percentArr[tlvl] / 100) * stats.norm_atk_avg_dmg
        }))
      },
      charged: {
        text: <span>TEMPLATE</span>,
        fields: [{
          text: `Spinning DMG`,
          basicVal: (tlvl) => charged_atk_spinnning[tlvl] + "%",
          finalVal: (tlvl, stats) => (charged_atk_spinnning[tlvl] / 100) * stats.char_atk_avg_dmg
        }, {
          text: `Spinning Final DMG`,
          basicVal: (tlvl) => charged_atk_final[tlvl] + "%",
          finalVal: (tlvl, stats) => (charged_atk_final[tlvl] / 100) * stats.char_atk_avg_dmg
        }, {
          text: `Stamina Cost`,
          value: `40/s`,
        }, {
          text: `Max Duration`,
          value: `5s`,
        }]
      },
      plunge: {
        text: <span>TEMPLATE</span>,
        fields: [{
          text: `Plunge DMG`,
          basicVal: (tlvl) => plunge_dmg[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dmg[tlvl] / 100) * stats.plunge_avg_dmg
        }, {
          text: `Low Plunge DMG`,
          basicVal: (tlvl) => plunge_dmg_low[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dmg_low[tlvl] / 100) * stats.plunge_avg_dmg
        }, {
          text: `High Plunge DMG`,
          basicVal: (tlvl) => plunge_dmg_high[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dmg_high[tlvl] / 100) * stats.plunge_avg_dmg
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
        finalVal: (tlvl, s) => (breastplateStats.skill_dmg[tlvl] / 100) * s.skill_avg_dmg,
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
        finalVal: (tlvl, s) => (sweepingTimeStats.burst_dmg[tlvl] / 100) * s.burst_avg_dmg,
      }, {
        text: "TEMPLATE",
        basicVal: (tlvl) => sweepingTimeStats.skill_dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (sweepingTimeStats.skill_dmg[tlvl] / 100) * s.burst_avg_dmg,
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
