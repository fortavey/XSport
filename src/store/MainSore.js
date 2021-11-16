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
