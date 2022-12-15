// let advice = `“It is easy to sit up take notice, what's difficutlt is getting up and taking action.”`;
const para = document.querySelector('#quote');
const num = document.querySelector('#ad-no');
const Progress = async () => {
  // rdm = Math.floor(Math.random() * 224)
  url = `https://api.adviceslip.com/advice`;
  data = await fetch(url);
  parsedData = await data.json();
  return parsedData;
}

clickBtn = async () => {
  parsedData = await Progress();
  setTimeout(()=>{
    para.innerHTML = '“'+ parsedData.slip.advice + '”';
    num.innerHTML = parsedData.slip.id;
  },500)

}

document.getElementById('btn').addEventListener('click', () => { 
  if(document.getElementById('dice').classList.contains('rotate')){
    document.getElementById('dice').classList.remove('rotate');
    console.log("first")
    setTimeout(()=>{document.getElementById('dice').classList.add('rotate');},1)
  }
  clickBtn(); 
})
