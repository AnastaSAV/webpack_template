import "./styles/index.scss";
// import "./fonts/Alegreya-Bold.ttf";
// import "./fonts/Alegreya-Regular.ttf";
// import "./fonts/DancingScript-Regular.ttf";
// import "./fonts/PlayfairDisplay-Bold.ttf";
// import "./fonts/Roboto-Regular.ttf";
function showConsole() {
  console.log('Sucsess build!!!');
}
showConsole()

async function check() {
  await fetch('https://google.com')
}
check().then(() => {
  console.log('fetch is working')
}).catch(()=> {
  console.log('error')
})
