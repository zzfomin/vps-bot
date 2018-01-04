const kb = require('./keyboard-buttons')
module.exports = {
  home: [
    [kb.home.currency, kb.home.razdels, kb.home.reg],
    [kb.home.favourite]
  ],
  razdel: [
    [kb.razdel.razvl, kb.razdel.mag, kb.razdel.avto],
    [kb.razdel.poest, kb.razdel.zdorov, kb.razdel.finance],	
    [kb.razdel.museum, kb.razdel.sdetmi, kb.razdel.suvenir],
    [kb.razdel.ritual, kb.razdel.admin, kb.razdel.yurid],	
    [kb.razdel.suvenir, kb.razdel.zdorov, kb.razdel.cat],
    [kb.back]
  ],
  poest: [
    [kb.poest.poest_cafe, kb.poest.poest_bar, kb.poest.poest_rest],
    [kb.back, kb.back_raz]
  ],
   mag: [
    [kb.mag.mag_set, kb.mag.mag_prod, kb.mag.mag_hoz],
    [kb.back, kb.back_raz]
  ],
   avto: [
    [kb.avto.avto_zaprav, kb.avto.avto_serv, kb.avto.avto_zap],
    [kb.back, kb.back_raz]
  ],
   rest: [
    [kb.rest.rest_gost, kb.rest.rest_basy, kb.rest.rest_pans],
    [kb.back, kb.back_raz]
  ],
   sdetmi: [
    [kb.sdetmi.sdetmi_plo, kb.sdetmi.sdetmi_game, kb.sdetmi.sdetmi_atr],
    [kb.back, kb.back_raz]
  ],
    sport: [
    [kb.sport.sport_plo, kb.sport.sport_sorev, kb.sport.sport_sekc],
    [kb.back, kb.back_raz]
  ],   
    kultur: [
    [kb.kultur.kultur_bibl, kb.kultur.kultur_vyst, kb.kultur.kultur_konc],
    [kb.back, kb.back_raz]
  ],   
    obrazov: [
    [kb.obrazov.obrazov_skol, kb.obrazov.obrazov_drug, kb.obrazov.obrazov_adm],
    [kb.back, kb.back_raz]
  ],   
    zdorov: [
    [kb.zdorov.zdorov_aptek, kb.zdorov.zdorov_polik, kb.zdorov.zdorov_skor],
    [kb.back, kb.back_raz]
  ],  
    finance: [
    [kb.finance.finance_exchange, kb.finance.finance_bank, kb.finance.finance_currency],
    [kb.back, kb.back_raz]
  ],  
    ritual: [
    [kb.ritual.ritual_cerk, kb.ritual.ritual_klad],
	[kb.ritual.ritual_uslugi, kb.ritual.ritual_zags],
    [kb.back, kb.back_raz]
  ],  
    admin: [
    [kb.admin.admin_ray, kb.admin.admin_gor, kb.admin.admin_mil],
	[kb.admin.admin_pens, kb.admin.admin_nalog, kb.admin.admin_mcf],
    [kb.back, kb.back_raz]
  ],  
    yurid: [
    [kb.yurid.yurid_sud, kb.yurid.yurid_prok, kb.yurid.yurid_adv],
	[kb.yurid.yurid_not, kb.yurid.yurid_pris],
    [kb.back, kb.back_raz]
  ],  
    krasa: [
    [kb.krasa.krasa_parik, kb.krasa.krasa_manik, kb.krasa.krasa_atele],
    [kb.back, kb.back_raz]
  ],
     zoo: [
    [kb.zoo.zoo_veter, kb.zoo.zoo_korm, kb.zoo.zoo_drug],
    [kb.back, kb.back_raz]
  ]//,
 // tochkas: [
 //   [
 //     {
 //       text: 'Отправить местоположение',
 //       request_location: true
 //     }
 //   ],
 //   [kb.back, kb.back_raz]
 // ]
}