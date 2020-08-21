export const ipMock = {
  status: 200,
  data: {
    ip: '162.221.202.17'
  }
}

export const ipGeoMock = {
  status: 200,
  data: {
    ip: '162.221.202.17',
    type: 'ipv4',
    continent_code: 'NA',
    continent_name: 'North America',
    country_code: 'CA',
    country_name: 'Canada',
    region_code: 'BC',
    region_name: 'British Columbia',
    city: 'Coquitlam',
    zip: 'V3B 1A1',
    latitude: 49.28226089477539,
    longitude: -122.79740142822266
  }
}

export const optionsMock = {
  status: 200,
  data: {
    countries: {
      '': 'Global',
      'au': 'Australia',
      'ca': 'Canada',
      'in': 'India',
      'nz': 'New Zealand',
      'za': 'South Africa',
      'uk': 'United Kingdom',
      'us': 'United States'
    },
    currencies: {
      '': 'United States Dollar (Default)',
      'aed': 'UAE Dirham (AED)',
      'all': 'Albanian Lek (ALL)',
      'ang': 'Neth Antilles Guilder (NAƒ)',
      'ars': 'Argentine Peso ($)',
      'aud': 'Australian Dollar ($)',
      'awg': 'Aruba Florin (ƒ)',
      'bbd': 'Barbados Dollar (BBD)',
      'bdt': 'Bangladesh Taka (Tk)',
      'bgn': 'Bulgarian Lev (лв)',
      'bhd': 'Bahraini Dinar (BHD)',
      'bif': 'Burundi Franc (FBu)',
      'bmd': 'Bermuda Dollar (BD$)',
      'bnd': 'Brunei Dollar (B$)',
      'bob': 'Bolivian Boliviano (Bs)',
      'brl': 'Brazilian Real (R$)',
      'bsd': 'Bahamian Dollar (B$)',
      'btn': 'Bhutan Ngultrum (Nu)',
      'bwp': 'Botswana Pula (P)',
      'byr': 'Belarus Ruble (Br)',
      'bzd': 'Belize Dollar (BZ$)',
      'cad': 'Canadian Dollar (C$)',
      'chf': 'Swiss Franc (CHF)',
      'clp': 'Chilean Peso ($)',
      'cny': 'Chinese Yuan (¥)',
      'cop': 'Colombian Peso ($)',
      'crc': 'Costa Rica Colon (₡)',
      'cup': 'Cuban Peso ($MN)',
      'cve': 'Cape Verde Escudo (Esc)',
      'czk': 'Czech Koruna (Kč)',
      'djf': 'Djibouti Franc (Fdj)',
      'dkk': 'Danish Krone (kr)',
      'dop': 'Dominican Peso (RD$)',
      'dzd': 'Algerian Dinar (دج)',
      'eek': 'Estonian Kroon (EEK)',
      'egp': 'Egyptian Pound (EGP)',
      'etb': 'Ethiopian Birr (Br)',
      'eur': 'Euro (€)',
      'fjd': 'Fiji Dollar (FJ$)',
      'fkp': 'Falkland Islands Pound (£)',
      'gbp': 'British Pound (£)',
      'ghs': 'Ghanaian Cedi (GHS)',
      'gmd': 'Gambian Dalasi (D)',
      'gnf': 'Guinea Franc (FG)',
      'gtq': 'Guatemala Quetzal (Q)',
      'gyd': 'Guyana Dollar (GY$)',
      'hkd': 'Hong Kong Dollar (HK$)',
      'hnl': 'Honduras Lempira (L)',
      'hrk': 'Croatian Kuna (kn)',
      'huf': 'Hungarian Forint (Ft)',
      'idr': 'Indonesian Rupiah (Rp)',
      'ils': 'Israeli Shekel (₪)',
      'inr': 'Indian Rupee (Rs)',
      'iqd': 'Iraqi Dinar (IQD)',
      'isk': 'Iceland Krona (kr)',
      'jod': 'Jordanian Dinar (JOD)',
      'jpy': 'Japanese Yen (¥)',
      'kes': 'Kenyan Shilling (KSh)',
      'kgs': 'Kyrgyzstan Som (KGS)',
      'khr': 'Cambodia Riel (KHR)',
      'kmf': 'Comoros Franc (KMF)',
      'kpw': 'North Korean Won (₩)',
      'krw': 'Korean Won (₩)',
      'kwd': 'Kuwaiti Dinar (KWD)',
      'kyd': 'Cayman Islands Dollar ($)',
      'kzt': 'Kazakhstan Tenge (KZT)',
      'lkr': 'Sri Lanka Rupee (ரூ)',
      'mad': 'Moroccan Dirham (MAD)',
      'mdl': 'Moldovan Leu (MDL)',
      'mkd': 'Macedonian Denar (MKD)',
      'mmk': 'Myanmar Kyat (K)',
      'mnt': 'Mongolian Tugrik (₮)',
      'mop': 'Macau Pataca ($)',
      'mro': 'Mauritania Ougulya (UM)',
      'mur': 'Mauritius Rupee (₨)',
      'mvr': 'Maldives Rufiyaa (Rf)',
      'mwk': 'Malawi Kwacha (MK)',
      'mxn': 'Mexican Peso ($)',
      'myr': 'Malaysian Ringgit (RM)',
      'nad': 'Namibian Dollar (N$)',
      'ngn': 'Nigerian Naira (₦)',
      'nio': 'Nicaragua Cordoba (C$)',
      'nok': 'Norwegian Krone (kr)',
      'npr': 'Nepalese Rupee (₨)',
      'nzd': 'New Zealand Dollar ($)',
      'omr': 'Omani Rial (OMR)',
      'pab': 'Panama Balboa (B)',
      'pen': 'Peruvian Nuevo Sol (PEN)',
      'pgk': 'Papua New Guinea Kina (K)',
      'php': 'Philippine Peso (₱)',
      'pkr': 'Pakistani Rupee (Rs)',
      'pln': 'Polish Zloty (zł)',
      'qar': 'Qatar Rial (QAR)',
      'ron': 'Romanian New Leu (L)',
      'rub': 'Russian Rouble (руб)',
      'rwf': 'Rwanda Franc (RF)',
      'sar': 'Saudi Arabian Riyal (SAR)',
      'sbd': 'Solomon Islands Dollar (SI$)',
      'scr': 'Seychelles Rupee (SR)',
      'sdg': 'Sudanese Pound (SDG)',
      'sek': 'Swedish Krona (kr)',
      'sgd': 'Singapore Dollar (S$)',
      'shp': 'St Helena Pound (£)',
      'skk': 'Slovak Koruna (Sk)',
      'sll': 'Sierra Leone Leone (Le)',
      'sos': 'Somali Shilling (So)',
      'std': 'Sao Tome Dobra (Db)',
      'svc': 'El Salvador Colon (₡)',
      'syp': 'Syrian Pound (SYP)',
      'szl': 'Swaziland Lilageni (SZL)',
      'thb': 'Thai Baht (฿)',
      'tnd': 'Tunisian Dinar (TND)',
      'top': 'Tonga Paang (T$)',
      'try': 'Turkish Lira (YTL)',
      'ttd': 'Trinidad Tobago Dollar (TTD)',
      'twd': 'Taiwan Dollar (NT$)',
      'tzs': 'Tanzanian Shilling (x)',
      'ugx': 'Ugandan Shilling (USh)',
      'usd': 'United States Dollar ($)',
      'uyu': 'Uruguayan New Peso (UYU)',
      'uzs': 'Uzbekistan Sum (UZS)',
      'vef': 'Venezuelan Bolivar (VEF)',
      'vnd': 'Vietnam Dong (₫)',
      'vuv': 'Vanuatu Vatu (Vt)',
      'wst': 'Samoa Tala (WS$)',
      'xaf': 'CFA Franc (BEAC) (BEAC)',
      'xcd': 'East Caribbean Dollar (EC$)',
      'xof': 'CFA Franc (BCEAO) (BCEAO)',
      'xpf': 'Pacific Franc (F)',
      'yer': 'Yemen Riyal (YER)',
      'zar': 'South African Rand (R)',
      'zmk': 'Zambian Kwacha (ZMK)'
    }
  }
}

export const creditsMock = {
  status: 200,
  data: {
    credits: [3292]
  }
}

export const createTrialMock = {
  status: 201,
  data: {
    id: 'a74c52d2d6',
    geoIp: {
      ip: '162.221.202.17',
      type: 'ipv4',
      continent_code: 'NA',
      continent_name: 'North America',
      country_code: 'CA',
      country_name: 'Canada',
      region_code: 'BC',
      region_name: 'British Columbia',
      city: 'Coquitlam',
      zip: 'V3B 1A1',
      latitude: 49.28226089477539,
      longitude: -122.79740142822266
    },
    sets: {
      setField1: 'good\nfast\nsuper',
      setField3: 'cars\nautos\nvehicles',
      setField4: '.com\n.ca\n.net'
    },
    createdAt: 1602138040475,
    updatedAt: 1602138040475,
    trialProduct: {
      heading: '1 x 3 x 4',
      list: [
        'good cars .com',
        'good cars .ca',
        'good cars .net',
        'good autos .com',
        'good autos .ca',
        'good autos .net',
        'good vehicles .com',
        'good vehicles .ca',
        'good vehicles .net',
        'fast cars .com',
        'fast cars .ca',
        'fast cars .net',
        'fast autos .com',
        'fast autos .ca',
        'fast autos .net',
        'fast vehicles .com',
        'fast vehicles .ca',
        'fast vehicles .net',
        'super cars .com',
        'super cars .ca',
        'super cars .net',
        'super autos .com',
        'super autos .ca',
        'super autos .net',
        'super vehicles .com',
        'super vehicles .ca',
        'super vehicles .net'
      ],
      billableKeywords: [
        'good cars',
        'good autos',
        'good vehicles',
        'fast cars',
        'fast autos',
        'fast vehicles',
        'super cars',
        'super autos',
        'super vehicles'
      ]
    }
  }
}

export const preOrderMock = {
  status: 200,
  data: {
    id: 'pi_1HZsdjBfmQlLEX8hzpr0dJfL',
    object: 'payment_intent',
    amount: 67,
    amount_capturable: 0,
    amount_received: 0,
    application: null,
    application_fee_amount: null,
    canceled_at: null,
    cancellation_reason: null,
    capture_method: 'automatic',
    charges: {
      object: 'list',
      data: [],
      has_more: false,
      total_count: 0,
      url: '/v1/charges?payment_intent=pi_1HZsdjBfmQlLEX8hzpr0dJfL'
    },
    client_secret:
      'pi_1HZsdjBfmQlLEX8hzpr0dJfL_secret_4eGyoeGLhsWJrxgq4kczFjJ1R',
    confirmation_method: 'automatic',
    created: 1602138611,
    currency: 'cad',
    customer: null,
    description: null,
    invoice: null,
    last_payment_error: null,
    livemode: false,
    metadata: {},
    next_action: null,
    on_behalf_of: null,
    payment_method: null,
    payment_method_options: {
      card: {
        installments: null,
        network: null,
        request_three_d_secure: 'automatic'
      }
    },
    payment_method_types: ['card'],
    receipt_email: null,
    review: null,
    setup_future_usage: null,
    shipping: null,
    source: null,
    statement_descriptor: null,
    statement_descriptor_suffix: null,
    status: 'requires_payment_method',
    transfer_data: null,
    transfer_group: null
  }
}

export const payloadMock = {
  paymentIntent: {
    id: 'pi_1HZsgGBfmQlLEX8h0yTHce8U',
    object: 'payment_intent',
    amount: 67,
    canceled_at: null,
    cancellation_reason: null,
    capture_method: 'automatic',
    client_secret:
      'pi_1HZsgGBfmQlLEX8h0yTHce8U_secret_TLWSnrBwiMGrQM3idK9b8d05u',
    confirmation_method: 'automatic',
    created: 1602138768,
    currency: 'cad',
    description: null,
    last_payment_error: null,
    livemode: false,
    next_action: null,
    payment_method: 'pm_1HZsgGBfmQlLEX8hhQtIaZC0',
    payment_method_types: ['card'],
    receipt_email: null,
    setup_future_usage: null,
    shipping: null,
    source: null,
    status: 'succeeded'
  }
}

export const volumeMock = {
  credits: 82002,
  updatedTrial: {
    trialProduct: {
      list: [
        'good cars .com',
        'good cars .ca',
        'good cars .net',
        'good autos .com',
        'good autos .ca',
        'good autos .net',
        'good vehicles .com',
        'good vehicles .ca',
        'good vehicles .net',
        'fast cars .com',
        'fast cars .ca',
        'fast cars .net',
        'fast autos .com',
        'fast autos .ca',
        'fast autos .net',
        'fast vehicles .com',
        'fast vehicles .ca',
        'fast vehicles .net',
        'super cars .com',
        'super cars .ca',
        'super cars .net',
        'super autos .com',
        'super autos .ca',
        'super autos .net',
        'super vehicles .com',
        'super vehicles .ca',
        'super vehicles .net'
      ],
      heading: '1 x 3 x 4',
      billableKeywords: [
        'good cars',
        'good autos',
        'good vehicles',
        'fast cars',
        'fast autos',
        'fast vehicles',
        'super cars',
        'super autos',
        'super vehicles'
      ]
    },
    createdAt: 1602137456517,
    id: 'a74c52d2d6',
    geoIp: {
      continent_name: 'North America',
      zip: 'V4K 1W7',
      country_code: 'CA',
      city: 'Delta',
      ip: '24.207.16.84',
      latitude: 49.0913200378418,
      country_name: 'Canada',
      continent_code: 'NA',
      region_name: 'British Columbia',
      type: 'ipv4',
      region_code: 'BC',
      longitude: -123.07418060302734
    },
    sets: {
      setField1: 'good\nfast\nsuper',
      setField4: '.com\n.ca\n.net',
      setField3: 'cars\nautos\nvehicles'
    },
    updatedAt: 1602137692412,
    paymentId: 'pi_1HZsOrBfmQlLEX8hDhwq8Wop',
    metrics: {
      volume: [
        {
          vol: 18100,
          competition: 0.13,
          keyword: 'good cars',
          trend: [
            { month: 'October', year: 2019, value: 14800 },
            { month: 'November', year: 2019, value: 14800 },
            { month: 'December', year: 2019, value: 14800 },
            { month: 'January', year: 2020, value: 12100 },
            { month: 'February', year: 2020, value: 18100 },
            { month: 'March', year: 2020, value: 18100 },
            { month: 'April', year: 2020, value: 18100 },
            { month: 'May', year: 2020, value: 14800 },
            { month: 'June', year: 2020, value: 18100 },
            { month: 'July', year: 2020, value: 18100 },
            { month: 'August', year: 2020, value: 22200 },
            { month: 'September', year: 2020, value: 18100 }
          ],
          cpc: { value: '1.66', currency: 'C$' }
        },
        {
          vol: 210,
          competition: 0.01,
          keyword: 'good autos',
          trend: [
            { month: 'October', year: 2019, value: 260 },
            { month: 'November', year: 2019, value: 260 },
            { month: 'December', year: 2019, value: 210 },
            { month: 'January', year: 2020, value: 170 },
            { month: 'February', year: 2020, value: 210 },
            { month: 'March', year: 2020, value: 210 },
            { month: 'April', year: 2020, value: 210 },
            { month: 'May', year: 2020, value: 140 },
            { month: 'June', year: 2020, value: 260 },
            { month: 'July', year: 2020, value: 260 },
            { month: 'August', year: 2020, value: 260 },
            { month: 'September', year: 2020, value: 260 }
          ],
          cpc: { value: '0.11', currency: 'C$' }
        },
        {
          vol: 480,
          competition: 0.1,
          keyword: 'good vehicles',
          trend: [
            { month: 'October', year: 2019, value: 390 },
            { month: 'November', year: 2019, value: 390 },
            { month: 'December', year: 2019, value: 320 },
            { month: 'January', year: 2020, value: 320 },
            { month: 'February', year: 2020, value: 390 },
            { month: 'March', year: 2020, value: 390 },
            { month: 'April', year: 2020, value: 390 },
            { month: 'May', year: 2020, value: 480 },
            { month: 'June', year: 2020, value: 720 },
            { month: 'July', year: 2020, value: 720 },
            { month: 'August', year: 2020, value: 590 },
            { month: 'September', year: 2020, value: 590 }
          ],
          cpc: { value: '1.05', currency: 'C$' }
        },
        {
          vol: 246000,
          competition: 0.21,
          keyword: 'fast cars',
          trend: [
            { month: 'October', year: 2019, value: 246000 },
            { month: 'November', year: 2019, value: 201000 },
            { month: 'December', year: 2019, value: 201000 },
            { month: 'January', year: 2020, value: 201000 },
            { month: 'February', year: 2020, value: 201000 },
            { month: 'March', year: 2020, value: 201000 },
            { month: 'April', year: 2020, value: 246000 },
            { month: 'May', year: 2020, value: 246000 },
            { month: 'June', year: 2020, value: 246000 },
            { month: 'July', year: 2020, value: 246000 },
            { month: 'August', year: 2020, value: 246000 },
            { month: 'September', year: 2020, value: 246000 }
          ],
          cpc: { value: '0.57', currency: 'C$' }
        },
        {
          vol: 168,
          competition: 0.05,
          keyword: 'fast autos',
          trend: [
            { month: 'October', year: 2019, value: 218 },
            { month: 'November', year: 2019, value: 218 },
            { month: 'December', year: 2019, value: 168 },
            { month: 'January', year: 2020, value: 168 },
            { month: 'February', year: 2020, value: 218 },
            { month: 'March', year: 2020, value: 168 },
            { month: 'April', year: 2020, value: 148 },
            { month: 'May', year: 2020, value: 121 },
            { month: 'June', year: 2020, value: 148 },
            { month: 'July', year: 2020, value: 168 },
            { month: 'August', year: 2020, value: 168 },
            { month: 'September', year: 2020, value: 168 }
          ],
          cpc: { value: '2.13', currency: 'C$' }
        },
        {
          vol: 129,
          competition: 0.07,
          keyword: 'fast vehicles',
          trend: [
            { month: 'October', year: 2019, value: 129 },
            { month: 'November', year: 2019, value: 105 },
            { month: 'December', year: 2019, value: 105 },
            { month: 'January', year: 2020, value: 129 },
            { month: 'February', year: 2020, value: 129 },
            { month: 'March', year: 2020, value: 129 },
            { month: 'April', year: 2020, value: 129 },
            { month: 'May', year: 2020, value: 129 },
            { month: 'June', year: 2020, value: 157 },
            { month: 'July', year: 2020, value: 129 },
            { month: 'August', year: 2020, value: 129 },
            { month: 'September', year: 2020, value: 157 }
          ],
          cpc: { value: '2.80', currency: 'C$' }
        },
        {
          vol: 49500,
          competition: 0.08,
          keyword: 'super cars',
          trend: [
            { month: 'October', year: 2019, value: 60500 },
            { month: 'November', year: 2019, value: 60500 },
            { month: 'December', year: 2019, value: 49500 },
            { month: 'January', year: 2020, value: 40500 },
            { month: 'February', year: 2020, value: 49500 },
            { month: 'March', year: 2020, value: 49500 },
            { month: 'April', year: 2020, value: 49500 },
            { month: 'May', year: 2020, value: 49500 },
            { month: 'June', year: 2020, value: 49500 },
            { month: 'July', year: 2020, value: 49500 },
            { month: 'August', year: 2020, value: 60500 },
            { month: 'September', year: 2020, value: 60500 }
          ],
          cpc: { value: '0.50', currency: 'C$' }
        },
        {
          vol: 5400,
          competition: 0.07,
          keyword: 'super autos',
          trend: [
            { month: 'October', year: 2019, value: 4400 },
            { month: 'November', year: 2019, value: 5400 },
            { month: 'December', year: 2019, value: 4400 },
            { month: 'January', year: 2020, value: 4400 },
            { month: 'February', year: 2020, value: 5400 },
            { month: 'March', year: 2020, value: 4400 },
            { month: 'April', year: 2020, value: 4400 },
            { month: 'May', year: 2020, value: 4400 },
            { month: 'June', year: 2020, value: 5400 },
            { month: 'July', year: 2020, value: 5400 },
            { month: 'August', year: 2020, value: 5400 },
            { month: 'September', year: 2020, value: 5400 }
          ],
          cpc: { value: '0.09', currency: 'C$' }
        },
        {
          vol: 210,
          competition: 0.09,
          keyword: 'super vehicles',
          trend: [
            { month: 'October', year: 2019, value: 210 },
            { month: 'November', year: 2019, value: 210 },
            { month: 'December', year: 2019, value: 170 },
            { month: 'January', year: 2020, value: 260 },
            { month: 'February', year: 2020, value: 260 },
            { month: 'March', year: 2020, value: 170 },
            { month: 'April', year: 2020, value: 210 },
            { month: 'May', year: 2020, value: 260 },
            { month: 'June', year: 2020, value: 260 },
            { month: 'July', year: 2020, value: 210 },
            { month: 'August', year: 2020, value: 260 },
            { month: 'September', year: 2020, value: 260 }
          ],
          cpc: { value: '2.94', currency: 'C$' }
        }
      ],
      country: 'global',
      currency: 'cad',
      dataSource: 'cli'
    }
  }
}
