//ЗАДАЧА No1
// const links = document.querySelectorAll(".links-list a");

// links.forEach((link) => {
//   if (link.href.startsWith("https://")) {
//     link.style.borderBottom = "1px dashed black";
//   }
// });

//_______________________________________________________________________________

//ЗАДАЧА No2

// const localDiskC = document.querySelector(".local-diskC");
// const diskC = document.querySelector(".data");
// const diskCSecond = document.querySelector(".data2");
// const diskCThird = document.querySelector(".data3");

// const diskCList = document.querySelector(".C");
// localDiskC.addEventListener("click", () => {
//   diskCList.classList.toggle("hiddenC");
// });

// localDiskC.addEventListener("mouseover", () => {
//   localDiskC.style.fontWeight = "bold";
// });

// localDiskC.addEventListener("mouseout", () => {
//   localDiskC.style.fontWeight = "normal";
// });

// diskC.addEventListener("mouseover", () => {
//   diskC.style.fontWeight = "bold";
// });

// diskC.addEventListener("mouseout", () => {
//   diskC.style.fontWeight = "normal";
// });

// diskCSecond.addEventListener("mouseover", () => {
//   diskCSecond.style.fontWeight = "bold";
// });

// diskCSecond.addEventListener("mouseout", () => {
//   diskCSecond.style.fontWeight = "normal";
// });

// diskCThird.addEventListener("mouseover", () => {
//   diskCThird.style.fontWeight = "bold";
// });

// diskCThird.addEventListener("mouseout", () => {
//   diskCThird.style.fontWeight = "normal";
// });

// const localDiskD = document.querySelector(".local-diskD");
// const diskD = document.querySelector(".data4");
// const diskDSecond = document.querySelector(".data5");
// const diskDThird = document.querySelector(".data6");
// const diskDList = document.querySelector(".D");

// localDiskD.addEventListener("click", () => {
//   diskDList.classList.toggle("hiddenD");
// });

// localDiskD.addEventListener("mouseover", () => {
//   localDiskD.style.fontWeight = "bold";
// });

// localDiskD.addEventListener("mouseout", () => {
//   localDiskD.style.fontWeight = "normal";
// });

// diskD.addEventListener("mouseover", () => {
//   diskD.style.fontWeight = "bold";
// });

// diskD.addEventListener("mouseout", () => {
//   diskD.style.fontWeight = "normal";
// });

// diskDSecond.addEventListener("mouseover", () => {
//   diskDSecond.style.fontWeight = "bold";
// });

// diskDSecond.addEventListener("mouseout", () => {
//   diskDSecond.style.fontWeight = "normal";
// });

// diskDThird.addEventListener("mouseover", () => {
//   diskDThird.style.fontWeight = "bold";
// });

// diskDThird.addEventListener("mouseout", () => {
//   diskDThird.style.fontWeight = "normal";
// });

//ЗАДАНИЕ No3
// const bookList = document.querySelector(".books");
// let clickedBook = "";

// bookList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("book")) {
//     if (clickedBook) {
//       clickedBook.classList.remove("bgcolor-book");
//     }
//     clickedBook = event.target;
//     clickedBook.classList.toggle("bgcolor-book");
//   }
// });


//ЗАДАНИЕ No4
// const textAreaBox = document.querySelector(".box");
// const textArea = document.querySelector(".text-area");
// const text = document.querySelector(".text");

// document.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.code === "KeyI") {
//     textArea.style.display = "block";
//     textArea.textContent = text.textContent;
//     text.textContent = "";
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.code === "KeyY") {
//     textArea.style.display = "none";
//     text.textContent = textArea.value;
//   }
// });
