// https://places.factual.com
export const cologneRestaurants = [
  // 'Restaurant A': {
  //   name: 'Name',
  //   sector: '(Volle Bedienung) | (beschränktes Angebot - Imbiss) | (Bars) ...', // maybe category
  //   food: 'Italian | Steak | American ... ',
  //   times : {monday: [{12:00}, {18:00}], tuesday: []}  // opens at 12, closes at 18
  //   address: 'Street',
  //   phone: '022126130',
  //   website: 'https://www.frueh.de/'
  // },
  {
    name: 'Gürzenich',
    sector: 'restaurant',
    food: 'pizza',
    times: {
      tuesday: ['8:30', '17:30'],
      friday: ['8:30', '17:30'],
      thursday: ['8:30', '17:30'],
      wednesday: ['8:30', '17:30'],
      monday: ['8:30', '17:30']
    },
    adress: 'Martinstraße 29-37',
    phone: '02212848911',
    website: 'http://www.koelnkongress.de'
  },
  {
    name: 'Borsalino',
    sector: 'imbiss',
    food: 'pizza',
    times: {
      sunday: ['8:00', '23:59'],
      saturday: ['8:00', '23:59'],
      tuesday: ['8:00', '23:59'],
      friday: ['8:00', '23:59'],
      thursday: ['8:00', '23:59'],
      wednesday: ['8:00', '23:59'],
      monday: ['8:00', '23:59']
    },
    adress: 'Zülpicher Straße 7',
    phone: '0221248852',
    website: 'http://www.restaurant-borsalino.de'
  },
  {
    name: 'Vapiano',
    sector: 'restaurant',
    food: 'italian',
    times: { sunday: ['11:00', '12:00'],
      saturday: ['11:00', '12:00'],
      tuesday: ['11:00', '12:00'],
      friday: ['11:00', '12:00'],
      thursday: ['11:00', '12:00'],
      wednesday: ['11:00', '12:00'],
      monday: ['11:00', '12:00']
    },
    adress: 'Habsburgerring 2-12',
    phone: '022120196151',
    website: 'https://de.vapiano.com/de/nc/restaurants/vapiano-koeln-2-habsburger-ring-2-12-1/'
  },

  {
    name: 'Purino Feilenhof',
    sector: 'restaurant',
    food: 'italian',
    times: {
      sunday: ['11:30', '23:00'],
      saturday: ['11:30', '23:00'],
      tuesday: ['17:00', '23:00'],
      friday: ['17:00', '23:00'],
      thursday: ['17:00', '23:00'],
      wednesday: ['17:00', '23:00'],
      monday: ['17:00', '23:00']
    },
    adress: 'Steinstraße 58',
    phone: '022039584884',
    website: 'http://www.purino.de/restaurants/koeln-porz.html'
  },

  {
    name: 'Die fette Kuh',
    sector: 'imbiss',
    food: 'fastfood',
    times: { sunday: ['12:00', '23:00'],
      saturday: ['12:00', '23:00'],
      tuesday: ['12:00', '23:00'],
      friday: ['12:00', '23:00'],
      thursday: ['12:00', '23:00'],
      wednesday: ['12:00', '23:00'],
      monday: ['12:00', '23:00']
    },
    adress: 'Bonner Straße 43',
    phone: '022137627775',
    website: 'http://www.diefettekuh.de'
  },

  {
    name: 'Blue Lounge',
    sector: 'lieferservice',
    food: 'fastfood',
    times: {
      saturday: ['21:00', '17:00'],
      tuesday: ['21:00', '17:00'],
      friday: ['21:00', '17:00'],
      thursday: ['21:00', '17:00'],
      wednesday: ['21:00', '17:00'],
      monday: ['21:30', '17:00']
    },
    adress: 'Mathiasstraße 4-6',
    phone: '02212717117',
    website: 'http://www.blue-lounge.com'
  },

  {
    name: 'Taverne Alekos',
    sector: 'restaurant',
    food: 'greek',
    times: {
      sunday: ['12:00', '12:00'],
      saturday: ['12:00', '12:00'],
      tuesday: ['12:00', '12:00'],
      friday: ['12:00', '12:00'],
      thursday: ['12:00', '12:00'],
      wednesday: ['12:00', '12:00'],
      monday: ['12:00', '12:00']
    },
    adress: 'Venloer Straße 275',
    phone: '0221-516640',
    website: 'http://www.tavernealekos.de'
  },

  {
    name: 'Peking',
    sector: 'lieferservice',
    food: 'asian',
    times: {
      sunday: ['11:30', '23:00'],
      saturday: ['11:30', '23:00'],
      tuesday: ['11:30', '23:00'],
      friday: ['11:30', '23:00'],
      thursday: ['11:30', '23:00'],
      wednesday: ['11:30', '23:00'],
      monday: ['11:30', '23:00']
    },
    adress: 'Schanzenstraße 37',
    phone: '0221137644',
    website: 'http://www.peking-am-dom.de/'
  }
]
