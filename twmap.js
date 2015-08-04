var protestData = [

  {counties: ['path2531', 'path3699', 'path3635'],
    descriptions: [
      {'title': '北區反課綱高校聯盟',
        'items': ["建國中學", "成淵高中", "師大附中", "中和高中", "華僑中學", "北一女中", "景美女中", "延平中學"]},
      {'title': '北區高職聯盟',
        'items': ["南強工商", "南港高工", "松山農工", "新北高工", "北士商", "大安高工"]}
    ]
  },

  {counties: ['path2707', 'path2726', 'path2732', 'path2781'],
    descriptions: [
      {'title': "桃區高校聯盟(包含桃竹苗)",
        'items': [
          "武陵高中", "中大壢中", "壽山高中", "內壢高中", "龍潭高中", "桃園高中", "平鎮高中", "陽明高中",
          "新興高中", "復旦高中", "觀音高中", "大園高中", "永豐高中", "育達高中", "中壢家商", "中壢國中",
          "楊梅高中", "新竹高中", "竹北高中", "竹東高中", "成德高中", "建功高中", "關西高中", "義民中學",
          "新竹女中"
        ]
      }
    ]
  },
  {counties: ['path2792', 'path2425', 'path2785', 'path2812'],
    descriptions: [
      {'title': "中區高中生反黑箱課綱行動小組",
        'items': [
          "台中一中", "竹南高中", "國立中科實驗高級中學彰化高中", "台中二中", "台中女中", "苗栗高中", "竹南高中", "國立苑裡高級中學",
          "曉明女中", "文華高中", "衛道中學", "西苑高中", "弘文高中", "大明高中", "嘉義高中", "明道中學", "東石高中", "市立大里高中",
          "斗六高中", "虎尾高中", "文興高中", "埔里高工", "彰化高中", "興華高中", "精誠高中", "暨大附中", "忠明高中", "台中常春藤高中",
          "南投高商", "建臺高中", "南投高中", "惠文高中", "葳格高中", "長億高中（台中太平區）", "慈明高中", "衛道高中私立嘉陽高中",
          "私立明德高中"
        ]
      }
    ]
  },
  {counties: ['path2907', 'path4308'],
    descriptions: [
      {'title': "嘉義區反黑箱課綱聯盟",
        'items': [
          "嘉義高中", "華南高商", "興國高中", "嘉義女中", "協同中學", "嘉義高商", "竹崎高中", "東石高中", "新港藝高", "嘉義高工"
        ]
      }
    ]
  },
  {counties: ['path3690', 'path2843', 'path2856'],
    descriptions: [
      {'title': '東區聯盟',
        'items': ["宜蘭高中", "宜蘭高商", "蘭陽女中", "羅東高中", "羅東高商", "花蓮高中", "花蓮高工", "花蓮女中", "台東女中"]}
    ]
  },
  {counties: ['path2905'],
    descriptions: [
      {
        'title': "台南中學反課綱微調陣線",
        'items': [
          "台南女中", "台南一中", "家齊女中", "台南二中", "港明中學", "黎明中學", "新營高中", "善化高中", "新化高中", "曾文家商",
          "德光中學", "南大附中", "北門高中", "長榮中學", "曾文農工", "台南高工", "明達中學", "瀛海中學"
        ]
      }
    ]
  },
  {counties: ['path3082'],
    descriptions: [
      {
        'title': "高雄市反黑箱課綱高中聯盟高雄中學",
        'items': [
          "瑞祥高中", "中山大學附中", "岡山高中", "高雄女中", "楠梓高中", "新興高中", "鳳新高中", "新莊高中", "三民高中",
          "福誠高中", "樹人醫專", "左營高中", "高雄工商", "中正高中", "鼓山高中", "旗山農工", "前鎮高中", "小港高中",
          "道明高中"
        ]
      }
    ]
  },
  {counties: ['path2861'],
    descriptions: [
      {
        'title': "屏東反課綱高校聯盟",
        'items': ["屏東高中", "屏榮高中", "屏東女中", "潮州高中", "美和高中", "東港高中", "屏北高中"]
      }
    ]
  },
];

var otherProtesters = {
  'title': "其他非區域性的反課綱微調組織",
  'items': ["蘋果樹公社", "反黑箱課綱行動聯盟", "捍衛教育中學陣線", "反洗腦學陣", "奪回桃園青年陣線",
    "自由學聲", "原住民族青年陣線"]
};

var paths = document.getElementsByTagName("path"),
    i;

function getSimilarGroup(pathID) {
  var i;
  for (i=0; i<protestData.length; i+=1) {
    if (protestData[i].counties.indexOf(pathID) !== -1) {
      return protestData[i].counties;
    }
  }
  return null;
}

function getAllProtestedCounties() {
  var result = [],
      i;
  for (i=0; i<protestData.length; i+=1) {
    result = result.concat(protestData[i].counties)
  }
  return result;
}

function getDescriptions(pathID) {
  var i;
  for (i=0; i<protestData.length; i+=1) {
    if (protestData[i].counties.indexOf(pathID) !== -1) {
      return protestData[i].descriptions;
    }
  }
}

// Initialize color and text;
(function(){

  function getPaths (pathIDGroup) {
    var result = [], i;
    for (i=0; i<pathIDGroup.length; i+=1) {
      result.push(document.getElementById(pathIDGroup[i]));
    };
    return result;
  };

  var i, j;
  var pathGroup, color;

  var initialColor = {
    //pathGroup: color
    '0': '#27b2ca',
    '1': '#007e94',
    '2': '#27b2ca',
    '3': '#007e94',
    '4': '#3caba3',
    '5': '#3caba3',
    '6': '#0b909e',
    '7': '#27b2ca'
  };
  var initialColorCount = 8; //FIXME: this should be the length of initialColor

  var initialText = {
    //pathGroup: [text, left, top]
    '0': ['台北市、新北市', '75%', '1%'],
    '1': ['桃園、新竹、苗栗', '50%', '15%'],
    '2': ['台中、彰化、雲林、南投', '28%', '35%'],
    '3': ['嘉義', '45%', '52%'],
    '4': ['宜蘭、花蓮、台東', '75%', '47%'],
    '5': ['台南', '35%', '60%'],
    '6': ['高雄', '50%', '65%'],
    '7': ['屏東', '45%', '80%']
  };
  var initialTextCount = 8; //FIXME: this should be the length of initialText

  for (i=0; i<initialTextCount; i+=1) {
    var textNode = document.createTextNode(initialText[i][0]);
    var div = document.createElement('div');
    div.className = 'initialText';
    div.style.position = 'absolute';
    div.style.left = initialText[i][1];
    div.style.top = initialText[i][2];
    div.appendChild(textNode);

    var mapContentDiv = document.getElementById('MapContent');
    mapContentDiv.appendChild(div);
  };

  for (i=0; i<initialColorCount; i+=1) {
    color = initialColor[i.toString()];
    pathGroup = getPaths(protestData[i].counties);
    for (j=0; j<pathGroup.length; j+=1) {
      pathGroup[j].setAttribute("style", "fill: "+color)
    };
  }

})();

function handleAreaClick (event) {
  "use strict";

  var i, j;
  var allInitialText = document.getElementsByClassName('initialText');
  var pathID = event.target.id,
      countiesOfSameGroup = getSimilarGroup(pathID),
      descriptions = getDescriptions(pathID),
      allProtestedCounties = getAllProtestedCounties(),
      path;

  // No-op if the clicked region did not protest;
  if (allProtestedCounties.indexOf(event.target.id) === -1) {
    return;
  }

  console.log(event.target.id);

  // Hide initial texts when one area is clicked
  for (i=0; i<allInitialText.length; i+=1) {
    allInitialText[i].style.display = "none";
  }

  // Coloring
  for (j=0; j<paths.length; j+=1) {
    path = paths[j];
    if (countiesOfSameGroup.indexOf(path.id) !== -1) {
      path.setAttribute("style", "fill: #27b2ca");
    } else if (allProtestedCounties.indexOf(path.id) !== -1) {
      path.setAttribute("style", "fill: #4d4d4d")
    }
  }
};

// Add clicking functionality
for (i=0; i<paths.length; i++) {
  paths[i].addEventListener('click', handleAreaClick, false);
}

