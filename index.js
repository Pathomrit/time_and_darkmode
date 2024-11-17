const time = document.querySelector(".timer");
const btnSwitch = document.querySelector(".btn");

function timer() {
  const d = new Date();
  //   console.log(d.getHours());
  const hours = d.getHours();
  const mins = d.getMinutes();
  const milli = d.getSeconds();
  time.innerHTML = `${hours} : ${mins < 10 ? `0` + mins : mins} : ${
    milli < 10 ? `0` + milli : milli
  }`;
}
// เรียกใช้ function timer
timer();
// เรียกใช้ auto fuction ทุกๆ 1 second
setInterval(timer, 1000);

btnSwitch.addEventListener("click", (e) => {
    // console.log("click it");
    const html = document.querySelector("html");
    // ถ้า class html ประกอบด้วย class dark
    if(html.classList.contains("dark")){
        // เอา class dark ออก
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    }else{
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode"
    }
});
