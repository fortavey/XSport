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
              img: require('../../assets/karl_malone.jpg'),
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
