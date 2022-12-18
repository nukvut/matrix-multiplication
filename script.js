//Квадратные матрицы A и B размером 1000х1000 заданы в виде массивов 
//вида i j aij и i j bij, где i – номер строки, 
//j – номер столбца, aij и bij– значение элементом матриц, 
//отличных от 0, все остальные элементы равны 0. Написать программу,
//которая по заданным k и l выводит элемент произведения матриц (AB)kl.

var tableFactor = "1";
var switchFactor = document.getElementById("swapTables");
var inputText1 = document.getElementById("input1");
var inputText2 = document.getElementById("input2");
var elements = new Array;
var otvet = document.getElementById('result')

clear.onclick = function allClear()
  {
  elements = [];
  console.log('elements: ', elements);
  inputText1.value = "";
  inputText2.value = "";
  otvet.innerText = "result";
  }

switchFactor.onclick = function switchTables()
  {
  if(tableFactor == "1") 
    {
    tableFactor = "2";
    switchFactor.innerText = "Add to 2st Table";
    }
  else 
    {
    tableFactor = "1";
    switchFactor.innerText = "Add to 1nd Table";
    }
  }


buttOne.onclick = function addToArray()
  {
  var elementArray = inputText1.value.split(",").concat(tableFactor);
  elements.push(elementArray);
  console.log('elements: ', elements);
  }



buttTwo.onclick = function clickAction()
  {
  var mulPar = inputText2.value.split(",");
  console.log('mulPar: ', mulPar);
  otvet.innerText = multiElement(mulPar[0],mulPar[1]);
  }

function multiElement(l,k)
  {
  var res = 0;
  for(var i=0;i<elements.length;i++)
    {
    if (elements[i][3]==1 && elements[i][0]==l) 
      {
      var a = elements[i][2];
      for(var i=0;i<elements.length;i++)
        {
        if (elements[i][3]==2 && elements[i][0]==k)
          {
          var b = elements[i][2];
          res+=(a*b);
          }
        }
      }

    }
  return res;
  }