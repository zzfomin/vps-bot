const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const geolib = require('geolib')
const _ = require('lodash')
const request = require('request')
const fs = require('fs')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
const database = require('../database.json')

helper.logStart()

mongoose.Promise = global.Promise
mongoose.connect(config.DB_URL, {
  useMongoClient: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

require('./models/tochka.model')
require('./models/razdel.model')
require('./models/user.model')
require('./models/vizit.model')

//const g_date = Date.now()

var myLocation
var Loc = 0

const Tochka = mongoose.model('tochkas')
const Razdel = mongoose.model('razdels')
const User = mongoose.model('users')
const Vizit = mongoose.model('vizits')

//const
// database.films.forEach(f => new Film(f).save().catch(e => console.log(e)))
// database.cinemas.forEach(c => new Cinema(c).save().catch(e => console.log(e)))
// database.tochkas.forEach(f => new Tochka(f).save().catch(e => console.log(e)))
//database.tochkas.forEach(f => new Tochka(f).save().catch(e => console.log(e)))

const ACTION_TYPE = {
  TOGGLE_FAV_FILM: 'tff',
  SHOW_CINEMAS: 'sc',
  SHOW_CINEMAS_MAP: 'scm',
  SHOW_FILMS: 'sf'
}

// =============================================

const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

bot.on('message', msg => {console.log('Работает', msg.from.first_name)

  const chatId = helper.getChatId(msg)

//console.log(msg)



  switch (msg.text) {
      //console.log(msg)
    //case kb.home.favourite:
    //  showFavouriteFilms(chatId, msg.from.id)
    //  break

case kb.home.razdels:

   // bot.sendMessage(chatId, `Отправить местоположение`, {
   //     reply_markup: {
   //         keyboard: keyboard.geo_mesto
   //     }
        bot.sendMessage(chatId, `Выберите раздел поиска\nЗарегистрируйте свое местоположение для поиска удобного маршрута:`, {
              reply_markup: {keyboard: keyboard.razdel}
          })
      break
    case kb.razdel.poest:
      bot.sendMessage(chatId, `Выберите где:`, {
        reply_markup: {keyboard: keyboard.poest}
      })
        //console.log(chatId) // {uuid: cinemaUuid}
//        Vizit.findOne({telegramId: chatId}).then(vizit => {
//            //bot.sendMessage(chatId, `Кинотеатр ${cinema.name}`)
//            console.log(vizit)
//  })

          //Vizit.find({telegramId: chatId}).sort({curdate: -1}).skip(1).limit(1).then(vizit => {
   // const tekViz =
    Vizit.find({telegramId: chatId}).sort({curdate: -1}).skip(1).limit(1).then(tek_vizit => {
    //vizit.update({glavys: «Поесть»})
        //tek_vizit.update({glavys: 'Поесть'})
    //const $tekViz = Vizit.find({fio: "Dmitry Shlykov"})

        const p = tek_vizit[0]
        p.glavys.concat('питание;')
        //concat(p.glavys, "питание;")
    //console.log(JSON.stringify(p.glavys, null, 2))

      p.save()

       // console.log(JSON.stringify(p, null, 2))
        //console.log(tek_vizit[{fio: ''}])  // map

   // const tekV = tek_vizit.map(f => {
   //     const cap = ${f.fio}
   // })

   // console.log(cap)
//
 //   db.vizits.update(
 //       { _id: '5a4946cce3c3af0e34ee6be1' },
 //       { $push: { glavys: '89jjjjjjjj' } }
 //   )
  }
)
      break

case kb.home.currency:
    sendCurrencyScreen(chatId)
    break



case kb.razdel.avto:
          bot.sendMessage(chatId, `Выберите:`, {
              reply_markup: {keyboard: keyboard.avto}
          })
          break
case kb.razdel.zdorov:
          bot.sendMessage(chatId, `Выберите:`, {
              reply_markup: {keyboard: keyboard.zdorov}
          })
          break
case kb.razdel.finance:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.finance}
})
break
case kb.razdel.transp:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.transp}
})
break
case kb.razdel.rest:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.rest}
})
break
case kb.razdel.ritual:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.ritual}
})
break

case kb.razdel.krasa:
          bot.sendMessage(chatId, `Выберите:`, {
              reply_markup: {keyboard: keyboard.krasa}
          })
          break
case kb.razdel.eksk:
          bot.sendMessage(chatId, `Выберите:`, {
              reply_markup: {keyboard: keyboard.eksk}
          })
          break
case kb.razdel.museum:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.museum}
})
break
case kb.razdel.sdetmi:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.sdetmi}
})
break
case kb.razdel.admin:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.admin}
})
break
case kb.razdel.obrazov:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.obrazov}
})
break
case kb.razdel.kultur:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.kultur}
})
break
case kb.razdel.yurid:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.yurid}
})
break
case kb.razdel.suvenir:
bot.sendMessage(chatId, `Выберите:`, {
    reply_markup: {keyboard: keyboard.suvenir}
})
break









case kb.poest.poest_cafe:
	//console.log(tochkas)
      if (Loc == 1) {
        //console.log(Loc)
        getTochkasInCoord(chatId, myLocation, {type: 'poest_cafe'}, {type_bak: 'poest'})
          }
      else
    sendTochkasByQuery(chatId, {type: 'poest_cafe'}, {type_bak: 'poest'})
      break

case kb.razdel.mag:
          //console.log(msg.text)
          bot.sendMessage(chatId, `Выберите:`, {
              reply_markup: {keyboard: keyboard.mag}
          })
          break


case kb.mag.mag_set:
        //console.log(msg.text)
      if (Loc == 1) {
        //console.log(Loc)
        getTochkasInCoord(chatId, myLocation, {type: 'mag_set'}, {type_bak: 'mag'})
          }
      else {
      //console.log(Loc)
        sendTochkasByQuery(chatId, {type: 'mag_set'}, {type_bak: 'mag'})
          }
      break
case kb.mag.mag_prod:
      if (Loc == 1) {
        //console.log(Loc)
        getTochkasInCoord(chatId, myLocation, {type: 'mag_prod'}, {type_bak: 'mag'})
          }
      else
    sendTochkasByQuery(chatId, {type: 'mag_prod'}, {type_bak: 'mag'})
      break
      case kb.mag.mag_bak:
      if (Loc == 1) {
        //console.log(Loc)
        getTochkasInCoord(chatId, myLocation, {type: 'mag_bak'}, {type_bak: 'mag'})
          }
     else

      sendTochkasByQuery(chatId, {type: 'mag_bak'}, {type_bak: 'mag'})
      break

//    case kb.film.comedy:
//      sendFilmsByQuery(chatId, {type: 'comedy'})
//      break
//    case kb.film.action:
//      sendFilmsByQuery(chatId, {type: 'action'})
//      break
//    case kb.film.random:
//      sendFilmsByQuery(chatId, {})
//      break
   // case kb.home.tochas:
   //   bot.sendMessage(chatId, `Отправить местоположение`, {
   //     reply_markup: {
   //       keyboard: keyboard.cinemas
   //     }
   //   })
   //   break
case kb.back:
      bot.sendMessage(chatId, `Что хотите посмотреть?`, {
        reply_markup: {keyboard: keyboard.home}
      })
    break

case kb.back_raz:
        bot.sendMessage(chatId, `Выберите раздел поиска\nЗарегистрируйте свое местоположение для поиска удобного маршрута`, {
            reply_markup: {keyboard: keyboard.razdel}
        })
        break


  }

  if (msg.location) {
     Loc = 1
    //console.log(msg.location)
      //console.log(Loc)
      myLocation = msg.location
      //console.log(myLocation)
//    getTochkasInCoord(chatId, msg.location, {type: 'mag_set'}, {type_bak: 'mag'})
  }
})

bot.on('callback_query', query => {

    //console.log('777')
//console.log(query)

const userId = query.from.id

if ( query.data == 'USD' || query.data == 'EUR' )

{
    const base = query.data
    const symbol = 'RUB'

    bot.answerCallbackQuery({
        callback_query_id: query.id,
        text: `Вы выбрали ${base}`
    })

    //console.log('${base}')

    request(`http://api.fixer.io/latest?symbols=${symbol}&base=${base}`, (error, response, body) => {

        if (error) throw new Error(error)

        if (response.statusCode === 200) {

    const currencyData = JSON.parse(body)

    const html = `<b>1 ${base}</b> - <em>${currencyData.rates[symbol]} ${symbol}</em>`

    bot.sendMessage(query.message.chat.id, html, {
        parse_mode: 'HTML'
    })
}
})
}

else
{
let data
try {
    //console.log('888')

    data = JSON.parse(query.data)
} catch (e) {
    throw new Error('Data is not an object')
}

const {type} = data

//console.log(data)

if (type === ACTION_TYPE.SHOW_CINEMAS_MAP) {
    const {lat, lon} = data
    bot.sendLocation(query.message.chat.id, lat, lon)
} else if (type === ACTION_TYPE.SHOW_CINEMAS) {
    sendCinemasByQuery(userId, {uuid: {'$in': data.cinemaUuids}})
} else if (type === ACTION_TYPE.TOGGLE_FAV_FILM) {
    toggleFavouriteFilm(userId, query.id, data)
} else if (type === ACTION_TYPE.SHOW_FILMS) {
    sendFilmsByQuery(userId, {uuid: {'$in': data.filmUuids}})
}

}  //

}
)

bot.on('inline_query', query => {
    //console.log('смотрим фильм')
  Tochka.find({}).then(tochkas => {
    const results = tochkas.map(f => {
      const caption = `Название: ${f.name}\nГод: ${f.year}\nАдрев: ${f.address}\nОсобенность: ${f.osob_1}\nЕще: ${f.osob_2}`
      return {
        id: f.uuid,
        type: 'photo',
        photo_url: f.picture,
        thumb_url: f.picture,
        caption: caption,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `Сайт: ${f.name}`,
                url: f.link
              }
            ]
          ]
        }
      }
    })

    bot.answerInlineQuery(query.id, results, {
      cache_time: 0
    })
  })
})

bot.onText(/\/start/, msg => {

  const text = `Здравствуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`

    //New
    const text_viz = `${msg.from.first_name} ${msg.from.last_name}`

    const viz_id = helper.getChatId(msg)

    const curdate = Date.now()

    //g_date = curdate

    //console.log(g_date)
    //Sconsole.log(curdate)

//new Tochka(f).save().catch(e => console.log(e))

    vizitPromise =
        new Vizit({
        telegramId: viz_id,
        fio: text_viz,
        curdate:  curdate
    }).save().catch(e => console.log(e))
//console.log(vizitPromise)
//const ob_id = vizitPromise.curdate
//console.log(ob_id)

    bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
        keyboard: keyboard.home
    }
  })

})

// bot.onText(/\/f(.+)/, (msg, [source, match]) => {
bot.onText(/\/c(.+)/, (msg, [source, match]) => {
    //console.log('на ф')
//console.log(source)
//console.log(match)

  const tochkaUuid = helper.getItemUuid(source)
  const chatId = helper.getChatId(msg)

//console.log(tochkaUuid)

  Promise.all([
    Tochka.findOne({uuid: tochkaUuid}),
    User.findOne({telegramId: msg.from.id})
  ]).then(([tochka, user]) => {

      //console.log(tochka)

    let isFav = false
    
    if (user) {
      isFav = user.tochkas.indexOf(tochka.uuid) !== -1
    }
    
    const favText = isFav ? 'Удалить из избранного' : 'Добавить в избранное'
    
    const caption = `Название: ${tochka.name}\nГод: ${tochka.year}\nАдрес: ${tochka.address}\nОсобенность: ${tochka.osob_1}\nЕще: ${tochka.osob_2}`

//console.log('отладка')
//console.log(tochka.picture)
//console.log(favText)

    bot.sendPhoto(chatId, tochka.picture, {
      caption: caption,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: favText,
              callback_data: JSON.stringify({
                type: ACTION_TYPE.TOGGLE_FAV_FILM,
                filmUuid: tochka.uuid,
                isFav: isFav
              })
            },
            {
              text: 'Показать рекомендуемые',
              callback_data: JSON.stringify({
                type: ACTION_TYPE.SHOW_CINEMAS,
                cinemaUuids: tochka.glavys
              })
            }
          ],
          [
            {
              text: `Сайт ${tochka.name}`,
              //  callback_data: tochka.uuid
              url: tochka.link
            }
          ]

        ]
      }
    })
  })
  
})








bot.onText(/\/f(.+)/, (msg, [source, match]) => {
  //  console.log('на ф')
//console.log(source)
//console.log(match)

const tochkaUuid = helper.getItemUuid(source)
const chatId = helper.getChatId(msg)

//console.log(tochkaUuid)

Promise.all([
    Tochka.findOne({uuid: tochkaUuid}),
    User.findOne({telegramId: msg.from.id})
]).then(([tochka, user]) => {

    //console.log(tochka)

let isFav = false

if (user) {
    isFav = user.tochkas.indexOf(tochka.uuid) !== -1
}

const favText = isFav ? 'Удалить из избранного' : 'Добавить в избранное'

const caption = `Название: ${tochka.name}\nГод: ${tochka.year}\nАдрес: ${tochka.address}\nОсобенность: ${tochka.osob_1}\nЕще: ${tochka.osob_2}`

//console.log('отладка')
//console.log(tochka.picture)
//console.log(favText)

bot.sendPhoto(chatId, tochka.picture, {
    caption: caption,
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: favText,
                    callback_data: JSON.stringify({
                        type: ACTION_TYPE.TOGGLE_FAV_FILM,
                        filmUuid: tochka.uuid,
                        isFav: isFav
                    })
                },
                {
                    text: 'Показать рекомендуемые',
                    callback_data: JSON.stringify({
                        type: ACTION_TYPE.SHOW_CINEMAS,
                        cinemaUuids: tochka.glavys
                    })
                }
            ],
            [
                {
                    text: `Сайт ${tochka.name}`,
                    //  callback_data: tochka.uuid
                    url: tochka.link
                }
            ]

        ]
    }
})
})

})















bot.onText(/\/ccc(.+)/, (msg, [source, match]) => {
  //console(source)
    const tochkaUuid = helper.getItemUuid(source)
  const chatId = helper.getChatId(msg)

  Tochka.findOne({uuid: tochkaUuid}).then(tochka => {

    bot.sendMessage(chatId, `Объект ${tochka.name}`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: tochka.name,
              url: tochka.url
            },
            {
              text: 'Показать на карте',
              callback_data: JSON.stringify({
                type: ACTION_TYPE.SHOW_CINEMAS_MAP,
                lat: tochka.location.latitude,
                lon: tochka.location.longitude
              })
            }
          ],
          [
            {
              text: 'Показать фильмы',
              callback_data: JSON.stringify({
                type: ACTION_TYPE.SHOW_FILMS,
                filmUuids: tochka.films
              })
            }
          ]
        ]
      }
    })
  })
})



// ===============================







function sendFilmsByQuery(chatId, query) {
  Film.find(query).then(films => {
    const html = films.map((f, i) => {
      return `<b>${i + 1}</b> ${f.name} - /f${f.uuid}`
    }).join('\n')

    sendHTML(chatId, html, 'films')
  })
}

function sendHTML(chatId, html, kbName = null) {
  const options = {
    parse_mode: 'HTML'
  }

  if (kbName) {
    options['reply_markup'] = {
      keyboard: keyboard[kbName]
    }
  }

  bot.sendMessage(chatId, html, options)
}

function getCinemasInCoord(chatId, location) {

  Cinema.find({}).then(cinemas => {

    cinemas.forEach(c => {
      c.distance = geolib.getDistance(location, c.location) / 1000
    })

    cinemas = _.sortBy(cinemas, 'distance')

    const html = cinemas.map((c, i) => {
      return `<b>${i + 1}</b> ${c.name}. <em>расстояние</em> - <strong>${c.distance}</strong> км. /c${c.uuid}`
    }).join('\n')

    sendHTML(chatId, html, 'home')
  })

}



function getTochkasInCoord(chatId, location, query, type_bak) {

    Tochka.find(query).then(tochkas => {

        tochkas.forEach(c => {
        c.distance = geolib.getDistance(location, c.location) / 1000

   // console.log(chatId)

})

    tochkas = _.sortBy(tochkas, 'distance')

    const html = tochkas.map((c, i) => {
        return `<b>${i + 1}</b> ${c.name}. <em>расстояние</em> - <strong>${c.distance}</strong> км. /c${c.uuid}`
    }).join('\n')

    sendHTML(chatId, html, type_bak)
})

}


function toggleFavouriteFilm(userId, queryId, {filmUuid, isFav}) {

  let userPromise

  User.findOne({telegramId: userId})
    .then(user => {
      if (user) {
        if (isFav) {
          user.films = user.films.filter(fUuid => fUuid !== filmUuid)
        } else {
          user.films.push(filmUuid)
        }
        userPromise = user
      } else {
        userPromise = new User({
          telegramId: userId,
          films: [filmUuid]
        })
      }

      const answerText = isFav ? 'Удалено' : 'Добавлено'

      userPromise.save().then(_ => {
        bot.answerCallbackQuery({
          callback_query_id: queryId,
          text: answerText
        })
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

function showFavouriteFilms(chatId, telegramId) {
  User.findOne({telegramId})
    .then(user => {
      if (user) {
        Film.find({uuid: {'$in': user.films}}).then(films => {
          let html

          if (films.length) {
            html = films.map((f, i) => {
              return `<b>${i + 1}</b> ${f.name} - <b>${f.rate}</b> (/f${f.uuid})`
            }).join('\n')
          } else {
            html = 'Вы пока ничего не добавили'
          }

          sendHTML(chatId, html, 'home')
        }).catch(e => console.log(e))
      } else {
        sendHTML(chatId, 'Вы пока ничего не добавили', 'home')
      }

    }).catch(e => console.log(e))
}

function sendCinemasByQuery(userId, query) {
  Cinema.find(query).then(cinemas => {

    const html = cinemas.map((c, i) => {
      return `<b>${i + 1}</b> ${c.name} - /c${c.uuid}`
    }).join('\n')

    sendHTML(userId, html, 'home')
  })

}



function sendTochkasByQuery(chatId, query, type_bak) {
    Tochka.find(query).then(tochkas => {
        //console.log(tochkas)
        const html = tochkas.map((f, i) => {
            //return `<b>${i + 1}</b> ${f.name} - /f${f.uuid}`
            return `<b>${i + 1}</b> ${f.name}, ${f.address} - /f${f.uuid}`
        }).join('\n')
    //console.log(html)
    sendHTML(chatId, html, type_bak) //  'mag'   tochkas
    //console.log(html)
    //console.log(curdate)


})
}


function sendHTML(chatId, html, kbName = null) {
    //console.log(kbName)
    const options = {
        parse_mode: 'HTML'
    }
    if (kbName) {
        options['reply_markup'] = {
            keyboard: keyboard[kbName]
        }
    }
    bot.sendMessage(chatId, html, options)
}

function sendCurrencyScreen(chatId) {

    bot.sendMessage(chatId, `Выберите тип валюты:`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Доллар',
                        callback_data: 'USD'
                    }
                ],
                [
                    {
                        text: 'Евро',
                        callback_data: 'EUR'
                    }
                ]
            ]
        }
    })

}
