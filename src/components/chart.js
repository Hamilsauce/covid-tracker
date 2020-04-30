// JS
var chart = JSC.chart('chartDiv', {
  debug: true,
  defaultSeries_type: 'vertical column',
  title_label_text: 'COVID Season',
  yAxis: {
    label_text: 'People'
  },
  xAxis_label_text: 'Country',
  series: [{
      name: 'confirmed',
      id: 's1',
      points: [{
          x: 'FRA',
          y: 166543
        },
        {
          x: 'ITA',
          y: 203591
        },
        {
          x: 'ESP',
          y: 236899
        },
        {
          x: 'USA',
          y: 1039909
        }
      ]
    },
    {
      name: 'deaths',
      points: [{
          x: 'FRA',
          y: 24121
        },
        {
          x: 'ITA',
          y: 27682
        },
        {
          x: 'ESP',
          y: 24275
        },
        {
          x: 'USA',
          y: 60967
        }
      ]
    },
    {
      name: 'recovered',
      points: [{
          x: 'FRA',
          y: 49118
        },
        {
          x: 'ITA',
          y: 71252
        },
        {
          x: 'ESP',
          y: 132929
        },
        {
          x: 'USA',
          y: 120720
        }
      ]
    }
  ]
});

const covid = [{
    "country": "ESH",
    "confirmed": 6,
    "deaths": 0,
    "recovered": 5
  },
  {
    "country": "YEM",
    "confirmed": 6,
    "deaths": 0,
    "recovered": 1
  },
  {
    "country": "BTN",
    "confirmed": 7,
    "deaths": 0,
    "recovered": 5
  },
  {
    "country": "PNG",
    "confirmed": 8,
    "deaths": 0,
    "recovered": 0
  },
  {
    "country": "MRT",
    "confirmed": 8,
    "deaths": 1,
    "recovered": 6
  },
  {
    "country": "STP",
    "confirmed": 8,
    "deaths": 0,
    "recovered": 4
  },
  {
    "country": "MSZ",
    "confirmed": 9,
    "deaths": 2,
    "recovered": 0
  },
  {
    "country": "SUR",
    "confirmed": 10,
    "deaths": 1,
    "recovered": 8
  },
  {
    "country": "GMB",
    "confirmed": 10,
    "deaths": 1,
    "recovered": 8
  },
  {
    "country": "VAT",
    "confirmed": 10,
    "deaths": 0,
    "recovered": 2
  },
  {
    "country": "BDI",
    "confirmed": 11,
    "deaths": 1,
    "recovered": 4
  },
  {
    "country": "SYC",
    "confirmed": 11,
    "deaths": 0,
    "recovered": 6
  },
  {
    "country": "NIC",
    "confirmed": 13,
    "deaths": 3,
    "recovered": 7
  },
  {
    "country": "KNA",
    "confirmed": 15,
    "deaths": 0,
    "recovered": 4
  },
  {
    "country": "NAM",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 8
  },
  {
    "country": "VCT",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 8
  },
  {
    "country": "DMA",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 13
  },
  {
    "country": "LCA",
    "confirmed": 17,
    "deaths": 0,
    "recovered": 15
  },
  {
    "country": "BLZ",
    "confirmed": 18,
    "deaths": 2,
    "recovered": 9
  },
  {
    "country": "FJI",
    "confirmed": 18,
    "deaths": 0,
    "recovered": 12
  },
  {
    "country": "LAO",
    "confirmed": 19,
    "deaths": 0,
    "recovered": 7
  },
  {
    "country": "GRD",
    "confirmed": 20,
    "deaths": 0,
    "recovered": 13
  },
  {
    "country": "BWA",
    "confirmed": 23,
    "deaths": 1,
    "recovered": 5
  },
  {
    "country": "ATG",
    "confirmed": 24,
    "deaths": 3,
    "recovered": 11
  },
  {
    "country": "TLS",
    "confirmed": 24,
    "deaths": 0,
    "recovered": 6
  },
  {
    "country": "AGO",
    "confirmed": 27,
    "deaths": 2,
    "recovered": 7
  },
  {
    "country": "ZWE",
    "confirmed": 32,
    "deaths": 4,
    "recovered": 5
  },
  {
    "country": "SSD",
    "confirmed": 34,
    "deaths": 0,
    "recovered": 0
  },
  {
    "country": "MWI",
    "confirmed": 36,
    "deaths": 3,
    "recovered": 7
  },
  {
    "country": "MNG",
    "confirmed": 38,
    "deaths": 0,
    "recovered": 10
  },
  {
    "country": "ERI",
    "confirmed": 39,
    "deaths": 0,
    "recovered": 19
  },
  {
    "country": "SYR",
    "confirmed": 43,
    "deaths": 3,
    "recovered": 21
  },
  {
    "country": "CAF",
    "confirmed": 50,
    "deaths": 0,
    "recovered": 10
  },
  {
    "country": "TCD",
    "confirmed": 52,
    "deaths": 2,
    "recovered": 19
  },
  {
    "country": "NPL",
    "confirmed": 57,
    "deaths": 0,
    "recovered": 16
  },
  {
    "country": "LBY",
    "confirmed": 61,
    "deaths": 2,
    "recovered": 18
  },
  {
    "country": "BEN",
    "confirmed": 64,
    "deaths": 1,
    "recovered": 33
  },
  {
    "country": "MOZ",
    "confirmed": 76,
    "deaths": 0,
    "recovered": 12
  },
  {
    "country": "HTI",
    "confirmed": 76,
    "deaths": 6,
    "recovered": 8
  },
  {
    "country": "GUY",
    "confirmed": 78,
    "deaths": 8,
    "recovered": 18
  },
  {
    "country": "BRB",
    "confirmed": 80,
    "deaths": 7,
    "recovered": 39
  },
  {
    "country": "BHS",
    "confirmed": 80,
    "deaths": 11,
    "recovered": 23
  },
  {
    "country": "UGA",
    "confirmed": 81,
    "deaths": 0,
    "recovered": 52
  },
  {
    "country": "LIE",
    "confirmed": 82,
    "deaths": 1,
    "recovered": 55
  },
  {
    "country": "SWZ",
    "confirmed": 91,
    "deaths": 1,
    "recovered": 10
  },
  {
    "country": "MCO",
    "confirmed": 95,
    "deaths": 4,
    "recovered": 58
  },
  {
    "country": "ZMB",
    "confirmed": 97,
    "deaths": 3,
    "recovered": 54
  },
  {
    "country": "SLE",
    "confirmed": 104,
    "deaths": 4,
    "recovered": 12
  },
  {
    "country": "TGO",
    "confirmed": 109,
    "deaths": 7,
    "recovered": 64
  },
  {
    "country": "CPV",
    "confirmed": 114,
    "deaths": 1,
    "recovered": 2
  },
  {
    "country": "TTO",
    "confirmed": 116,
    "deaths": 8,
    "recovered": 71
  },
  {
    "country": "KHM",
    "confirmed": 122,
    "deaths": 0,
    "recovered": 119
  },
  {
    "country": "MDG",
    "confirmed": 128,
    "deaths": 0,
    "recovered": 90
  },
  {
    "country": "ETH",
    "confirmed": 130,
    "deaths": 3,
    "recovered": 58
  },
  {
    "country": "BRN",
    "confirmed": 138,
    "deaths": 1,
    "recovered": 124
  },
  {
    "country": "LBR",
    "confirmed": 141,
    "deaths": 16,
    "recovered": 45
  },
  {
    "country": "MMR",
    "confirmed": 150,
    "deaths": 6,
    "recovered": 27
  },
  {
    "country": "GNB",
    "confirmed": 205,
    "deaths": 1,
    "recovered": 19
  },
  {
    "country": "COG",
    "confirmed": 207,
    "deaths": 8,
    "recovered": 19
  },
  {
    "country": "RWA",
    "confirmed": 225,
    "deaths": 0,
    "recovered": 98
  },
  {
    "country": "PRY",
    "confirmed": 239,
    "deaths": 9,
    "recovered": 102
  },
  {
    "country": "VNM",
    "confirmed": 270,
    "deaths": 0,
    "recovered": 222
  },
  {
    "country": "GAB",
    "confirmed": 276,
    "deaths": 3,
    "recovered": 67
  },
  {
    "country": "MDV",
    "confirmed": 278,
    "deaths": 1,
    "recovered": 17
  },
  {
    "country": "GNQ",
    "confirmed": 315,
    "deaths": 1,
    "recovered": 9
  },
  {
    "country": "MNE",
    "confirmed": 322,
    "deaths": 7,
    "recovered": 203
  },
  {
    "country": "VEN",
    "confirmed": 331,
    "deaths": 10,
    "recovered": 142
  },
  {
    "country": "MUS",
    "confirmed": 332,
    "deaths": 10,
    "recovered": 306
  },
  {
    "country": "WBG",
    "confirmed": 344,
    "deaths": 2,
    "recovered": 71
  },
  {
    "country": "SDN",
    "confirmed": 375,
    "deaths": 28,
    "recovered": 32
  },
  {
    "country": "SLV",
    "confirmed": 377,
    "deaths": 9,
    "recovered": 106
  },
  {
    "country": "KEN",
    "confirmed": 384,
    "deaths": 15,
    "recovered": 129
  },
  {
    "country": "JAM",
    "confirmed": 396,
    "deaths": 7,
    "recovered": 29
  },
  {
    "country": "TWN",
    "confirmed": 429,
    "deaths": 6,
    "recovered": 311
  },
  {
    "country": "JOR",
    "confirmed": 451,
    "deaths": 8,
    "recovered": 356
  },
  {
    "country": "MLT",
    "confirmed": 463,
    "deaths": 4,
    "recovered": 339
  },
  {
    "country": "TZA",
    "confirmed": 480,
    "deaths": 16,
    "recovered": 167
  },
  {
    "country": "MLI",
    "confirmed": 482,
    "deaths": 25,
    "recovered": 129
  },
  {
    "country": "COD",
    "confirmed": 491,
    "deaths": 30,
    "recovered": 59
  },
  {
    "country": "RKS",
    "confirmed": 510,
    "deaths": 12,
    "recovered": 93
  },
  {
    "country": "GEO",
    "confirmed": 517,
    "deaths": 6,
    "recovered": 178
  },
  {
    "country": "GTM",
    "confirmed": 557,
    "deaths": 16,
    "recovered": 62
  },
  {
    "country": "SMR",
    "confirmed": 563,
    "deaths": 41,
    "recovered": 69
  },
  {
    "country": "SOM",
    "confirmed": 582,
    "deaths": 28,
    "recovered": 20
  },
  {
    "country": "URY",
    "confirmed": 630,
    "deaths": 15,
    "recovered": 412
  },
  {
    "country": "BFA",
    "confirmed": 641,
    "deaths": 43,
    "recovered": 498
  },
  {
    "country": "LKA",
    "confirmed": 649,
    "deaths": 7,
    "recovered": 136
  },
  {
    "country": "DPS",
    "confirmed": 712,
    "deaths": 13,
    "recovered": 645
  },
  {
    "country": "CRI",
    "confirmed": 713,
    "deaths": 6,
    "recovered": 323
  },
  {
    "country": "NER",
    "confirmed": 713,
    "deaths": 32,
    "recovered": 435
  },
  {
    "country": "LBN",
    "confirmed": 721,
    "deaths": 24,
    "recovered": 150
  },
  {
    "country": "KGZ",
    "confirmed": 729,
    "deaths": 8,
    "recovered": 437
  },
  {
    "country": "HND",
    "confirmed": 738,
    "deaths": 66,
    "recovered": 73
  },
  {
    "country": "AND",
    "confirmed": 743,
    "deaths": 42,
    "recovered": 423
  },
  {
    "country": "ALB",
    "confirmed": 766,
    "deaths": 30,
    "recovered": 455
  },
  {
    "country": "CYP",
    "confirmed": 843,
    "deaths": 15,
    "recovered": 148
  },
  {
    "country": "LVA",
    "confirmed": 849,
    "deaths": 15,
    "recovered": 348
  },
  {
    "country": "SEN",
    "confirmed": 882,
    "deaths": 9,
    "recovered": 315
  },
  {
    "country": "TUN",
    "confirmed": 980,
    "deaths": 40,
    "recovered": 294
  },
  {
    "country": "DJI",
    "confirmed": 1077,
    "deaths": 2,
    "recovered": 599
  },
  {
    "country": "BOL",
    "confirmed": 1110,
    "deaths": 59,
    "recovered": 117
  },
  {
    "country": "CIV",
    "confirmed": 1238,
    "deaths": 14,
    "recovered": 557
  },
  {
    "country": "GIN",
    "confirmed": 1351,
    "deaths": 7,
    "recovered": 313
  },
  {
    "country": "LTU",
    "confirmed": 1375,
    "deaths": 45,
    "recovered": 563
  },
  {
    "country": "SVK",
    "confirmed": 1391,
    "deaths": 22,
    "recovered": 484
  },
  {
    "country": "SVN",
    "confirmed": 1418,
    "deaths": 89,
    "recovered": 230
  },
  {
    "country": "MKD",
    "confirmed": 1442,
    "deaths": 73,
    "recovered": 627
  },
  {
    "country": "BGR",
    "confirmed": 1447,
    "deaths": 64,
    "recovered": 243
  },
  {
    "country": "CUB",
    "confirmed": 1467,
    "deaths": 58,
    "recovered": 617
  },
  {
    "country": "NZL",
    "confirmed": 1476,
    "deaths": 19,
    "recovered": 1241
  },
  {
    "country": "EST",
    "confirmed": 1666,
    "deaths": 50,
    "recovered": 236
  },
  {
    "country": "GHA",
    "confirmed": 1671,
    "deaths": 16,
    "recovered": 188
  },
  {
    "country": "BIH",
    "confirmed": 1677,
    "deaths": 65,
    "recovered": 710
  },
  {
    "country": "NGA",
    "confirmed": 1728,
    "deaths": 51,
    "recovered": 307
  },
  {
    "country": "AZE",
    "confirmed": 1766,
    "deaths": 23,
    "recovered": 1267
  },
  {
    "country": "ISL",
    "confirmed": 1797,
    "deaths": 10,
    "recovered": 1656
  },
  {
    "country": "CMR",
    "confirmed": 1832,
    "deaths": 61,
    "recovered": 934
  },
  {
    "country": "ARM",
    "confirmed": 1932,
    "deaths": 30,
    "recovered": 900
  },
  {
    "country": "AFG",
    "confirmed": 1939,
    "deaths": 60,
    "recovered": 252
  },
  {
    "country": "UZB",
    "confirmed": 2002,
    "deaths": 9,
    "recovered": 1096
  },
  {
    "country": "IRQ",
    "confirmed": 2003,
    "deaths": 92,
    "recovered": 1346
  },
  {
    "country": "HRV",
    "confirmed": 2062,
    "deaths": 67,
    "recovered": 1288
  },
  {
    "country": "OMN",
    "confirmed": 2274,
    "deaths": 10,
    "recovered": 364
  },
  {
    "country": "GRC",
    "confirmed": 2576,
    "deaths": 139,
    "recovered": 577
  },
  {
    "country": "HUN",
    "confirmed": 2727,
    "deaths": 300,
    "recovered": 536
  },
  {
    "country": "BHR",
    "confirmed": 2921,
    "deaths": 8,
    "recovered": 1455
  },
  {
    "country": "THA",
    "confirmed": 2947,
    "deaths": 54,
    "recovered": 2665
  },
  {
    "country": "KAZ",
    "confirmed": 3138,
    "deaths": 25,
    "recovered": 819
  },
  {
    "country": "KWT",
    "confirmed": 3740,
    "deaths": 24,
    "recovered": 1389
  },
  {
    "country": "LUX",
    "confirmed": 3769,
    "deaths": 89,
    "recovered": 3134
  },
  {
    "country": "MDA",
    "confirmed": 3771,
    "deaths": 111,
    "recovered": 1114
  },
  {
    "country": "DZA",
    "confirmed": 3848,
    "deaths": 444,
    "recovered": 1702
  },
  {
    "country": "ARG",
    "confirmed": 4285,
    "deaths": 214,
    "recovered": 1192
  },
  {
    "country": "MAR",
    "confirmed": 4321,
    "deaths": 168,
    "recovered": 928
  },
  {
    "country": "FIN",
    "confirmed": 4906,
    "deaths": 206,
    "recovered": 2800
  },
  {
    "country": "EGY",
    "confirmed": 5268,
    "deaths": 380,
    "recovered": 1335
  },
  {
    "country": "ZAF",
    "confirmed": 5350,
    "deaths": 103,
    "recovered": 2073
  },
  {
    "country": "MYS",
    "confirmed": 5945,
    "deaths": 100,
    "recovered": 4087
  },
  {
    "country": "COL",
    "confirmed": 6207,
    "deaths": 278,
    "recovered": 1411
  },
  {
    "country": "PAN",
    "confirmed": 6378,
    "deaths": 178,
    "recovered": 527
  },
  {
    "country": "SRB",
    "confirmed": 6630,
    "deaths": 125,
    "recovered": 870
  },
  {
    "country": "DOM",
    "confirmed": 6652,
    "deaths": 293,
    "recovered": 1228
  },
  {
    "country": "AUS",
    "confirmed": 6752,
    "deaths": 91,
    "recovered": 5715
  },
  {
    "country": "BGD",
    "confirmed": 7103,
    "deaths": 163,
    "recovered": 150
  },
  {
    "country": "CZE",
    "confirmed": 7579,
    "deaths": 227,
    "recovered": 3108
  },
  {
    "country": "NOR",
    "confirmed": 7710,
    "deaths": 207,
    "recovered": 32
  },
  {
    "country": "PHL",
    "confirmed": 8212,
    "deaths": 558,
    "recovered": 1023
  },
  {
    "country": "DNK",
    "confirmed": 9206,
    "deaths": 443,
    "recovered": 6558
  },
  {
    "country": "IDN",
    "confirmed": 9771,
    "deaths": 784,
    "recovered": 1391
  },
  {
    "country": "UKR",
    "confirmed": 9866,
    "deaths": 250,
    "recovered": 1103
  },
  {
    "country": "KOR",
    "confirmed": 10765,
    "deaths": 247,
    "recovered": 9059
  },
  {
    "country": "ARE",
    "confirmed": 11929,
    "deaths": 98,
    "recovered": 2329
  },
  {
    "country": "ROU",
    "confirmed": 11978,
    "deaths": 693,
    "recovered": 3569
  },
  {
    "country": "QAT",
    "confirmed": 12564,
    "deaths": 10,
    "recovered": 1243
  },
  {
    "country": "POL",
    "confirmed": 12640,
    "deaths": 624,
    "recovered": 3025
  },
  {
    "country": "BLR",
    "confirmed": 13181,
    "deaths": 84,
    "recovered": 2072
  },
  {
    "country": "JPN",
    "confirmed": 13895,
    "deaths": 413,
    "recovered": 2368
  },
  {
    "country": "CHL",
    "confirmed": 14885,
    "deaths": 216,
    "recovered": 8057
  },
  {
    "country": "AUT",
    "confirmed": 15402,
    "deaths": 580,
    "recovered": 12779
  },
  {
    "country": "PAK",
    "confirmed": 15525,
    "deaths": 343,
    "recovered": 3425
  },
  {
    "country": "SGP",
    "confirmed": 15641,
    "deaths": 14,
    "recovered": 1188
  },
  {
    "country": "ISR",
    "confirmed": 15834,
    "deaths": 215,
    "recovered": 8233
  },
  {
    "country": "MEX",
    "confirmed": 17799,
    "deaths": 1732,
    "recovered": 11423
  },
  {
    "country": "IRL",
    "confirmed": 20253,
    "deaths": 1190,
    "recovered": 13386
  },
  {
    "country": "SWE",
    "confirmed": 20302,
    "deaths": 2462,
    "recovered": 1005
  },
  {
    "country": "SAU",
    "confirmed": 21402,
    "deaths": 157,
    "recovered": 2953
  },
  {
    "country": "PRT",
    "confirmed": 24505,
    "deaths": 973,
    "recovered": 1470
  },
  {
    "country": "ECU",
    "confirmed": 24675,
    "deaths": 883,
    "recovered": 1557
  },
  {
    "country": "CHE",
    "confirmed": 29407,
    "deaths": 1716,
    "recovered": 22600
  },
  {
    "country": "IND",
    "confirmed": 33062,
    "deaths": 1079,
    "recovered": 8437
  },
  {
    "country": "PER",
    "confirmed": 33931,
    "deaths": 943,
    "recovered": 10037
  },
  {
    "country": "NLD",
    "confirmed": 38998,
    "deaths": 4727,
    "recovered": 119
  },
  {
    "country": "BEL",
    "confirmed": 47859,
    "deaths": 7501,
    "recovered": 11283
  },
  {
    "country": "CAN",
    "confirmed": 52865,
    "deaths": 3155,
    "recovered": 20327
  },
  {
    "country": "BRA",
    "confirmed": 79685,
    "deaths": 5513,
    "recovered": 34132
  },
  {
    "country": "CHN",
    "confirmed": 83944,
    "deaths": 4637,
    "recovered": 78474
  },
  {
    "country": "IRN",
    "confirmed": 93657,
    "deaths": 5957,
    "recovered": 73791
  },
  {
    "country": "RUS",
    "confirmed": 99399,
    "deaths": 972,
    "recovered": 10286
  },
  {
    "country": "TUR",
    "confirmed": 117589,
    "deaths": 3081,
    "recovered": 44040
  },
  {
    "country": "DEU",
    "confirmed": 161539,
    "deaths": 6467,
    "recovered": 120400
  },
  {
    "country": "GBR",
    "confirmed": 166441,
    "deaths": 26166,
    "recovered": 857
  },
  {
    "country": "FRA",
    "confirmed": 166543,
    "deaths": 24121,
    "recovered": 49118
  },
  {
    "country": "ITA",
    "confirmed": 203591,
    "deaths": 27682,
    "recovered": 71252
  },
  {
    "country": "ESP",
    "confirmed": 236899,
    "deaths": 24275,
    "recovered": 132929
  },
  {
    "country": "USA",
    "confirmed": 1039909,
    "deaths": 60967,
    "recovered": 120720
  }
]