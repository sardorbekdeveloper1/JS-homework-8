//  Uyga vazifa

// str 1
// function chiqarKattaHarflar(n) {
//     if (n < 1 || n > 26) {
//       console.log("Noto'g'ri son kiritdingiz. 1 dan 26 gacha bo'lgan son kiriting.");
//       return;
//     }
  
//     let startCharCode = 'A'.charCodeAt(0); 
//     let endCharCode = startCharCode + n; 
  
//     for (let i = startCharCode; i < endCharCode; i++) {
//       let letter = String.fromCharCode(i);
//       console.log(letter);
//     }
//   }
  
//   let n = 9;
//   chiqarKattaHarflar(n);
  

// str 2
// function aniqlovchiTuri(chiziq) {
//     if (/\d/.test(chiziq)) {
//       console.log("digit");
//     } else if (/^[A-Za-z]$/.test(chiziq)) {
//       console.log("lotin");
//     } else {
//       console.log("0");
//     }
//   }
  
//   let belgi1 = "7"; 
//   let belgi2 = "A"; 
//   let belgi3 = "?";
  
//   aniqlovchiTuri(belgi1); 
//   aniqlovchiTuri(belgi2); 
//   aniqlovchiTuri(belgi3); 
  

//  str 3
// function utf16KodlariniChiqar(satr) {
    
//     let birinchiKod = satr.charCodeAt(0);
    
//     let uzunlik = satr.length;
  
//     let oxirgiKod = satr.charCodeAt(uzunlik - 1);
  
    
//     console.log("Birinchi belgi UTF-16 kodi:", birinchiKod);
//     console.log("Oxirgi belgi UTF-16 kodi:", oxirgiKod);
//   }
  
//   let testSatr = "Salom";
//   utf16KodlariniChiqar(testSatr);
  



//  str 4
// function belgidanSatrHosilQil(n, belgi) {
//     let natija = '';
  
//     for (let i = 0; i < n; i++) {
//       natija += belgi;
//     }
  
//     console.log("Natija:", natija);
//   }
  
//   let N = 5; 
//   let Belgi = 'A'; 
  
//   belgidanSatrHosilQil(N, Belgi);
  



//  str 5
// function teskariTartibdaChiqar(satr) {
    
//     let teskariSatr = satr.split('').reverse().join('');
  
    
//     console.log("Teskari tartibdagi satr:", teskariSatr);
//   }
  
//   let testSatr = "Salom";
//   teskariTartibdaChiqar(testSatr);
  



//  str 6
// function getStringStars(satr, N) {
//     let natija = '';
  
//     for (let i = 0; i < satr.length; i++) {
//       natija += satr[i]; // Asl belgi
  
//       for (let j = 0; j < N; j++) {
//         natija += '*';
//       }
//     }
  
    
//     console.log("Natija:", natija);
//   }
  
//   let testSatr = "Salom"; 
//   let N = 3; 
  
//   getStringStars(testSatr, N);
  



//  str 7
// function aniqlovchiRaqamlar(satr) {
//     let raqamlar = '';
  
//     for (let belgi of satr) {
//       if (!isNaN(parseInt(belgi))) {
//         raqamlar += belgi;
//       }
//     }
  
//     console.log("Raqamlar:", raqamlar);
//   }
  
//   let testSatr = "Hello12345World"; 
//   aniqlovchiRaqamlar(testSatr);
  



//  str 8
// function kichikHarflar(satr) {
//     let kichikLotin = 0;
//     let kichikKirill = 0;
  
//     for (let belgi of satr) {

//       if ((belgi >= 'a' && belgi <= 'z')) {
//         kichikLotin++;
//       }
  
//       if ((belgi >= 'а' && belgi <= 'я')) {
//         kichikKirill++;
//       }
//     }
  
//     console.log("Kichik lotin harflari soni:", kichikLotin);
//     console.log("Kichik kirill harflari soni:", kichikKirill);
//   }
  
//   let testSatr = "Hello Привет"; 
//   kichikHarflar(testSatr);
  
  



//  str 9
// function kattaKichikAlmashtir(satr) {
//     let natija = '';
  
//     for (let belgi of satr) {
//       if (belgi >= 'A' && belgi <= 'Z') {
//         natija += belgi.toLowerCase(); 
//       } else {
//         natija += belgi; 
//       }
//     }
//     console.log("Kichikga o'tkazilgan satr:", natija);
//   }
  
//   let testSatr = "Hello World"; 
//   kattaKichikAlmashtir(testSatr);
  



//  str 10
// function kattaKichikAlmashtir(satr) {
//     let natija = '';
  
//     for (let belgi of satr) {
//       if (belgi >= 'A' && belgi <= 'Z') {
//         natija += belgi.toLowerCase();
//       } else if (belgi >= 'a' && belgi <= 'z') {
//         natija += belgi.toUpperCase();
//       } else {
//         natija += belgi;
//       }
//     }
  
//     console.log("Natija:", natija);
//   }
  
//   let testSatr = "Hello World 123";
//   kattaKichikAlmashtir(testSatr);
  



//  str 11
// function sonniTekshir(satr) {

//     let sonShakli = parseFloat(satr);
  
//     if (!isNaN(sonShakli) && sonShakli.toString() === satr) {
//       console.log(sonShakli % 1 === 0 ? 2 : 1);
//     } else {
//       console.log(0);
//     }
//   }
  
//   let testSatr1 = "123"; 
//   let testSatr2 = "12.34";
//   let testSatr3 = "Hello"; 
  
//   sonniTekshir(testSatr1); 
//   sonniTekshir(testSatr2);
//   sonniTekshir(testSatr3); 
  



//  str 12
// function getInverseNumber(n) {
//     if (n === 0) {
//       throw new Error("0 ga bo'linmagan sonni teskari yo'q");
//     }

//     return 1 / n;
//   }
  
//   var son = 5;
//   var teskari = getInverseNumber(son);
//   console.log(son + " ning teskarisi: " + teskari);
  



//  str 13
// function hisoblash(ifoda) {
//     var raqamlar = ifoda.split(/[+-]/).map(Number);
//     var belgilar = ifoda.match(/[+-]/g);
    
//     var natija = raqamlar[0];
//     for (var i = 0; i < belgilar.length; i++) {
//       if (belgilar[i] === '+') {
//         natija += raqamlar[i + 1];
//       } else {
//         natija -= raqamlar[i + 1];
//       }
//     }
    
//     return natija;
//   }
  
//   var ifoda = "7+3-2";
//   var natija = hisoblash(ifoda);
//   console.log("Natija:", natija); 
  



//  str 14
// function yangiSatr(N1, N2, S1, S2) {
//     let yangiSatr = `${S1.substring(0, N1)}${S2.substring(S2.length - N2)}`;
//     return yangiSatr;
//   }
  
//   let N1 = 3;
//   let N2 = 4;
//   let S1 = "Salom dunyo";
//   let S2 = "Xayr olam";
//   let natija = yangiSatr(N1, N2, S1, S2);
//   console.log("Yangi Satr:", natija);
  
  



//  str 15
// function orttirish(C, S) {
//     let natija = '';
//     for (let i = 0; i < S.length; i++) {
//       if (S[i] === C) {
//         natija += C + C;
//       } else {
//         natija += S[i];
//       }
//     }
//     return natija;
//   }
  
//   let C = 'a';
//   let S = 'Salom dunyo!'; 
//   let natija = orttirish(C, S);
//   console.log("Natija:", natija);
  



//  str 16
// function qoshish(C, S1, S2) {
//     let natija = '';
//     for (let i = 0; i < S1.length; i++) {
//       if (S1[i] === C) {
//         natija += S2 + C;
//       } else {
//         natija += S1[i];
//       }
//     }
//     return natija;
//   }
  
//   let C = 'a'; 
//   let S1 = 'Salom dunyo!'; 
//   let S2 = 'Xayr'; 
//   let natija = qoshish(C, S1, S2);
//   console.log("Natija:", natija);
  



//  str 17
// function takrorlanishlarSoniniTop(S1, S2) {
//     let count = 0;
//     let index = S1.indexOf(S2);
    
//     while (index !== -1) { 
//       count++;
//       index = S1.indexOf(S2, index + 1); 
//     }
    
//     return count;
//   }
  
//   let S1 = 'salomsalomdunyosalom';
//   let S2 = 'salom';
//   let takrorlanishlar = takrorlanishlarSoniniTop(S1, S2);
//   console.log("Takrorlanishlar soni:", takrorlanishlar);
  



//  str 18
// function ochiribTashlash(S1, S2) {
//     let index = S1.indexOf(S2); 
    
//     if (index !== -1) { 
//       let lengthS2 = S2.length;
//       let firstPart = S1.substring(0, index);
//       let secondPart = S1.substring(index + lengthS2); 
//       return firstPart + secondPart; 
//     }
    
//     return S1;
//   }
  
//   let S1 = 'Salom dunyo! Men dunyoga salom beraman. Dunyo salom, salom, salom!';
//   let S2 = 'salom';
//   let natija = ochiribTashlash(S1, S2);
//   console.log("Natija:", natija);
  



//  str 19
// function ochiribTashlash(S1, S2) {
//     let index = S1.indexOf(S2); 
//     let lengthS2 = S2.length;
//     let result = S1;
  
//     while (index !== -1) {
//       let firstPart = result.substring(0, index); 
//       let secondPart = result.substring(index + lengthS2);
//       result = firstPart + secondPart; 
//       index = result.indexOf(S2);
//     }
    
//     return result;
//   }
  
//   let S1 = 'Salom salom, salom salom, dunyo salom, salom, salom!';
//   let S2 = 'salom';
//   let natija = ochiribTashlash(S1, S2);
//   console.log("Natija:", natija);
  



//  str 20
// function ozgartirish(S1, S2, S3) {
//     let index = S1.indexOf(S2); 
    
//     if (index !== -1) {
//       let lengthS2 = S2.length;
//       let firstPart = S1.substring(0, index);
//       let secondPart = S1.substring(index + lengthS2); 
//       return firstPart + S3 + secondPart;
//     }
    
//     return S1; 
//   }
  

//   let S1 = 'Salom dunyo!';
//   let S2 = 'salom';
//   let S3 = 'Xayr';
//   let natija = ozgartirish(S1, S2, S3);
//   console.log("Natija:", natija);
  



//  str 21




//  str 22
// function aniqlovchiSatr(satr) {
//     let sozlar = satr.split(" ");
  
//     let boshlanuvchi = {}; 
//     let tugovchi = {}; 
  
//     for (let soz of sozlar) {
//       if (soz.length > 0) {
//         let boshHarf = soz[0].toUpperCase(); 
//         let tugHarf = soz[soz.length - 1].toUpperCase(); 
  
//         if (boshHarf in boshlanuvchi) {
//           boshlanuvchi[boshHarf]++;
//         } else {
//           boshlanuvchi[boshHarf] = 1;
//         }
  
//         if (tugHarf in tugovchi) {
//           tugovchi[tugHarf]++;
//         } else {
//           tugovchi[tugHarf] = 1;
//         }
//       }
//     }
  
//     return { boshlanuvchi, tugovchi };
//   }
  
//   let berilganSatr = "salom Dunyo xayr salom Xayr"; 
//   let natija = aniqlovchiSatr(berilganSatr);
//   console.log("Boshlanuvchi harflar soni:", natija.boshlanuvchi);
//   console.log("Tugovchi harflar soni:", natija.tugovchi);
  



//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




//  str 3




