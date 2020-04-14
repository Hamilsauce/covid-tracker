const getIsoCodes = async (src) => {
 let data = await fetch(src);
 let content = await data.text();
 return content
}

let codeArray = []
let codeText = '';

getIsoCodes('./data/isocodes.txt')
 .then((content) => {
 let res = content
 codeText = content
 createArrays(codeText) 
 })

const createArrays = txt => {
 let splitLines = txt.split("\n");
  codeArray = splitLines
  .map(line => {
   return line.split('  ');
  });

 console.log(splitEls);
}

// {codeArray}