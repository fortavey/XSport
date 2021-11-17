import { makeObservable, observable, computed } from 'mobx'

class MainStore {
  mainData = {
    football: {
      id: 0,
      name: {
        RU: 'футбол',
        EN: 'football',
      },
      categories: [
        {
          name: {
            RU: 'Игроки',
            EN: 'Players',
          },
          list: [
            {
              img: require('../../assets/andres_iniesta.png'),
              RU: 'Андрес Иньеста',
              EN: 'Andres Iniesta',
            },
            {
              img: require('../../assets/buffon.png'),
              RU: 'Буффон',
              EN: 'Buffon',
            },
            {
              img: require('../../assets/cristiano_ronaldo.png'),
              RU: 'Криштиано Роналду',
              EN: 'Cristiano Ronaldo',
            },
            {
              img: require('../../assets/david_backham.png'),
              RU: 'Девид Бекхем',
              EN: 'David Backham',
            },
            {
              img: require('../../assets/david_villa.png'),
              RU: 'Давид Вилья',
              EN: 'David Villa',
            },
            {
              img: require('../../assets/diego_maradona.png'),
              RU: 'Диего Марадонна',
              EN: 'Diego Maradona',
            },
            {
              img: require('../../assets/iker_casillas.png'),
              RU: 'Икер Касильяс',
              EN: 'Iker Casillas',
            },
            {
              img: require('../../assets/leo_messi.png'),
              RU: 'Лео Месси',
              EN: 'Leo Messi',
            },
            {
              img: require('../../assets/oliver_kahn.png'),
              RU: 'Оливер Кан',
              EN: 'Oliver Kahn',
            },
            {
              img: require('../../assets/paolo_maldini.png'),
              RU: 'Паоло Мальдини',
              EN: 'Paolo Maldini',
            },
            {
              img: require('../../assets/pele.png'),
              RU: 'Пеле',
              EN: 'Pele',
            },
            {
              img: require('../../assets/roberto_carlos.png'),
              RU: 'Роберто Карлос',
              EN: 'Roberto Carlos',
            },
            {
              img: require('../../assets/ronaldo.png'),
              RU: 'Роналдо',
              EN: 'Ronaldo',
            },
            {
              img: require('../../assets/xavi.png'),
              RU: 'Хави',
              EN: 'Xavi',
            },
            {
              img: require('../../assets/zinedine_zidane.png'),
              RU: 'Зинедин Зидан',
              EN: 'Zinedine Zidane',
            },
          ],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [
            {
              img: require('../../assets/real_madrid.png'),
              RU: 'Реал Мадрид',
              EN: 'Real Madrid',
            },
            {
              img: require('../../assets/barselona.png'),
              RU: 'Барселона',
              EN: 'Barselona',
            },
            {
              img: require('../../assets/valencia.png'),
              RU: 'Валенсия',
              EN: 'Valencia',
            },
            {
              img: require('../../assets/atletico_madrid.png'),
              RU: 'Атлетико Мадрид',
              EN: 'Atletico Madrid',
            },
            {
              img: require('../../assets/sevilla.png'),
              RU: 'Севилья',
              EN: 'Sevilla',
            },
            {
              img: require('../../assets/milan.png'),
              RU: 'Милан',
              EN: 'Milan',
            },
            {
              img: require('../../assets/inter.png'),
              RU: 'Интер',
              EN: 'Inter',
            },
            {
              img: require('../../assets/juventus.png'),
              RU: 'Ювентус',
              EN: 'Juventus',
            },
            {
              img: require('../../assets/roma.png'),
              RU: 'Рома',
              EN: 'Roma',
            },
            {
              img: require('../../assets/manchester_united.png'),
              RU: 'Манчестер Юнайтед',
              EN: 'Manchester United',
            },
            {
              img: require('../../assets/liverpool.png'),
              RU: 'Ливерпуль',
              EN: 'Liverpool',
            },
            {
              img: require('../../assets/chelsea.png'),
              RU: 'Челси',
              EN: 'Chelsea',
            },
            {
              img: require('../../assets/arsenal.png'),
              RU: 'Арсенал',
              EN: 'Arsenal',
            },
          ],
        },
        {
          name: {
            RU: 'Сборные',
            EN: 'National teams',
          },
          list: [
            {
              img: require('../../assets/russia.png'),
              RU: 'Россия',
              EN: 'Russia',
            },
            {
              img: require('../../assets/england.png'),
              RU: 'Англия',
              EN: 'England',
            },
            {
              img: require('../../assets/spain.png'),
              RU: 'Испания',
              EN: 'Spain',
            },
            {
              img: require('../../assets/itali.png'),
              RU: 'Италия',
              EN: 'Itali',
            },
            {
              img: require('../../assets/germany.png'),
              RU: 'Германия',
              EN: 'Germany',
            },
            {
              img: require('../../assets/netherlands.png'),
              RU: 'Голландия',
              EN: 'Netherlands',
            },
            {
              img: require('../../assets/brasil.png'),
              RU: 'Бразилия',
              EN: 'Brasil',
            },
            {
              img: require('../../assets/argentina.png'),
              RU: 'Аргентина',
              EN: 'Argentina',
            },
            {
              img: require('../../assets/mexico.png'),
              RU: 'Мексика',
              EN: 'Mexico',
            },
            {
              img: require('../../assets/uruguay.png'),
              RU: 'Уругвай',
              EN: 'Uruguay',
            },
            {
              img: require('../../assets/chile.png'),
              RU: 'Чили',
              EN: 'Chile',
            },
            {
              img: require('../../assets/japan.png'),
              RU: 'Япония',
              EN: 'Japan',
            },
            {
              img: require('../../assets/australia.png'),
              RU: 'Австралия',
              EN: 'Australia',
            },
            {
              img: require('../../assets/france.png'),
              RU: 'Франция',
              EN: 'France',
            },
          ],
        },
        {
          name: {
            RU: 'Лиги',
            EN: 'Leagues',
          },
          list: [
            {
              img: require('../../assets/laliga.png'),
              RU: 'Ла Лига (Испания)',
              EN: 'LaLiga (Spain)',
            },
            {
              img: require('../../assets/serie_A.png'),
              RU: 'Серия А (Италия)',
              EN: 'Serie A (Italy)',
            },
            {
              img: require('../../assets/premier_league.png'),
              RU: 'Премьер Лига (Англия)',
              EN: 'Premier League (England)',
            },
            {
              img: require('../../assets/bundesliga.png'),
              RU: 'Бундеслига (Германия)',
              EN: 'Bundesliga (Germany)',
            },
            {
              img: require('../../assets/russian_premier_league.png'),
              RU: 'Премьер Лига (Россия)',
              EN: 'Russian Premier League',
            },
            {
              img: require('../../assets/ligue_1.png'),
              RU: 'Лига 1 (Франция)',
              EN: 'Ligue 1 (France)',
            },
            {
              img: require('../../assets/eredivisie.png'),
              RU: 'Эредивизи (Голландия)',
              EN: 'Eredivisie (Netherlands)',
            },
            {
              img: require('../../assets/braziliya_seriya_a.png'),
              RU: 'Серия А (Бразилия)',
              EN: 'Serie A (Brasil)',
            },
            {
              img: require('../../assets/superliga.png'),
              RU: 'Суперлига (Аргентина)',
              EN: 'Superliga (Argentina)',
            },
            {
              img: require('../../assets/MLS.png'),
              RU: 'MLS (USA)',
              EN: 'MLS (США)',
            },
            {
              img: require('../../assets/liga_MX.png'),
              RU: 'Лига MX (Мексика)',
              EN: 'Liga MX (Mexico)',
            },
            {
              img: require('../../assets/super_league.png'),
              RU: 'Супер Лига (Китай)',
              EN: 'Super League (China)',
            },
          ],
        },
      ],
    },
    basketball: {
      id: 1,
      name: {
        RU: 'баскетбол',
        EN: 'basketball',
      },
      categories: [
        {
          name: {
            RU: 'Игроки',
            EN: 'Players',
          },
          list: [
            {
              img: require('../../assets/karl_malone.png'),
              RU: 'Карл Мэлоун',
              EN: 'Karl Malone',
            },
            {
              img: require('../../assets/lebron_james.png'),
              RU: 'Леброн Джеймс',
              EN: 'LeBron James',
            },
            {
              img: require('../../assets/kobe_bryant.png'),
              RU: 'Коби Брайант',
              EN: 'Kobe Bryant',
            },
            {
              img: require('../../assets/michael_jordan.jpg'),
              RU: 'Майкл Джордан',
              EN: 'Michael Jordan',
            },
            {
              img: require('../../assets/dirk_nowitzki.jpg'),
              RU: 'Дирк Новицки',
              EN: 'Dirk Nowitzki',
            },
            {
              img: require('../../assets/wilton_chamberlain.jpg'),
              RU: 'Уилт Чемберлен',
              EN: 'Wilton Chamberlain',
            },
            {
              img: require('../../assets/shaquille_oneal.jpg'),
              RU: "Шакил О'Нил",
              EN: "Shaquille O'Neal",
            },
            {
              img: require('../../assets/carmelo_anthony.jpg'),
              RU: 'Кармело Энтони',
              EN: 'Carmelo Anthony',
            },
            {
              img: require('../../assets/mozes_mjeloun.jpg'),
              RU: 'Мозес Мэлоун',
              EN: 'Moses Malone',
            },
            {
              img: require('../../assets/dominique_wilkins.jpg'),
              RU: 'Доминик Уилкинс',
              EN: 'Dominique Wilkins',
            },
            {
              img: require('../../assets/timothy_duncan.jpg'),
              RU: 'Тим Данкан',
              EN: 'Timothy Duncan',
            },
            {
              img: require('../../assets/paul_pierce.jpg'),
              RU: 'Пол Пирс',
              EN: 'Paul Pierce',
            },
            {
              img: require('../../assets/kevin_garnett.jpg'),
              RU: 'Кевин Гарнетт',
              EN: 'Kevin Garnett',
            },
            {
              img: require('../../assets/vince_carter.jpg'),
              RU: 'Винс Картер',
              EN: 'Vincent Carter',
            },
            {
              img: require('../../assets/dwyane_wade.jpg'),
              RU: 'Дуэйн Уэйд',
              EN: 'Dwyane Wade',
            },
            {
              img: require('../../assets/anthony_davis.jpg'),
              RU: 'Энтони Дэвис',
              EN: 'Anthony Davis',
            },
          ],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [
            {
              img: require('../../assets/boston_celtics.png'),
              RU: 'Бостон Селтикс',
              EN: 'Boston Celtics',
            },
            {
              img: require('../../assets/chicago_bulls.png'),
              RU: 'Чикаго Буллз',
              EN: 'Chicago Bulls',
            },
            {
              img: require('../../assets/miami_heat.png'),
              RU: 'Майами Хит',
              EN: 'Miami Heat',
            },
            {
              img: require('../../assets/orlando_magic.png'),
              RU: 'Орландо Мэджик',
              EN: 'Orlando Magic',
            },
            {
              img: require('../../assets/golden_state_warriors.png'),
              RU: 'Голден Стэйт Уорриорз',
              EN: 'Golden State Warriors',
            },
            {
              img: require('../../assets/los_angeles_lakers.png'),
              RU: 'Лос-Анджелес Лейкерс',
              EN: 'Los Angeles Lakers',
            },
            {
              img: require('../../assets/sacramento_king.png'),
              RU: 'Сакраменто Кингз',
              EN: 'Sacramento Kings',
            },
            {
              img: require('../../assets/new_york_knicks.png'),
              RU: 'Нью-Йорк Никс',
              EN: 'New York Knicks',
            },
            {
              img: require('../../assets/detroit_pistons.png'),
              RU: 'Детройт Пистонс',
              EN: 'Detroit Pistons',
            },
            {
              img: require('../../assets/cleveland_cavaliers.png'),
              RU: 'Кливленд Кавальерс',
              EN: 'Cleveland Cavaliers',
            },
            {
              img: require('../../assets/washington_wizards.png'),
              RU: 'Вашингтон Уизардс',
              EN: 'Washington Wizards',
            },
            {
              img: require('../../assets/phoenix_suns.png'),
              RU: 'Финикс Санз',
              EN: 'Phoenix Suns',
            },
            {
              img: require('../../assets/san_antonio.png'),
              RU: 'Сан-Антонио Спёрс',
              EN: 'San Antonio Spurs',
            },
            {
              img: require('../../assets/huston_rockets.png'),
              RU: 'Хьюстон Рокетс',
              EN: 'Houston Rockets',
            },
            {
              img: require('../../assets/toronto_raptors.png'),
              RU: 'Торонто Рэпторс',
              EN: 'Toronto Raptors',
            },
          ],
        },
      ],
    },
    hockey: {
      id: 2,
      name: {
        RU: 'хокей',
        EN: 'hockey',
      },
      categories: [
        {
          name: {
            RU: 'Игроки',
            EN: 'Players',
          },
          list: [
            {
              img: require('../../assets/waine_gretz.jpg'),
              RU: 'Уэйн Гретцки',
              EN: 'Wayne Gretzky',
            },
            {
              img: require('../../assets/gordon_how.jpeg'),
              RU: 'Гордон Хоу',
              EN: 'Gordon Howe',
            },
            {
              img: require('../../assets/Mario_Lemieux.jpg'),
              RU: 'Марио Лемьё',
              EN: 'Mario Lemieux',
            },
            {
              img: require('../../assets/mark-messier.jpg'),
              RU: 'Марк Мессье',
              EN: 'Mark Messier',
            },
            {
              img: require('../../assets/ray_bourge.jpg'),
              RU: 'Рэй Бурк',
              EN: 'Raymond Bourque',
            },
            {
              img: require('../../assets/patrick_roy.jpg'),
              RU: 'Патрик Руа',
              EN: 'Patrick Roy',
            },
            {
              img: require('../../assets/paul_coffe.jpg'),
              RU: 'Пол Коффи',
              EN: 'Paul Coffey',
            },
            {
              img: require('../../assets/Jaromir_Jagr.jpg'),
              RU: 'Яромир Ягр',
              EN: 'Jaromir Jagr',
            },
            {
              img: require('../../assets/eric_lindros.jpg'),
              RU: 'Эрик Линдрос',
              EN: 'Eric Lindros',
            },
            {
              img: require('../../assets/Brian_Leetch.jpg'),
              RU: 'Брайан Лич',
              EN: 'Brian Leetch',
            },
            {
              img: require('../../assets/stephen_yezerman.jpg'),
              RU: 'Стив Айзерман',
              EN: 'Stephen Yzerman',
            },
            {
              img: require('../../assets/Joe_sakic.jpg'),
              RU: 'Джо Сакик',
              EN: 'Joe Sakic',
            },
          ],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [
            {
              img: require('../../assets/Tampa_Bay_Lightning.png'),
              RU: 'Тампа-Бэй Лайтнинг',
              EN: 'Tampa Bay Lightning',
            },
            {
              img: require('../../assets/StLouis_Blues.png'),
              RU: 'Сент-Луис Блюз',
              EN: 'St. Louis Blues',
            },
            {
              img: require('../../assets/Washington_Capitals.png'),
              RU: 'Вашингтон Кэпиталз',
              EN: 'Washington Capitals',
            },
            {
              img: require('../../assets/Pittsburgh_penguins.png'),
              RU: 'Питтсбург Пингвинз',
              EN: 'Pittsburgh Penguins',
            },
            {
              img: require('../../assets/Chicago_Blackhawks.png'),
              RU: 'Чикаго Блэкхокс',
              EN: 'Chicago Blackhawks',
            },
            {
              img: require('../../assets/Los_Angeles_Kings.png'),
              RU: 'Лос-Анджелес Кингз',
              EN: 'Los Angeles Kings',
            },
            {
              img: require('../../assets/Boston_Bruins.png'),
              RU: 'Бостон Брюинз',
              EN: 'Boston Bruins',
            },
            {
              img: require('../../assets/Detroit_Redwings.png'),
              RU: 'Детройт Ред Уингз',
              EN: 'Detroit Red Wings',
            },
            {
              img: require('../../assets/Carolina_Hurricanes.png'),
              RU: 'Каролина Харрикейнз',
              EN: 'Carolina Hurricanes',
            },
            {
              img: require('../../assets/New_Jersey_Devils.png'),
              RU: 'Нью-Джерси Девилз',
              EN: 'New Jersey Devils',
            },
            {
              img: require('../../assets/Colorado_Avalanche.png'),
              RU: 'Колорадо Эвеланш',
              EN: 'Colorado Avalanche',
            },
            {
              img: require('../../assets/Dallas_Stars.png'),
              RU: 'Даллас Старз',
              EN: 'Dallas Stars',
            },
            {
              img: require('../../assets/New_York_Rangers.png'),
              RU: 'Нью-Йорк Рейнджерс',
              EN: 'New York Rangers',
            },
            {
              img: require('../../assets/Montreal_Canadiens.png'),
              RU: 'Монреаль Канадиенс',
              EN: 'Montreal Canadiens',
            },
            {
              img: require('../../assets/Edmonton_Oilers.png'),
              RU: 'Эдмонтон Ойлерз',
              EN: 'Edmonton Oilers',
            },
          ],
        },
      ],
    },
  }

  get data() {
    return this.mainData
  }

  constructor() {
    makeObservable(this, {
      mainData: observable,
      data: computed,
    })
  }
}

export default new MainStore()
