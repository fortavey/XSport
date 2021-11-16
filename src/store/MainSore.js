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
          list: [],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [],
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
          list: [],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [],
        },
        {
          name: {
            RU: 'Сборные',
            EN: 'National teams',
          },
          list: [],
        },
        {
          name: {
            RU: 'Лиги',
            EN: 'Leagues',
          },
          list: [],
        },
      ],
    },
    tennis: {
      id: 3,
      name: {
        RU: 'тенис',
        EN: 'tennis',
      },
      categories: [
        {
          name: {
            RU: 'Игроки',
            EN: 'Players',
          },
          list: [],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [],
        },
        {
          name: {
            RU: 'Сборные',
            EN: 'National teams',
          },
          list: [],
        },
        {
          name: {
            RU: 'Лиги',
            EN: 'Leagues',
          },
          list: [],
        },
      ],
    },
    volleyball: {
      id: 4,
      name: {
        RU: 'волейбол',
        EN: 'volleyball',
      },
      categories: [
        {
          name: {
            RU: 'Игроки',
            EN: 'Players',
          },
          list: [],
        },
        {
          name: {
            RU: 'Клубы',
            EN: 'Clubs',
          },
          list: [],
        },
        {
          name: {
            RU: 'Сборные',
            EN: 'National teams',
          },
          list: [],
        },
        {
          name: {
            RU: 'Лиги',
            EN: 'Leagues',
          },
          list: [],
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
