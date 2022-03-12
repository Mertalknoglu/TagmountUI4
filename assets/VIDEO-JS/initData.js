var videoDiv;
var videoDrawWidth = 0;
var videoDrawHeight= 0;
var infoCardHtml = "";
var pointerHtml = "";
var pointerOpenURL = "";


/**silinecek ornek data begin */
// videoDrawWidth=730;
// videoDrawHeight=614;
// drawList=[
//     {
//         "time": 90.137678,
//         "positionx": 19.40625,
//         "positiony": 174.40625
//     },
//     {
//         "time": 90.142446,
//         "positionx": 20.40625,
//         "positiony": 174.40625
//     },
//     {
//         "time": 90.149798,
//         "positionx": 21.40625,
//         "positiony": 174.40625
//     },
//     {
//         "time": 90.159959,
//         "positionx": 22.40625,
//         "positiony": 174.40625
//     },
//     {
//         "time": 90.169442,
//         "positionx": 22.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.175428,
//         "positionx": 23.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.188154,
//         "positionx": 24.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.192406,
//         "positionx": 25.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.200716,
//         "positionx": 26.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.213364,
//         "positionx": 27.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.221064,
//         "positionx": 28.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.228339,
//         "positionx": 29.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.228339,
//         "positionx": 30.40625,
//         "positiony": 175.40625
//     },
//     {
//         "time": 90.22992,
//         "positionx": 30.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.231291,
//         "positionx": 31.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.240705,
//         "positionx": 32.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.248043,
//         "positionx": 33.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.255039,
//         "positionx": 34.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.260752,
//         "positionx": 35.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.27527,
//         "positionx": 36.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.278714,
//         "positionx": 37.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.288182,
//         "positionx": 38.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.29492,
//         "positionx": 39.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.494693,
//         "positionx": 40.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.519681,
//         "positionx": 41.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.541513,
//         "positionx": 42.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.557245,
//         "positionx": 43.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.565811,
//         "positionx": 44.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.580782,
//         "positionx": 45.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.586103,
//         "positionx": 46.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.596872,
//         "positionx": 47.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.615501,
//         "positionx": 48.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.621471,
//         "positionx": 49.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.639046,
//         "positionx": 50.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.642113,
//         "positionx": 51.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.647378,
//         "positionx": 52.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.654673,
//         "positionx": 53.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.659125,
//         "positionx": 54.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.67065,
//         "positionx": 55.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.677797,
//         "positionx": 56.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.702281,
//         "positionx": 57.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.750042,
//         "positionx": 58.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.769975,
//         "positionx": 59.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.783538,
//         "positionx": 60.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.800469,
//         "positionx": 61.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.809227,
//         "positionx": 62.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.81561,
//         "positionx": 63.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.841188,
//         "positionx": 64.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.860832,
//         "positionx": 65.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.865399,
//         "positionx": 66.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.886886,
//         "positionx": 67.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.914027,
//         "positionx": 68.40625,
//         "positiony": 176.40625
//     },
//     {
//         "time": 90.917509,
//         "positionx": 68.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.921353,
//         "positionx": 69.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.938387,
//         "positionx": 70.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.947452,
//         "positionx": 71.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.948799,
//         "positionx": 72.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.956784,
//         "positionx": 73.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.961805,
//         "positionx": 74.40625,
//         "positiony": 177.40625
//     },
//     {
//         "time": 90.962124,
//         "positionx": 74.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 90.972302,
//         "positionx": 75.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 90.975917,
//         "positionx": 76.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 90.988894,
//         "positionx": 77.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 90.995017,
//         "positionx": 78.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.005772,
//         "positionx": 79.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.015536,
//         "positionx": 80.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.03219,
//         "positionx": 81.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.03602,
//         "positionx": 82.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.052569,
//         "positionx": 83.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.062712,
//         "positionx": 84.40625,
//         "positiony": 178.40625
//     },
//     {
//         "time": 91.065947,
//         "positionx": 84.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.07713,
//         "positionx": 85.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.085375,
//         "positionx": 86.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.085375,
//         "positionx": 87.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.098575,
//         "positionx": 88.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.119052,
//         "positionx": 89.40625,
//         "positiony": 179.40625
//     },
//     {
//         "time": 91.133804,
//         "positionx": 89.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.142306,
//         "positionx": 90.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.156894,
//         "positionx": 91.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.167852,
//         "positionx": 92.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.169439,
//         "positionx": 93.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.178212,
//         "positionx": 94.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.178878,
//         "positionx": 95.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.193582,
//         "positionx": 96.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.202351,
//         "positionx": 97.40625,
//         "positiony": 180.40625
//     },
//     {
//         "time": 91.202855,
//         "positionx": 97.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.215486,
//         "positionx": 98.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.218971,
//         "positionx": 99.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.236563,
//         "positionx": 100.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.305578,
//         "positionx": 101.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.34492,
//         "positionx": 102.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.349394,
//         "positionx": 103.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.38438,
//         "positionx": 104.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.407692,
//         "positionx": 105.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.444069,
//         "positionx": 106.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.460847,
//         "positionx": 107.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.4854,
//         "positionx": 108.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.51161,
//         "positionx": 109.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.539074,
//         "positionx": 110.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.551476,
//         "positionx": 111.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.566092,
//         "positionx": 112.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.587416,
//         "positionx": 113.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.610324,
//         "positionx": 114.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.628547,
//         "positionx": 115.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.642242,
//         "positionx": 116.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.653307,
//         "positionx": 117.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.665561,
//         "positionx": 118.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.665561,
//         "positionx": 119.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.669491,
//         "positionx": 120.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.678736,
//         "positionx": 121.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.693961,
//         "positionx": 122.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.702614,
//         "positionx": 123.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.711824,
//         "positionx": 124.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.724102,
//         "positionx": 125.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.741276,
//         "positionx": 126.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.74974,
//         "positionx": 127.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.761568,
//         "positionx": 128.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.786824,
//         "positionx": 129.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.796875,
//         "positionx": 130.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.808715,
//         "positionx": 131.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.81635,
//         "positionx": 132.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.856376,
//         "positionx": 133.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.892945,
//         "positionx": 134.40625,
//         "positiony": 181.40625
//     },
//     {
//         "time": 91.893603,
//         "positionx": 134.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.911838,
//         "positionx": 135.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.917517,
//         "positionx": 136.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.934256,
//         "positionx": 137.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.944597,
//         "positionx": 138.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.947091,
//         "positionx": 139.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.952939,
//         "positionx": 140.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.964309,
//         "positionx": 141.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.971079,
//         "positionx": 142.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.975295,
//         "positionx": 143.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.977386,
//         "positionx": 144.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.988505,
//         "positionx": 145.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.993486,
//         "positionx": 146.40625,
//         "positiony": 182.40625
//     },
//     {
//         "time": 91.997102,
//         "positionx": 146.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.000023,
//         "positionx": 147.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.002512,
//         "positionx": 148.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.005456,
//         "positionx": 149.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.013073,
//         "positionx": 150.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.018199,
//         "positionx": 151.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.023991,
//         "positionx": 152.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.027536,
//         "positionx": 153.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.030035,
//         "positionx": 154.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.030852,
//         "positionx": 155.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.03398,
//         "positionx": 156.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.03738,
//         "positionx": 157.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.047951,
//         "positionx": 158.40625,
//         "positiony": 183.40625
//     },
//     {
//         "time": 92.051496,
//         "positionx": 159.40625,
//         "positiony": 184.40625
//     },
//     {
//         "time": 92.057506,
//         "positionx": 160.40625,
//         "positiony": 184.40625
//     },
//     {
//         "time": 92.058717,
//         "positionx": 161.40625,
//         "positiony": 184.40625
//     },
//     {
//         "time": 92.069314,
//         "positionx": 162.40625,
//         "positiony": 184.40625
//     },
//     {
//         "time": 92.07759,
//         "positionx": 163.40625,
//         "positiony": 184.40625
//     },
//     {
//         "time": 92.080949,
//         "positionx": 163.40625,
//         "positiony": 185.40625
//     },
//     {
//         "time": 92.084974,
//         "positionx": 164.40625,
//         "positiony": 185.40625
//     },
//     {
//         "time": 92.096308,
//         "positionx": 165.40625,
//         "positiony": 185.40625
//     },
//     {
//         "time": 92.108031,
//         "positionx": 166.40625,
//         "positiony": 185.40625
//     },
//     {
//         "time": 92.108031,
//         "positionx": 166.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.128097,
//         "positionx": 167.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.165078,
//         "positionx": 168.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.173886,
//         "positionx": 169.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.191838,
//         "positionx": 170.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.203764,
//         "positionx": 171.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.221583,
//         "positionx": 172.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.226574,
//         "positionx": 173.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 92.245048,
//         "positionx": 173.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.245048,
//         "positionx": 174.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.254554,
//         "positionx": 175.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.260833,
//         "positionx": 176.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.269284,
//         "positionx": 177.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.276255,
//         "positionx": 178.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.284619,
//         "positionx": 179.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.293133,
//         "positionx": 180.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.295979,
//         "positionx": 181.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.300808,
//         "positionx": 182.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.305324,
//         "positionx": 183.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.307878,
//         "positionx": 184.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.315037,
//         "positionx": 185.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.319686,
//         "positionx": 186.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.34195,
//         "positionx": 187.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.384205,
//         "positionx": 188.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.389711,
//         "positionx": 189.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.395142,
//         "positionx": 190.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.407177,
//         "positionx": 191.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.414364,
//         "positionx": 192.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.422236,
//         "positionx": 193.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.424937,
//         "positionx": 194.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.434525,
//         "positionx": 195.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.445912,
//         "positionx": 196.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.462172,
//         "positionx": 197.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.466812,
//         "positionx": 198.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.481734,
//         "positionx": 199.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.504151,
//         "positionx": 200.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.523681,
//         "positionx": 201.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.526155,
//         "positionx": 202.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.5397,
//         "positionx": 203.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.55629,
//         "positionx": 204.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.578011,
//         "positionx": 205.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.594364,
//         "positionx": 206.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.605734,
//         "positionx": 207.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.617528,
//         "positionx": 208.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.631857,
//         "positionx": 209.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.635276,
//         "positionx": 210.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.651831,
//         "positionx": 211.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.659143,
//         "positionx": 212.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.666448,
//         "positionx": 213.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.666448,
//         "positionx": 214.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.676303,
//         "positionx": 215.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.688714,
//         "positionx": 216.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.701638,
//         "positionx": 217.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.739857,
//         "positionx": 218.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.792406,
//         "positionx": 219.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.800976,
//         "positionx": 220.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.823424,
//         "positionx": 221.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.919509,
//         "positionx": 222.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.935477,
//         "positionx": 223.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 92.96702,
//         "positionx": 224.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.018695,
//         "positionx": 225.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.026761,
//         "positionx": 226.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.026761,
//         "positionx": 227.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.050046,
//         "positionx": 228.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.067163,
//         "positionx": 229.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.073414,
//         "positionx": 230.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.07563,
//         "positionx": 231.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.091671,
//         "positionx": 232.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.097922,
//         "positionx": 233.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.107003,
//         "positionx": 234.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.110874,
//         "positionx": 235.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.110874,
//         "positionx": 236.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.113224,
//         "positionx": 237.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.118458,
//         "positionx": 238.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.119047,
//         "positionx": 239.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.130844,
//         "positionx": 240.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.131534,
//         "positionx": 241.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.137957,
//         "positionx": 242.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.140838,
//         "positionx": 243.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.14271,
//         "positionx": 244.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.150221,
//         "positionx": 245.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.158581,
//         "positionx": 246.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.16134,
//         "positionx": 247.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.166726,
//         "positionx": 248.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.175967,
//         "positionx": 249.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.182651,
//         "positionx": 250.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.192075,
//         "positionx": 251.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.192075,
//         "positionx": 252.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.192075,
//         "positionx": 253.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.19619,
//         "positionx": 254.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.207241,
//         "positionx": 255.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.211261,
//         "positionx": 256.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.217675,
//         "positionx": 257.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.235193,
//         "positionx": 258.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.244978,
//         "positionx": 259.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.244978,
//         "positionx": 260.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.255874,
//         "positionx": 261.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.271758,
//         "positionx": 262.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.291146,
//         "positionx": 263.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.294896,
//         "positionx": 264.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.312497,
//         "positionx": 265.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.320384,
//         "positionx": 266.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.328939,
//         "positionx": 267.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.328939,
//         "positionx": 268.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.335782,
//         "positionx": 269.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.349051,
//         "positionx": 270.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.356756,
//         "positionx": 271.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.357848,
//         "positionx": 271.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.360279,
//         "positionx": 272.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.376896,
//         "positionx": 273.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.388558,
//         "positionx": 274.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.390372,
//         "positionx": 275.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.397563,
//         "positionx": 276.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.405214,
//         "positionx": 277.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.413089,
//         "positionx": 278.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.422092,
//         "positionx": 279.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.433466,
//         "positionx": 280.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.441387,
//         "positionx": 281.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.454686,
//         "positionx": 282.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.467455,
//         "positionx": 283.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.467676,
//         "positionx": 284.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.470394,
//         "positionx": 285.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.475808,
//         "positionx": 286.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.485773,
//         "positionx": 287.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.495865,
//         "positionx": 288.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.500504,
//         "positionx": 289.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.510491,
//         "positionx": 290.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.516281,
//         "positionx": 291.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.524552,
//         "positionx": 293.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.537117,
//         "positionx": 294.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.543986,
//         "positionx": 295.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.54475,
//         "positionx": 296.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.548074,
//         "positionx": 297.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.554699,
//         "positionx": 298.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.562878,
//         "positionx": 299.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.57432,
//         "positionx": 300.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.577219,
//         "positionx": 301.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.586206,
//         "positionx": 302.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.595203,
//         "positionx": 303.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.601107,
//         "positionx": 304.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.604072,
//         "positionx": 305.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.604072,
//         "positionx": 306.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.609397,
//         "positionx": 307.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.614959,
//         "positionx": 308.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.62546,
//         "positionx": 309.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.62943,
//         "positionx": 310.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.635628,
//         "positionx": 311.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.643608,
//         "positionx": 312.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.65639,
//         "positionx": 313.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.659223,
//         "positionx": 314.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.670807,
//         "positionx": 315.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.676972,
//         "positionx": 316.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.684032,
//         "positionx": 317.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.686818,
//         "positionx": 318.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.686818,
//         "positionx": 319.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.698319,
//         "positionx": 320.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.711342,
//         "positionx": 321.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.717376,
//         "positionx": 322.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.737324,
//         "positionx": 323.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.74316,
//         "positionx": 324.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.747068,
//         "positionx": 325.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.75082,
//         "positionx": 326.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.76489,
//         "positionx": 327.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.771217,
//         "positionx": 328.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.782585,
//         "positionx": 329.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.796747,
//         "positionx": 330.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.818804,
//         "positionx": 331.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.826033,
//         "positionx": 332.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.838555,
//         "positionx": 333.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.849332,
//         "positionx": 334.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.864506,
//         "positionx": 335.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.883381,
//         "positionx": 336.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.899292,
//         "positionx": 337.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.910684,
//         "positionx": 338.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.910684,
//         "positionx": 339.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 93.915447,
//         "positionx": 339.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.915902,
//         "positionx": 340.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.92216,
//         "positionx": 341.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.944091,
//         "positionx": 342.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.950385,
//         "positionx": 343.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.960391,
//         "positionx": 344.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.965642,
//         "positionx": 345.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 93.987519,
//         "positionx": 346.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.008308,
//         "positionx": 347.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.035617,
//         "positionx": 348.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.053844,
//         "positionx": 349.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.071116,
//         "positionx": 350.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.073206,
//         "positionx": 351.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.081942,
//         "positionx": 352.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.092425,
//         "positionx": 353.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.099336,
//         "positionx": 354.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.115926,
//         "positionx": 355.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.12936,
//         "positionx": 356.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.134465,
//         "positionx": 357.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.182104,
//         "positionx": 358.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.19074,
//         "positionx": 359.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.208969,
//         "positionx": 360.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.232315,
//         "positionx": 361.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.265095,
//         "positionx": 362.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.265095,
//         "positionx": 363.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.291065,
//         "positionx": 364.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.32486,
//         "positionx": 365.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.335827,
//         "positionx": 366.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.348502,
//         "positionx": 367.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.374439,
//         "positionx": 368.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.393143,
//         "positionx": 369.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.400008,
//         "positionx": 370.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.405099,
//         "positionx": 371.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.41259,
//         "positionx": 372.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.427566,
//         "positionx": 373.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.442324,
//         "positionx": 374.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.451956,
//         "positionx": 375.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.46341,
//         "positionx": 376.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.484954,
//         "positionx": 377.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.496964,
//         "positionx": 378.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.502191,
//         "positionx": 379.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.518956,
//         "positionx": 380.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.536766,
//         "positionx": 381.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.550014,
//         "positionx": 382.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.550014,
//         "positionx": 383.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.556582,
//         "positionx": 384.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.570194,
//         "positionx": 385.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.580407,
//         "positionx": 386.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.593251,
//         "positionx": 387.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.596512,
//         "positionx": 388.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.602057,
//         "positionx": 389.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.614218,
//         "positionx": 390.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.620704,
//         "positionx": 391.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.622284,
//         "positionx": 392.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.629332,
//         "positionx": 393.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.629332,
//         "positionx": 394.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.633909,
//         "positionx": 395.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.637893,
//         "positionx": 396.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.646929,
//         "positionx": 397.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.657978,
//         "positionx": 398.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.670242,
//         "positionx": 399.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.680422,
//         "positionx": 400.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.686771,
//         "positionx": 401.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.700676,
//         "positionx": 402.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.713396,
//         "positionx": 403.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.717374,
//         "positionx": 404.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.732505,
//         "positionx": 405.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.743053,
//         "positionx": 406.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.760079,
//         "positionx": 407.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.765613,
//         "positionx": 408.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.772591,
//         "positionx": 409.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.791107,
//         "positionx": 410.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.799513,
//         "positionx": 411.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.806103,
//         "positionx": 412.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.814639,
//         "positionx": 413.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.822791,
//         "positionx": 414.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.836531,
//         "positionx": 415.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.839929,
//         "positionx": 416.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.847328,
//         "positionx": 417.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.847328,
//         "positionx": 418.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.857193,
//         "positionx": 419.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.870559,
//         "positionx": 420.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.87527,
//         "positionx": 421.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.881721,
//         "positionx": 422.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.886721,
//         "positionx": 423.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.896859,
//         "positionx": 424.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.899462,
//         "positionx": 425.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.904455,
//         "positionx": 426.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.904859,
//         "positionx": 427.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.910909,
//         "positionx": 428.40625,
//         "positiony": 186.40625
//     },
//     {
//         "time": 94.91336,
//         "positionx": 429.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.926776,
//         "positionx": 430.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.937234,
//         "positionx": 431.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.949713,
//         "positionx": 432.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.959103,
//         "positionx": 433.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.976315,
//         "positionx": 434.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 94.995952,
//         "positionx": 435.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.032986,
//         "positionx": 436.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.041678,
//         "positionx": 437.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.056793,
//         "positionx": 438.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.074955,
//         "positionx": 439.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.088188,
//         "positionx": 440.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.094977,
//         "positionx": 441.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.101733,
//         "positionx": 442.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.119203,
//         "positionx": 443.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.127531,
//         "positionx": 444.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.137157,
//         "positionx": 445.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.175977,
//         "positionx": 446.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.205039,
//         "positionx": 447.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.234522,
//         "positionx": 448.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.242584,
//         "positionx": 449.40625,
//         "positiony": 187.40625
//     },
//     {
//         "time": 95.269154,
//         "positionx": 450.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.271823,
//         "positionx": 451.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.292022,
//         "positionx": 452.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.309325,
//         "positionx": 453.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.316541,
//         "positionx": 454.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.335574,
//         "positionx": 455.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.346742,
//         "positionx": 456.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.35211,
//         "positionx": 457.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.353216,
//         "positionx": 458.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.361388,
//         "positionx": 459.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.373126,
//         "positionx": 460.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.380176,
//         "positionx": 461.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.383178,
//         "positionx": 462.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.393891,
//         "positionx": 463.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.402237,
//         "positionx": 464.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.405307,
//         "positionx": 465.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.410127,
//         "positionx": 466.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.42971,
//         "positionx": 467.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.439898,
//         "positionx": 468.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.455288,
//         "positionx": 469.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.460098,
//         "positionx": 470.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.467885,
//         "positionx": 471.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.480677,
//         "positionx": 472.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.488299,
//         "positionx": 473.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.488299,
//         "positionx": 474.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.49611,
//         "positionx": 475.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.505688,
//         "positionx": 476.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.512502,
//         "positionx": 477.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.513948,
//         "positionx": 478.40625,
//         "positiony": 188.40625
//     },
//     {
//         "time": 95.523274,
//         "positionx": 478.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.523958,
//         "positionx": 479.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.538844,
//         "positionx": 480.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.552737,
//         "positionx": 481.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.570132,
//         "positionx": 482.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.570132,
//         "positionx": 483.40625,
//         "positiony": 189.40625
//     },
//     {
//         "time": 95.577557,
//         "positionx": 483.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.587905,
//         "positionx": 484.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.600338,
//         "positionx": 485.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.611333,
//         "positionx": 486.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.6154,
//         "positionx": 487.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.625986,
//         "positionx": 488.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.646824,
//         "positionx": 489.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.668952,
//         "positionx": 490.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.674665,
//         "positionx": 491.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.687505,
//         "positionx": 492.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.70527,
//         "positionx": 493.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.714322,
//         "positionx": 494.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.722985,
//         "positionx": 495.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.739742,
//         "positionx": 496.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.754554,
//         "positionx": 497.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.765638,
//         "positionx": 498.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.768007,
//         "positionx": 499.40625,
//         "positiony": 190.40625
//     },
//     {
//         "time": 95.768007,
//         "positionx": 500.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.773795,
//         "positionx": 501.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.78717,
//         "positionx": 502.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.791749,
//         "positionx": 503.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.809873,
//         "positionx": 504.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.831497,
//         "positionx": 505.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.846256,
//         "positionx": 506.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.846256,
//         "positionx": 507.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.857594,
//         "positionx": 508.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.869668,
//         "positionx": 509.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.881452,
//         "positionx": 510.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.883235,
//         "positionx": 511.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.89503,
//         "positionx": 512.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.901588,
//         "positionx": 513.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.912844,
//         "positionx": 514.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.918276,
//         "positionx": 515.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.923593,
//         "positionx": 516.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.93022,
//         "positionx": 517.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.93022,
//         "positionx": 518.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.93705,
//         "positionx": 519.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.940603,
//         "positionx": 520.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.955225,
//         "positionx": 521.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.972747,
//         "positionx": 522.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.984861,
//         "positionx": 523.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.989702,
//         "positionx": 524.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 95.99769,
//         "positionx": 525.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.01304,
//         "positionx": 526.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.023226,
//         "positionx": 527.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.03976,
//         "positionx": 528.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.057564,
//         "positionx": 529.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.070304,
//         "positionx": 530.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.070304,
//         "positionx": 531.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.07173,
//         "positionx": 532.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.089741,
//         "positionx": 533.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.097659,
//         "positionx": 534.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.103299,
//         "positionx": 535.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.114009,
//         "positionx": 536.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.120059,
//         "positionx": 537.40625,
//         "positiony": 191.40625
//     },
//     {
//         "time": 96.126851,
//         "positionx": 537.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.127605,
//         "positionx": 538.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.128925,
//         "positionx": 539.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.133343,
//         "positionx": 540.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.155212,
//         "positionx": 541.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.183726,
//         "positionx": 542.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.201505,
//         "positionx": 543.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.204156,
//         "positionx": 544.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.20966,
//         "positionx": 545.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.213288,
//         "positionx": 546.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.220665,
//         "positionx": 547.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.231017,
//         "positionx": 548.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.232667,
//         "positionx": 549.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.241431,
//         "positionx": 550.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.249681,
//         "positionx": 551.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.254841,
//         "positionx": 552.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.258982,
//         "positionx": 553.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.271979,
//         "positionx": 554.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.279952,
//         "positionx": 555.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.285168,
//         "positionx": 556.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.289673,
//         "positionx": 557.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.297387,
//         "positionx": 558.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.308578,
//         "positionx": 559.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.3165,
//         "positionx": 560.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.318009,
//         "positionx": 561.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.330517,
//         "positionx": 562.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.336542,
//         "positionx": 563.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.342111,
//         "positionx": 564.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.345614,
//         "positionx": 565.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.345614,
//         "positionx": 566.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.352394,
//         "positionx": 567.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.361092,
//         "positionx": 568.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.365508,
//         "positionx": 569.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.380166,
//         "positionx": 570.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.396832,
//         "positionx": 571.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.416327,
//         "positionx": 572.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.422936,
//         "positionx": 573.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.431325,
//         "positionx": 574.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.435234,
//         "positionx": 575.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.450825,
//         "positionx": 576.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.465583,
//         "positionx": 577.40625,
//         "positiony": 192.40625
//     },
//     {
//         "time": 96.473101,
//         "positionx": 577.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.481536,
//         "positionx": 578.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.520443,
//         "positionx": 579.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.537306,
//         "positionx": 580.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.542867,
//         "positionx": 581.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.553517,
//         "positionx": 582.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.562964,
//         "positionx": 583.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.56695,
//         "positionx": 584.40625,
//         "positiony": 193.40625
//     },
//     {
//         "time": 96.576414,
//         "positionx": 584.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.577355,
//         "positionx": 585.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.593498,
//         "positionx": 586.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.6179,
//         "positionx": 587.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.63719,
//         "positionx": 588.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.643612,
//         "positionx": 589.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.647025,
//         "positionx": 590.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.647025,
//         "positionx": 591.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.651571,
//         "positionx": 592.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.656572,
//         "positionx": 593.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.661758,
//         "positionx": 594.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.668641,
//         "positionx": 595.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.67561,
//         "positionx": 596.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.683685,
//         "positionx": 597.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.691568,
//         "positionx": 598.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.70147,
//         "positionx": 599.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.702611,
//         "positionx": 600.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.713973,
//         "positionx": 601.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.719391,
//         "positionx": 602.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.733632,
//         "positionx": 603.40625,
//         "positiony": 194.40625
//     },
//     {
//         "time": 96.750799,
//         "positionx": 603.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.751359,
//         "positionx": 604.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.756034,
//         "positionx": 605.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.762897,
//         "positionx": 606.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.767788,
//         "positionx": 607.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.77801,
//         "positionx": 608.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.785069,
//         "positionx": 609.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.785069,
//         "positionx": 610.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.787308,
//         "positionx": 611.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.795747,
//         "positionx": 612.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.806208,
//         "positionx": 613.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.815639,
//         "positionx": 614.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.818862,
//         "positionx": 615.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.831597,
//         "positionx": 616.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.854749,
//         "positionx": 617.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.868961,
//         "positionx": 618.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.875151,
//         "positionx": 619.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.883428,
//         "positionx": 620.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.898177,
//         "positionx": 621.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.910122,
//         "positionx": 622.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.91166,
//         "positionx": 623.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.920396,
//         "positionx": 624.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.928115,
//         "positionx": 625.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.928115,
//         "positionx": 626.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.93003,
//         "positionx": 627.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.936587,
//         "positionx": 628.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.948907,
//         "positionx": 629.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.956419,
//         "positionx": 630.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.95891,
//         "positionx": 631.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.969066,
//         "positionx": 632.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.979468,
//         "positionx": 633.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 96.996631,
//         "positionx": 634.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.001353,
//         "positionx": 635.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.003973,
//         "positionx": 636.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.012695,
//         "positionx": 637.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.027032,
//         "positionx": 638.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.030071,
//         "positionx": 639.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.038226,
//         "positionx": 640.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.04603,
//         "positionx": 641.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.055777,
//         "positionx": 642.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.064312,
//         "positionx": 643.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.069655,
//         "positionx": 644.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.077749,
//         "positionx": 645.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.097719,
//         "positionx": 646.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.113162,
//         "positionx": 647.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.118573,
//         "positionx": 648.40625,
//         "positiony": 195.40625
//     },
//     {
//         "time": 97.126189,
//         "positionx": 649.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.134845,
//         "positionx": 650.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.141212,
//         "positionx": 651.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.143882,
//         "positionx": 652.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.147531,
//         "positionx": 653.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.147531,
//         "positionx": 654.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.153905,
//         "positionx": 655.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.155934,
//         "positionx": 656.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.169356,
//         "positionx": 657.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.180859,
//         "positionx": 658.40625,
//         "positiony": 196.40625
//     },
//     {
//         "time": 97.183917,
//         "positionx": 658.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.191932,
//         "positionx": 659.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.198404,
//         "positionx": 660.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.213506,
//         "positionx": 661.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.222184,
//         "positionx": 662.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.236081,
//         "positionx": 663.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.239479,
//         "positionx": 664.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.261915,
//         "positionx": 665.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.273913,
//         "positionx": 666.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.286513,
//         "positionx": 667.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.286513,
//         "positionx": 668.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.307756,
//         "positionx": 669.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.33647,
//         "positionx": 670.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.372677,
//         "positionx": 671.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.413498,
//         "positionx": 672.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.432871,
//         "positionx": 673.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.460888,
//         "positionx": 674.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.473114,
//         "positionx": 675.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.481133,
//         "positionx": 676.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.484375,
//         "positionx": 677.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.49561,
//         "positionx": 678.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.500958,
//         "positionx": 679.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.50903,
//         "positionx": 680.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.510321,
//         "positionx": 681.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.510321,
//         "positionx": 682.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.514349,
//         "positionx": 683.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.527921,
//         "positionx": 684.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.538806,
//         "positionx": 685.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.550777,
//         "positionx": 686.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.558229,
//         "positionx": 687.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.572295,
//         "positionx": 688.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.579577,
//         "positionx": 689.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.594088,
//         "positionx": 690.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.617067,
//         "positionx": 691.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.635309,
//         "positionx": 692.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.643696,
//         "positionx": 693.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.667124,
//         "positionx": 694.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.833419,
//         "positionx": 695.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.841417,
//         "positionx": 696.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.845219,
//         "positionx": 697.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.856952,
//         "positionx": 698.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.864255,
//         "positionx": 699.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.869059,
//         "positionx": 700.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.932983,
//         "positionx": 701.40625,
//         "positiony": 197.40625
//     },
//     {
//         "time": 97.94531,
//         "positionx": 702.40625,
//         "positiony": 197.40625
//     }
// ]
// pointerOpenURL = "www.google.com";
