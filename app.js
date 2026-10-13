const $=id=>document.getElementById(id);
function search(q){q=(q||"").trim();if(q)window.open("https://duckduckgo.com/?q="+encodeURIComponent(q),"_blank","noopener")}
$("search").addEventListener("submit",e=>{e.preventDefault();search($("q").value)});
document.querySelectorAll("[data-q]").forEach(b=>b.addEventListener("click",()=>search(b.dataset.q)));
$("saveNote").onclick=()=>{localStorage.setItem("msee_note",$("note").value);$("noteStatus").textContent="Saved on this device";};
$("note").value=localStorage.getItem("msee_note")||"";
$("theme").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("msee_theme",document.body.classList.contains("dark")?"dark":"light")};
if(localStorage.getItem("msee_theme")==="dark")document.body.classList.add("dark");
$("calc").onclick=()=>{const s=$("expr").value.trim();if(!s){$("answer").textContent="Enter a calculation.";return}if(!/^[0-9+\-*/().%\s]+$/.test(s)){$("answer").textContent="Use numbers and basic arithmetic operators only.";return}try{const n=Function('"use strict";return ('+s+')')();$("answer").textContent=Number.isFinite(n)?"Answer: "+n:"Check your calculation."}catch(e){$("answer").textContent="Check your calculation."}};
