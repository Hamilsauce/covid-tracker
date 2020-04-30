let fetch = require('node-fetch');
let fs = require('fs');
const gLatest = [{
    "SWE": {
      "confirmed": 20302,
      "deaths": 2462,
      "recovered": 1005
    }
  },
  {
    "TZA": {
      "confirmed": 480,
      "deaths": 16,
      "recovered": 167
    }
  },
  {
    "TWN": {
      "confirmed": 429,
      "deaths": 6,
      "recovered": 311
    }
  },
  {
    "THA": {
      "confirmed": 2947,
      "deaths": 54,
      "recovered": 2665
    }
  },
  {
    "FRA": {
      "confirmed": 166543,
      "deaths": 24121,
      "recovered": 49118
    }
  },
  {
    "FIN": {
      "confirmed": 4906,
      "deaths": 206,
      "recovered": 2800
    }
  },
  {
    "FJI": {
      "confirmed": 18,
      "deaths": 0,
      "recovered": 12
    }
  },
  {
    "ETH": {
      "confirmed": 130,
      "deaths": 3,
      "recovered": 58
    }
  },
  {
    "GAB": {
      "confirmed": 276,
      "deaths": 3,
      "recovered": 67
    }
  },
  {
    "GHA": {
      "confirmed": 1671,
      "deaths": 16,
      "recovered": 188
    }
  },
  {
    "DEU": {
      "confirmed": 161539,
      "deaths": 6467,
      "recovered": 120400
    }
  },
  {
    "GEO": {
      "confirmed": 517,
      "deaths": 6,
      "recovered": 178
    }
  },
  {
    "GMB": {
      "confirmed": 10,
      "deaths": 1,
      "recovered": 8
    }
  },
  {
    "GTM": {
      "confirmed": 557,
      "deaths": 16,
      "recovered": 62
    }
  },
  {
    "GRC": {
      "confirmed": 2576,
      "deaths": 139,
      "recovered": 577
    }
  },
  {
    "HTI": {
      "confirmed": 76,
      "deaths": 6,
      "recovered": 8
    }
  },
  {
    "GUY": {
      "confirmed": 78,
      "deaths": 8,
      "recovered": 18
    }
  },
  {
    "GIN": {
      "confirmed": 1351,
      "deaths": 7,
      "recovered": 313
    }
  },
  {
    "HND": {
      "confirmed": 738,
      "deaths": 66,
      "recovered": 73
    }
  },
  {
    "VAT": {
      "confirmed": 10,
      "deaths": 0,
      "recovered": 2
    }
  },
  {
    "IND": {
      "confirmed": 33062,
      "deaths": 1079,
      "recovered": 8437
    }
  },
  {
    "ISL": {
      "confirmed": 1797,
      "deaths": 10,
      "recovered": 1656
    }
  },
  {
    "HUN": {
      "confirmed": 2727,
      "deaths": 300,
      "recovered": 536
    }
  },
  {
    "IRQ": {
      "confirmed": 2003,
      "deaths": 92,
      "recovered": 1346
    }
  },
  {
    "IRN": {
      "confirmed": 93657,
      "deaths": 5957,
      "recovered": 73791
    }
  },
  {
    "IDN": {
      "confirmed": 9771,
      "deaths": 784,
      "recovered": 1391
    }
  },
  {
    "ISR": {
      "confirmed": 15834,
      "deaths": 215,
      "recovered": 8233
    }
  },
  {
    "IRL": {
      "confirmed": 20253,
      "deaths": 1190,
      "recovered": 13386
    }
  },
  {
    "JPN": {
      "confirmed": 13895,
      "deaths": 413,
      "recovered": 2368
    }
  },
  {
    "JAM": {
      "confirmed": 396,
      "deaths": 7,
      "recovered": 29
    }
  },
  {
    "ITA": {
      "confirmed": 203591,
      "deaths": 27682,
      "recovered": 71252
    }
  },
  {
    "KAZ": {
      "confirmed": 3138,
      "deaths": 25,
      "recovered": 819
    }
  },
  {
    "JOR": {
      "confirmed": 451,
      "deaths": 8,
      "recovered": 356
    }
  },
  {
    "KWT": {
      "confirmed": 3740,
      "deaths": 24,
      "recovered": 1389
    }
  },
  {
    "KOR": {
      "confirmed": 10765,
      "deaths": 247,
      "recovered": 9059
    }
  },
  {
    "KEN": {
      "confirmed": 384,
      "deaths": 15,
      "recovered": 129
    }
  },
  {
    "LVA": {
      "confirmed": 849,
      "deaths": 15,
      "recovered": 348
    }
  },
  {
    "KGZ": {
      "confirmed": 729,
      "deaths": 8,
      "recovered": 437
    }
  },
  {
    "LIE": {
      "confirmed": 82,
      "deaths": 1,
      "recovered": 55
    }
  },
  {
    "LBR": {
      "confirmed": 141,
      "deaths": 16,
      "recovered": 45
    }
  },
  {
    "LBN": {
      "confirmed": 721,
      "deaths": 24,
      "recovered": 150
    }
  },
  {
    "LUX": {
      "confirmed": 3769,
      "deaths": 89,
      "recovered": 3134
    }
  },
  {
    "LTU": {
      "confirmed": 1375,
      "deaths": 45,
      "recovered": 563
    }
  },
  {
    "MLT": {
      "confirmed": 463,
      "deaths": 4,
      "recovered": 339
    }
  },
  {
    "MDV": {
      "confirmed": 278,
      "deaths": 1,
      "recovered": 17
    }
  },
  {
    "MYS": {
      "confirmed": 5945,
      "deaths": 100,
      "recovered": 4087
    }
  },
  {
    "MDG": {
      "confirmed": 128,
      "deaths": 0,
      "recovered": 90
    }
  },
  {
    "MRT": {
      "confirmed": 8,
      "deaths": 1,
      "recovered": 6
    }
  },
  {
    "MCO": {
      "confirmed": 95,
      "deaths": 4,
      "recovered": 58
    }
  },
  {
    "MDA": {
      "confirmed": 3771,
      "deaths": 111,
      "recovered": 1114
    }
  },
  {
    "MEX": {
      "confirmed": 17799,
      "deaths": 1732,
      "recovered": 11423
    }
  },
  {
    "MUS": {
      "confirmed": 332,
      "deaths": 10,
      "recovered": 306
    }
  },
  {
    "MNG": {
      "confirmed": 38,
      "deaths": 0,
      "recovered": 10
    }
  },
  {
    "NLD": {
      "confirmed": 38998,
      "deaths": 4727,
      "recovered": 119
    }
  },
  {
    "NPL": {
      "confirmed": 57,
      "deaths": 0,
      "recovered": 16
    }
  },
  {
    "NAM": {
      "confirmed": 16,
      "deaths": 0,
      "recovered": 8
    }
  },
  {
    "MAR": {
      "confirmed": 4321,
      "deaths": 168,
      "recovered": 928
    }
  },
  {
    "MNE": {
      "confirmed": 322,
      "deaths": 7,
      "recovered": 203
    }
  },
  {
    "MKD": {
      "confirmed": 1442,
      "deaths": 73,
      "recovered": 627
    }
  },
  {
    "NGA": {
      "confirmed": 1728,
      "deaths": 51,
      "recovered": 307
    }
  },
  {
    "NER": {
      "confirmed": 713,
      "deaths": 32,
      "recovered": 435
    }
  },
  {
    "NIC": {
      "confirmed": 13,
      "deaths": 3,
      "recovered": 7
    }
  },
  {
    "NZL": {
      "confirmed": 1476,
      "deaths": 19,
      "recovered": 1241
    }
  },
  {
    "PNG": {
      "confirmed": 8,
      "deaths": 0,
      "recovered": 0
    }
  },
  {
    "PAN": {
      "confirmed": 6378,
      "deaths": 178,
      "recovered": 527
    }
  },
  {
    "PAK": {
      "confirmed": 15525,
      "deaths": 343,
      "recovered": 3425
    }
  },
  {
    "OMN": {
      "confirmed": 2274,
      "deaths": 10,
      "recovered": 364
    }
  },
  {
    "NOR": {
      "confirmed": 7710,
      "deaths": 207,
      "recovered": 32
    }
  },
  {
    "PRT": {
      "confirmed": 24505,
      "deaths": 973,
      "recovered": 1470
    }
  },
  {
    "POL": {
      "confirmed": 12640,
      "deaths": 624,
      "recovered": 3025
    }
  },
  {
    "PHL": {
      "confirmed": 8212,
      "deaths": 558,
      "recovered": 1023
    }
  },
  {
    "PER": {
      "confirmed": 33931,
      "deaths": 943,
      "recovered": 10037
    }
  },
  {
    "PRY": {
      "confirmed": 239,
      "deaths": 9,
      "recovered": 102
    }
  },
  {
    "QAT": {
      "confirmed": 12564,
      "deaths": 10,
      "recovered": 1243
    }
  },
  {
    "LCA": {
      "confirmed": 17,
      "deaths": 0,
      "recovered": 15
    }
  },
  {
    "RWA": {
      "confirmed": 225,
      "deaths": 0,
      "recovered": 98
    }
  },
  {
    "RUS": {
      "confirmed": 99399,
      "deaths": 972,
      "recovered": 10286
    }
  },
  {
    "ROU": {
      "confirmed": 11978,
      "deaths": 693,
      "recovered": 3569
    }
  },
  {
    "VCT": {
      "confirmed": 16,
      "deaths": 0,
      "recovered": 8
    }
  },
  {
    "SEN": {
      "confirmed": 882,
      "deaths": 9,
      "recovered": 315
    }
  },
  {
    "SMR": {
      "confirmed": 563,
      "deaths": 41,
      "recovered": 69
    }
  },
  {
    "SRB": {
      "confirmed": 6630,
      "deaths": 125,
      "recovered": 870
    }
  },
  {
    "SYC": {
      "confirmed": 11,
      "deaths": 0,
      "recovered": 6
    }
  },
  {
    "SAU": {
      "confirmed": 21402,
      "deaths": 157,
      "recovered": 2953
    }
  },
  {
    "SVN": {
      "confirmed": 1418,
      "deaths": 89,
      "recovered": 230
    }
  },
  {
    "AND": {
      "confirmed": 743,
      "deaths": 42,
      "recovered": 423
    }
  },
  {
    "DZA": {
      "confirmed": 3848,
      "deaths": 444,
      "recovered": 1702
    }
  },
  {
    "ALB": {
      "confirmed": 766,
      "deaths": 30,
      "recovered": 455
    }
  },
  {
    "AFG": {
      "confirmed": 1939,
      "deaths": 60,
      "recovered": 252
    }
  },
  {
    "AGO": {
      "confirmed": 27,
      "deaths": 2,
      "recovered": 7
    }
  },
  {
    "AUS": {
      "confirmed": 6752,
      "deaths": 91,
      "recovered": 5715
    }
  },
  {
    "ARM": {
      "confirmed": 1932,
      "deaths": 30,
      "recovered": 900
    }
  },
  {
    "ARG": {
      "confirmed": 4285,
      "deaths": 214,
      "recovered": 1192
    }
  },
  {
    "ATG": {
      "confirmed": 24,
      "deaths": 3,
      "recovered": 11
    }
  },
  {
    "AUT": {
      "confirmed": 15402,
      "deaths": 580,
      "recovered": 12779
    }
  },
  {
    "BHR": {
      "confirmed": 2921,
      "deaths": 8,
      "recovered": 1455
    }
  },
  {
    "BHS": {
      "confirmed": 80,
      "deaths": 11,
      "recovered": 23
    }
  },
  {
    "AZE": {
      "confirmed": 1766,
      "deaths": 23,
      "recovered": 1267
    }
  },
  {
    "BLR": {
      "confirmed": 13181,
      "deaths": 84,
      "recovered": 2072
    }
  },
  {
    "BGD": {
      "confirmed": 7103,
      "deaths": 163,
      "recovered": 150
    }
  },
  {
    "BRB": {
      "confirmed": 80,
      "deaths": 7,
      "recovered": 39
    }
  },
  {
    "BOL": {
      "confirmed": 1110,
      "deaths": 59,
      "recovered": 117
    }
  },
  {
    "BEN": {
      "confirmed": 64,
      "deaths": 1,
      "recovered": 33
    }
  },
  {
    "BEL": {
      "confirmed": 47859,
      "deaths": 7501,
      "recovered": 11283
    }
  },
  {
    "BIH": {
      "confirmed": 1677,
      "deaths": 65,
      "recovered": 710
    }
  },
  {
    "BTN": {
      "confirmed": 7,
      "deaths": 0,
      "recovered": 5
    }
  },
  {
    "BFA": {
      "confirmed": 641,
      "deaths": 43,
      "recovered": 498
    }
  },
  {
    "BRN": {
      "confirmed": 138,
      "deaths": 1,
      "recovered": 124
    }
  },
  {
    "BRA": {
      "confirmed": 79685,
      "deaths": 5513,
      "recovered": 34132
    }
  },
  {
    "CPV": {
      "confirmed": 114,
      "deaths": 1,
      "recovered": 2
    }
  },
  {
    "BGR": {
      "confirmed": 1447,
      "deaths": 64,
      "recovered": 243
    }
  },
  {
    "CAF": {
      "confirmed": 50,
      "deaths": 0,
      "recovered": 10
    }
  },
  {
    "CMR": {
      "confirmed": 1832,
      "deaths": 61,
      "recovered": 934
    }
  },
  {
    "KHM": {
      "confirmed": 122,
      "deaths": 0,
      "recovered": 119
    }
  },
  {
    "TCD": {
      "confirmed": 52,
      "deaths": 2,
      "recovered": 19
    }
  },
  {
    "CAN": {
      "confirmed": 52865,
      "deaths": 3155,
      "recovered": 20327
    }
  },
  {
    "CHN": {
      "confirmed": 83944,
      "deaths": 4637,
      "recovered": 78474
    }
  },
  {
    "CHL": {
      "confirmed": 14885,
      "deaths": 216,
      "recovered": 8057
    }
  },
  {
    "COD": {
      "confirmed": 491,
      "deaths": 30,
      "recovered": 59
    }
  },
  {
    "COG": {
      "confirmed": 207,
      "deaths": 8,
      "recovered": 19
    }
  },
  {
    "COL": {
      "confirmed": 6207,
      "deaths": 278,
      "recovered": 1411
    }
  },
  {
    "CIV": {
      "confirmed": 1238,
      "deaths": 14,
      "recovered": 557
    }
  },
  {
    "CRI": {
      "confirmed": 713,
      "deaths": 6,
      "recovered": 323
    }
  },
  {
    "CUB": {
      "confirmed": 1467,
      "deaths": 58,
      "recovered": 617
    }
  },
  {
    "DPS": {
      "confirmed": 712,
      "deaths": 13,
      "recovered": 645
    }
  },
  {
    "HRV": {
      "confirmed": 2062,
      "deaths": 67,
      "recovered": 1288
    }
  },
  {
    "CZE": {
      "confirmed": 7579,
      "deaths": 227,
      "recovered": 3108
    }
  },
  {
    "DOM": {
      "confirmed": 6652,
      "deaths": 293,
      "recovered": 1228
    }
  },
  {
    "DJI": {
      "confirmed": 1077,
      "deaths": 2,
      "recovered": 599
    }
  },
  {
    "CYP": {
      "confirmed": 843,
      "deaths": 15,
      "recovered": 148
    }
  },
  {
    "DNK": {
      "confirmed": 9206,
      "deaths": 443,
      "recovered": 6558
    }
  },
  {
    "EGY": {
      "confirmed": 5268,
      "deaths": 380,
      "recovered": 1335
    }
  },
  {
    "ERI": {
      "confirmed": 39,
      "deaths": 0,
      "recovered": 19
    }
  },
  {
    "GNQ": {
      "confirmed": 315,
      "deaths": 1,
      "recovered": 9
    }
  },
  {
    "ECU": {
      "confirmed": 24675,
      "deaths": 883,
      "recovered": 1557
    }
  },
  {
    "EST": {
      "confirmed": 1666,
      "deaths": 50,
      "recovered": 236
    }
  },
  {
    "SLV": {
      "confirmed": 377,
      "deaths": 9,
      "recovered": 106
    }
  },
  {
    "SWZ": {
      "confirmed": 91,
      "deaths": 1,
      "recovered": 10
    }
  },
  {
    "SGP": {
      "confirmed": 15641,
      "deaths": 14,
      "recovered": 1188
    }
  },
  {
    "SOM": {
      "confirmed": 582,
      "deaths": 28,
      "recovered": 20
    }
  },
  {
    "ZAF": {
      "confirmed": 5350,
      "deaths": 103,
      "recovered": 2073
    }
  },
  {
    "SVK": {
      "confirmed": 1391,
      "deaths": 22,
      "recovered": 484
    }
  },
  {
    "ESP": {
      "confirmed": 236899,
      "deaths": 24275,
      "recovered": 132929
    }
  },
  {
    "SUR": {
      "confirmed": 10,
      "deaths": 1,
      "recovered": 8
    }
  },
  {
    "SDN": {
      "confirmed": 375,
      "deaths": 28,
      "recovered": 32
    }
  },
  {
    "LKA": {
      "confirmed": 649,
      "deaths": 7,
      "recovered": 136
    }
  },
  {
    "CHE": {
      "confirmed": 29407,
      "deaths": 1716,
      "recovered": 22600
    }
  },
  {
    "TGO": {
      "confirmed": 109,
      "deaths": 7,
      "recovered": 64
    }
  },
  {
    "UGA": {
      "confirmed": 81,
      "deaths": 0,
      "recovered": 52
    }
  },
  {
    "TUR": {
      "confirmed": 117589,
      "deaths": 3081,
      "recovered": 44040
    }
  },
  {
    "TUN": {
      "confirmed": 980,
      "deaths": 40,
      "recovered": 294
    }
  },
  {
    "TTO": {
      "confirmed": 116,
      "deaths": 8,
      "recovered": 71
    }
  },
  {
    "UKR": {
      "confirmed": 9866,
      "deaths": 250,
      "recovered": 1103
    }
  },
  {
    "USA": {
      "confirmed": 1039909,
      "deaths": 60967,
      "recovered": 120720
    }
  },
  {
    "URY": {
      "confirmed": 630,
      "deaths": 15,
      "recovered": 412
    }
  },
  {
    "GBR": {
      "confirmed": 166441,
      "deaths": 26166,
      "recovered": 857
    }
  },
  {
    "ARE": {
      "confirmed": 11929,
      "deaths": 98,
      "recovered": 2329
    }
  },
  {
    "UZB": {
      "confirmed": 2002,
      "deaths": 9,
      "recovered": 1096
    }
  },
  {
    "ZWE": {
      "confirmed": 32,
      "deaths": 4,
      "recovered": 5
    }
  },
  {
    "ZMB": {
      "confirmed": 97,
      "deaths": 3,
      "recovered": 54
    }
  },
  {
    "VNM": {
      "confirmed": 270,
      "deaths": 0,
      "recovered": 222
    }
  },
  {
    "VEN": {
      "confirmed": 331,
      "deaths": 10,
      "recovered": 142
    }
  },
  {
    "DMA": {
      "confirmed": 16,
      "deaths": 0,
      "recovered": 13
    }
  },
  {
    "BLZ": {
      "confirmed": 18,
      "deaths": 2,
      "recovered": 9
    }
  },
  {
    "TLS": {
      "confirmed": 24,
      "deaths": 0,
      "recovered": 6
    }
  },
  {
    "SYR": {
      "confirmed": 43,
      "deaths": 3,
      "recovered": 21
    }
  },
  {
    "MOZ": {
      "confirmed": 76,
      "deaths": 0,
      "recovered": 12
    }
  },
  {
    "GRD": {
      "confirmed": 20,
      "deaths": 0,
      "recovered": 13
    }
  },
  {
    "MLI": {
      "confirmed": 482,
      "deaths": 25,
      "recovered": 129
    }
  },
  {
    "GNB": {
      "confirmed": 205,
      "deaths": 1,
      "recovered": 19
    }
  },
  {
    "WBG": {
      "confirmed": 344,
      "deaths": 2,
      "recovered": 71
    }
  },
  {
    "LBY": {
      "confirmed": 61,
      "deaths": 2,
      "recovered": 18
    }
  },
  {
    "LAO": {
      "confirmed": 19,
      "deaths": 0,
      "recovered": 7
    }
  },
  {
    "BWA": {
      "confirmed": 23,
      "deaths": 1,
      "recovered": 5
    }
  },
  {
    "MSZ": {
      "confirmed": 9,
      "deaths": 2,
      "recovered": 0
    }
  },
  {
    "MMR": {
      "confirmed": 150,
      "deaths": 6,
      "recovered": 27
    }
  },
  {
    "RKS": {
      "confirmed": 510,
      "deaths": 12,
      "recovered": 93
    }
  },
  {
    "KNA": {
      "confirmed": 15,
      "deaths": 0,
      "recovered": 4
    }
  },
  {
    "ESH": {
      "confirmed": 6,
      "deaths": 0,
      "recovered": 5
    }
  },
  {
    "SSD": {
      "confirmed": 34,
      "deaths": 0,
      "recovered": 0
    }
  },
  {
    "MWI": {
      "confirmed": 36,
      "deaths": 3,
      "recovered": 7
    }
  },
  {
    "SLE": {
      "confirmed": 104,
      "deaths": 4,
      "recovered": 12
    }
  },
  {
    "BDI": {
      "confirmed": 11,
      "deaths": 1,
      "recovered": 4
    }
  },
  {
    "YEM": {
      "confirmed": 6,
      "deaths": 0,
      "recovered": 1
    }
  },
  {
    "STP": {
      "confirmed": 8,
      "deaths": 0,
      "recovered": 4
    }
  }
]
//* console.log(Object.entries(data[0])[0]);  <gold ticket
const writeJson = data => {
  fs.writeFileSync('./newjson.json', data)
}
const flattenCountryData = (data) => { //! step one in getting top 10
  let grandTotal = 0;
  let flattenedObjArray = [];
  data.forEach(country => {
    let sumPerCountry = Object.entries(country[0])
      .map((array) => {
        // console.log(Object.entries(array[1]))
        return [
            ["name", array[0]]
          ]
          .concat(Object.entries(array[1]))
          .reduce((obj, [prop, val]) => {
            obj[prop] = val;
            return obj;
          }, {});
      });
    flattenedObjArray.push(sumPerCountry)
  })
  // console.log(grandTotal);
  // console.log(flattenedObjArray[0][0]);

};





const flat = [{
    "country": "SWE",
    "confirmed": 20302,
    "deaths": 2462,
    "recovered": 1005
  },
  {
    "country": "TZA",
    "confirmed": 480,
    "deaths": 16,
    "recovered": 167
  },
  {
    "country": "TWN",
    "confirmed": 429,
    "deaths": 6,
    "recovered": 311
  },
  {
    "country": "THA",
    "confirmed": 2947,
    "deaths": 54,
    "recovered": 2665
  },
  {
    "country": "FRA",
    "confirmed": 166543,
    "deaths": 24121,
    "recovered": 49118
  },
  {
    "country": "FIN",
    "confirmed": 4906,
    "deaths": 206,
    "recovered": 2800
  },
  {
    "country": "FJI",
    "confirmed": 18,
    "deaths": 0,
    "recovered": 12
  },
  {
    "country": "ETH",
    "confirmed": 130,
    "deaths": 3,
    "recovered": 58
  },
  {
    "country": "GAB",
    "confirmed": 276,
    "deaths": 3,
    "recovered": 67
  },
  {
    "country": "GHA",
    "confirmed": 1671,
    "deaths": 16,
    "recovered": 188
  },
  {
    "country": "DEU",
    "confirmed": 161539,
    "deaths": 6467,
    "recovered": 120400
  },
  {
    "country": "GEO",
    "confirmed": 517,
    "deaths": 6,
    "recovered": 178
  },
  {
    "country": "GMB",
    "confirmed": 10,
    "deaths": 1,
    "recovered": 8
  },
  {
    "country": "GTM",
    "confirmed": 557,
    "deaths": 16,
    "recovered": 62
  },
  {
    "country": "GRC",
    "confirmed": 2576,
    "deaths": 139,
    "recovered": 577
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
    "country": "GIN",
    "confirmed": 1351,
    "deaths": 7,
    "recovered": 313
  },
  {
    "country": "HND",
    "confirmed": 738,
    "deaths": 66,
    "recovered": 73
  },
  {
    "country": "VAT",
    "confirmed": 10,
    "deaths": 0,
    "recovered": 2
  },
  {
    "country": "IND",
    "confirmed": 33062,
    "deaths": 1079,
    "recovered": 8437
  },
  {
    "country": "ISL",
    "confirmed": 1797,
    "deaths": 10,
    "recovered": 1656
  },
  {
    "country": "HUN",
    "confirmed": 2727,
    "deaths": 300,
    "recovered": 536
  },
  {
    "country": "IRQ",
    "confirmed": 2003,
    "deaths": 92,
    "recovered": 1346
  },
  {
    "country": "IRN",
    "confirmed": 93657,
    "deaths": 5957,
    "recovered": 73791
  },
  {
    "country": "IDN",
    "confirmed": 9771,
    "deaths": 784,
    "recovered": 1391
  },
  {
    "country": "ISR",
    "confirmed": 15834,
    "deaths": 215,
    "recovered": 8233
  },
  {
    "country": "IRL",
    "confirmed": 20253,
    "deaths": 1190,
    "recovered": 13386
  },
  {
    "country": "JPN",
    "confirmed": 13895,
    "deaths": 413,
    "recovered": 2368
  },
  {
    "country": "JAM",
    "confirmed": 396,
    "deaths": 7,
    "recovered": 29
  },
  {
    "country": "ITA",
    "confirmed": 203591,
    "deaths": 27682,
    "recovered": 71252
  },
  {
    "country": "KAZ",
    "confirmed": 3138,
    "deaths": 25,
    "recovered": 819
  },
  {
    "country": "JOR",
    "confirmed": 451,
    "deaths": 8,
    "recovered": 356
  },
  {
    "country": "KWT",
    "confirmed": 3740,
    "deaths": 24,
    "recovered": 1389
  },
  {
    "country": "KOR",
    "confirmed": 10765,
    "deaths": 247,
    "recovered": 9059
  },
  {
    "country": "KEN",
    "confirmed": 384,
    "deaths": 15,
    "recovered": 129
  },
  {
    "country": "LVA",
    "confirmed": 849,
    "deaths": 15,
    "recovered": 348
  },
  {
    "country": "KGZ",
    "confirmed": 729,
    "deaths": 8,
    "recovered": 437
  },
  {
    "country": "LIE",
    "confirmed": 82,
    "deaths": 1,
    "recovered": 55
  },
  {
    "country": "LBR",
    "confirmed": 141,
    "deaths": 16,
    "recovered": 45
  },
  {
    "country": "LBN",
    "confirmed": 721,
    "deaths": 24,
    "recovered": 150
  },
  {
    "country": "LUX",
    "confirmed": 3769,
    "deaths": 89,
    "recovered": 3134
  },
  {
    "country": "LTU",
    "confirmed": 1375,
    "deaths": 45,
    "recovered": 563
  },
  {
    "country": "MLT",
    "confirmed": 463,
    "deaths": 4,
    "recovered": 339
  },
  {
    "country": "MDV",
    "confirmed": 278,
    "deaths": 1,
    "recovered": 17
  },
  {
    "country": "MYS",
    "confirmed": 5945,
    "deaths": 100,
    "recovered": 4087
  },
  {
    "country": "MDG",
    "confirmed": 128,
    "deaths": 0,
    "recovered": 90
  },
  {
    "country": "MRT",
    "confirmed": 8,
    "deaths": 1,
    "recovered": 6
  },
  {
    "country": "MCO",
    "confirmed": 95,
    "deaths": 4,
    "recovered": 58
  },
  {
    "country": "MDA",
    "confirmed": 3771,
    "deaths": 111,
    "recovered": 1114
  },
  {
    "country": "MEX",
    "confirmed": 17799,
    "deaths": 1732,
    "recovered": 11423
  },
  {
    "country": "MUS",
    "confirmed": 332,
    "deaths": 10,
    "recovered": 306
  },
  {
    "country": "MNG",
    "confirmed": 38,
    "deaths": 0,
    "recovered": 10
  },
  {
    "country": "NLD",
    "confirmed": 38998,
    "deaths": 4727,
    "recovered": 119
  },
  {
    "country": "NPL",
    "confirmed": 57,
    "deaths": 0,
    "recovered": 16
  },
  {
    "country": "NAM",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 8
  },
  {
    "country": "MAR",
    "confirmed": 4321,
    "deaths": 168,
    "recovered": 928
  },
  {
    "country": "MNE",
    "confirmed": 322,
    "deaths": 7,
    "recovered": 203
  },
  {
    "country": "MKD",
    "confirmed": 1442,
    "deaths": 73,
    "recovered": 627
  },
  {
    "country": "NGA",
    "confirmed": 1728,
    "deaths": 51,
    "recovered": 307
  },
  {
    "country": "NER",
    "confirmed": 713,
    "deaths": 32,
    "recovered": 435
  },
  {
    "country": "NIC",
    "confirmed": 13,
    "deaths": 3,
    "recovered": 7
  },
  {
    "country": "NZL",
    "confirmed": 1476,
    "deaths": 19,
    "recovered": 1241
  },
  {
    "country": "PNG",
    "confirmed": 8,
    "deaths": 0,
    "recovered": 0
  },
  {
    "country": "PAN",
    "confirmed": 6378,
    "deaths": 178,
    "recovered": 527
  },
  {
    "country": "PAK",
    "confirmed": 15525,
    "deaths": 343,
    "recovered": 3425
  },
  {
    "country": "OMN",
    "confirmed": 2274,
    "deaths": 10,
    "recovered": 364
  },
  {
    "country": "NOR",
    "confirmed": 7710,
    "deaths": 207,
    "recovered": 32
  },
  {
    "country": "PRT",
    "confirmed": 24505,
    "deaths": 973,
    "recovered": 1470
  },
  {
    "country": "POL",
    "confirmed": 12640,
    "deaths": 624,
    "recovered": 3025
  },
  {
    "country": "PHL",
    "confirmed": 8212,
    "deaths": 558,
    "recovered": 1023
  },
  {
    "country": "PER",
    "confirmed": 33931,
    "deaths": 943,
    "recovered": 10037
  },
  {
    "country": "PRY",
    "confirmed": 239,
    "deaths": 9,
    "recovered": 102
  },
  {
    "country": "QAT",
    "confirmed": 12564,
    "deaths": 10,
    "recovered": 1243
  },
  {
    "country": "LCA",
    "confirmed": 17,
    "deaths": 0,
    "recovered": 15
  },
  {
    "country": "RWA",
    "confirmed": 225,
    "deaths": 0,
    "recovered": 98
  },
  {
    "country": "RUS",
    "confirmed": 99399,
    "deaths": 972,
    "recovered": 10286
  },
  {
    "country": "ROU",
    "confirmed": 11978,
    "deaths": 693,
    "recovered": 3569
  },
  {
    "country": "VCT",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 8
  },
  {
    "country": "SEN",
    "confirmed": 882,
    "deaths": 9,
    "recovered": 315
  },
  {
    "country": "SMR",
    "confirmed": 563,
    "deaths": 41,
    "recovered": 69
  },
  {
    "country": "SRB",
    "confirmed": 6630,
    "deaths": 125,
    "recovered": 870
  },
  {
    "country": "SYC",
    "confirmed": 11,
    "deaths": 0,
    "recovered": 6
  },
  {
    "country": "SAU",
    "confirmed": 21402,
    "deaths": 157,
    "recovered": 2953
  },
  {
    "country": "SVN",
    "confirmed": 1418,
    "deaths": 89,
    "recovered": 230
  },
  {
    "country": "AND",
    "confirmed": 743,
    "deaths": 42,
    "recovered": 423
  },
  {
    "country": "DZA",
    "confirmed": 3848,
    "deaths": 444,
    "recovered": 1702
  },
  {
    "country": "ALB",
    "confirmed": 766,
    "deaths": 30,
    "recovered": 455
  },
  {
    "country": "AFG",
    "confirmed": 1939,
    "deaths": 60,
    "recovered": 252
  },
  {
    "country": "AGO",
    "confirmed": 27,
    "deaths": 2,
    "recovered": 7
  },
  {
    "country": "AUS",
    "confirmed": 6752,
    "deaths": 91,
    "recovered": 5715
  },
  {
    "country": "ARM",
    "confirmed": 1932,
    "deaths": 30,
    "recovered": 900
  },
  {
    "country": "ARG",
    "confirmed": 4285,
    "deaths": 214,
    "recovered": 1192
  },
  {
    "country": "ATG",
    "confirmed": 24,
    "deaths": 3,
    "recovered": 11
  },
  {
    "country": "AUT",
    "confirmed": 15402,
    "deaths": 580,
    "recovered": 12779
  },
  {
    "country": "BHR",
    "confirmed": 2921,
    "deaths": 8,
    "recovered": 1455
  },
  {
    "country": "BHS",
    "confirmed": 80,
    "deaths": 11,
    "recovered": 23
  },
  {
    "country": "AZE",
    "confirmed": 1766,
    "deaths": 23,
    "recovered": 1267
  },
  {
    "country": "BLR",
    "confirmed": 13181,
    "deaths": 84,
    "recovered": 2072
  },
  {
    "country": "BGD",
    "confirmed": 7103,
    "deaths": 163,
    "recovered": 150
  },
  {
    "country": "BRB",
    "confirmed": 80,
    "deaths": 7,
    "recovered": 39
  },
  {
    "country": "BOL",
    "confirmed": 1110,
    "deaths": 59,
    "recovered": 117
  },
  {
    "country": "BEN",
    "confirmed": 64,
    "deaths": 1,
    "recovered": 33
  },
  {
    "country": "BEL",
    "confirmed": 47859,
    "deaths": 7501,
    "recovered": 11283
  },
  {
    "country": "BIH",
    "confirmed": 1677,
    "deaths": 65,
    "recovered": 710
  },
  {
    "country": "BTN",
    "confirmed": 7,
    "deaths": 0,
    "recovered": 5
  },
  {
    "country": "BFA",
    "confirmed": 641,
    "deaths": 43,
    "recovered": 498
  },
  {
    "country": "BRN",
    "confirmed": 138,
    "deaths": 1,
    "recovered": 124
  },
  {
    "country": "BRA",
    "confirmed": 79685,
    "deaths": 5513,
    "recovered": 34132
  },
  {
    "country": "CPV",
    "confirmed": 114,
    "deaths": 1,
    "recovered": 2
  },
  {
    "country": "BGR",
    "confirmed": 1447,
    "deaths": 64,
    "recovered": 243
  },
  {
    "country": "CAF",
    "confirmed": 50,
    "deaths": 0,
    "recovered": 10
  },
  {
    "country": "CMR",
    "confirmed": 1832,
    "deaths": 61,
    "recovered": 934
  },
  {
    "country": "KHM",
    "confirmed": 122,
    "deaths": 0,
    "recovered": 119
  },
  {
    "country": "TCD",
    "confirmed": 52,
    "deaths": 2,
    "recovered": 19
  },
  {
    "country": "CAN",
    "confirmed": 52865,
    "deaths": 3155,
    "recovered": 20327
  },
  {
    "country": "CHN",
    "confirmed": 83944,
    "deaths": 4637,
    "recovered": 78474
  },
  {
    "country": "CHL",
    "confirmed": 14885,
    "deaths": 216,
    "recovered": 8057
  },
  {
    "country": "COD",
    "confirmed": 491,
    "deaths": 30,
    "recovered": 59
  },
  {
    "country": "COG",
    "confirmed": 207,
    "deaths": 8,
    "recovered": 19
  },
  {
    "country": "COL",
    "confirmed": 6207,
    "deaths": 278,
    "recovered": 1411
  },
  {
    "country": "CIV",
    "confirmed": 1238,
    "deaths": 14,
    "recovered": 557
  },
  {
    "country": "CRI",
    "confirmed": 713,
    "deaths": 6,
    "recovered": 323
  },
  {
    "country": "CUB",
    "confirmed": 1467,
    "deaths": 58,
    "recovered": 617
  },
  {
    "country": "DPS",
    "confirmed": 712,
    "deaths": 13,
    "recovered": 645
  },
  {
    "country": "HRV",
    "confirmed": 2062,
    "deaths": 67,
    "recovered": 1288
  },
  {
    "country": "CZE",
    "confirmed": 7579,
    "deaths": 227,
    "recovered": 3108
  },
  {
    "country": "DOM",
    "confirmed": 6652,
    "deaths": 293,
    "recovered": 1228
  },
  {
    "country": "DJI",
    "confirmed": 1077,
    "deaths": 2,
    "recovered": 599
  },
  {
    "country": "CYP",
    "confirmed": 843,
    "deaths": 15,
    "recovered": 148
  },
  {
    "country": "DNK",
    "confirmed": 9206,
    "deaths": 443,
    "recovered": 6558
  },
  {
    "country": "EGY",
    "confirmed": 5268,
    "deaths": 380,
    "recovered": 1335
  },
  {
    "country": "ERI",
    "confirmed": 39,
    "deaths": 0,
    "recovered": 19
  },
  {
    "country": "GNQ",
    "confirmed": 315,
    "deaths": 1,
    "recovered": 9
  },
  {
    "country": "ECU",
    "confirmed": 24675,
    "deaths": 883,
    "recovered": 1557
  },
  {
    "country": "EST",
    "confirmed": 1666,
    "deaths": 50,
    "recovered": 236
  },
  {
    "country": "SLV",
    "confirmed": 377,
    "deaths": 9,
    "recovered": 106
  },
  {
    "country": "SWZ",
    "confirmed": 91,
    "deaths": 1,
    "recovered": 10
  },
  {
    "country": "SGP",
    "confirmed": 15641,
    "deaths": 14,
    "recovered": 1188
  },
  {
    "country": "SOM",
    "confirmed": 582,
    "deaths": 28,
    "recovered": 20
  },
  {
    "country": "ZAF",
    "confirmed": 5350,
    "deaths": 103,
    "recovered": 2073
  },
  {
    "country": "SVK",
    "confirmed": 1391,
    "deaths": 22,
    "recovered": 484
  },
  {
    "country": "ESP",
    "confirmed": 236899,
    "deaths": 24275,
    "recovered": 132929
  },
  {
    "country": "SUR",
    "confirmed": 10,
    "deaths": 1,
    "recovered": 8
  },
  {
    "country": "SDN",
    "confirmed": 375,
    "deaths": 28,
    "recovered": 32
  },
  {
    "country": "LKA",
    "confirmed": 649,
    "deaths": 7,
    "recovered": 136
  },
  {
    "country": "CHE",
    "confirmed": 29407,
    "deaths": 1716,
    "recovered": 22600
  },
  {
    "country": "TGO",
    "confirmed": 109,
    "deaths": 7,
    "recovered": 64
  },
  {
    "country": "UGA",
    "confirmed": 81,
    "deaths": 0,
    "recovered": 52
  },
  {
    "country": "TUR",
    "confirmed": 117589,
    "deaths": 3081,
    "recovered": 44040
  },
  {
    "country": "TUN",
    "confirmed": 980,
    "deaths": 40,
    "recovered": 294
  },
  {
    "country": "TTO",
    "confirmed": 116,
    "deaths": 8,
    "recovered": 71
  },
  {
    "country": "UKR",
    "confirmed": 9866,
    "deaths": 250,
    "recovered": 1103
  },
  {
    "country": "USA",
    "confirmed": 1039909,
    "deaths": 60967,
    "recovered": 120720
  },
  {
    "country": "URY",
    "confirmed": 630,
    "deaths": 15,
    "recovered": 412
  },
  {
    "country": "GBR",
    "confirmed": 166441,
    "deaths": 26166,
    "recovered": 857
  },
  {
    "country": "ARE",
    "confirmed": 11929,
    "deaths": 98,
    "recovered": 2329
  },
  {
    "country": "UZB",
    "confirmed": 2002,
    "deaths": 9,
    "recovered": 1096
  },
  {
    "country": "ZWE",
    "confirmed": 32,
    "deaths": 4,
    "recovered": 5
  },
  {
    "country": "ZMB",
    "confirmed": 97,
    "deaths": 3,
    "recovered": 54
  },
  {
    "country": "VNM",
    "confirmed": 270,
    "deaths": 0,
    "recovered": 222
  },
  {
    "country": "VEN",
    "confirmed": 331,
    "deaths": 10,
    "recovered": 142
  },
  {
    "country": "DMA",
    "confirmed": 16,
    "deaths": 0,
    "recovered": 13
  },
  {
    "country": "BLZ",
    "confirmed": 18,
    "deaths": 2,
    "recovered": 9
  },
  {
    "country": "TLS",
    "confirmed": 24,
    "deaths": 0,
    "recovered": 6
  },
  {
    "country": "SYR",
    "confirmed": 43,
    "deaths": 3,
    "recovered": 21
  },
  {
    "country": "MOZ",
    "confirmed": 76,
    "deaths": 0,
    "recovered": 12
  },
  {
    "country": "GRD",
    "confirmed": 20,
    "deaths": 0,
    "recovered": 13
  },
  {
    "country": "MLI",
    "confirmed": 482,
    "deaths": 25,
    "recovered": 129
  },
  {
    "country": "GNB",
    "confirmed": 205,
    "deaths": 1,
    "recovered": 19
  },
  {
    "country": "WBG",
    "confirmed": 344,
    "deaths": 2,
    "recovered": 71
  },
  {
    "country": "LBY",
    "confirmed": 61,
    "deaths": 2,
    "recovered": 18
  },
  {
    "country": "LAO",
    "confirmed": 19,
    "deaths": 0,
    "recovered": 7
  },
  {
    "country": "BWA",
    "confirmed": 23,
    "deaths": 1,
    "recovered": 5
  },
  {
    "country": "MSZ",
    "confirmed": 9,
    "deaths": 2,
    "recovered": 0
  },
  {
    "country": "MMR",
    "confirmed": 150,
    "deaths": 6,
    "recovered": 27
  },
  {
    "country": "RKS",
    "confirmed": 510,
    "deaths": 12,
    "recovered": 93
  },
  {
    "country": "KNA",
    "confirmed": 15,
    "deaths": 0,
    "recovered": 4
  },
  {
    "country": "ESH",
    "confirmed": 6,
    "deaths": 0,
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
    "country": "SLE",
    "confirmed": 104,
    "deaths": 4,
    "recovered": 12
  },
  {
    "country": "BDI",
    "confirmed": 11,
    "deaths": 1,
    "recovered": 4
  },
  {
    "country": "YEM",
    "confirmed": 6,
    "deaths": 0,
    "recovered": 1
  },
  {
    "country": "STP",
    "confirmed": 8,
    "deaths": 0,
    "recovered": 4
  }
]


flat.sort((a, b) => {
  let first = parseInt(a.confirmed)
  let second = parseInt(b.confirmed)
  if (first > second) {
    return 1;
  } else {}
  return -1
})
console.log('after sort');

console.log(flat);
writeJson(JSON.stringify(flat, null, 2))

//! sum all categories for every country
const sumCountries = (data) => {
  const grandTotal = 0;
  // console.log(Object.values(data[0]));
  data.forEach(country => {
    let sumPerCountry = Object.values(country[0])
      .reduce((acc, curr) => {
        return acc += parseInt(curr)
      }, 0);
    // console.log(sumPerCountry);
    grandTotal += sumPerCountry
  })
  // console.log(grandTotal);
};
sumCountries(gLatest);
gLatest.forEach(ctry => {})