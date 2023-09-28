import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import cors from 'cors'; // добавьте эту строку
import './ProgressCircle.css';
import { getValue } from '@testing-library/user-event/dist/utils';
//import {CircleProgress} from 'react-gradient-progress'
//import SemiCircleProgress from './sex5000'
import { Howl } from 'howler';
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Modal1 from './Modal1'; 
import logo from "./logo2.jpg";




//const socket = new WebSocket('wss://940c970d261e074686ca58fa3bafa1d1.loophole.site/');

const Dashboard = () => {
  
  const [sex78, setSex78] = useState('');
  

 const [itog_07, setItog_07] = useState('');
 const [itog_08, setItog_08] = useState('');





 const [sex1, setSex1] = useState('');
 const [sex2, setSex2] = useState('');
 const [sex3, setSex3] = useState('');
 const [sex4, setSex4] = useState('');
 const [sex5, setSex5] = useState('');
 const [sex6, setSex6] = useState('');
 const [sex7, setSex7] = useState('');
 const [sex8, setSex8] = useState('');
 const [sex9, setSex9] = useState('');
 const [sex10, setSex10] = useState('');

 const [sex11, setSex11] = useState('');
 const [sex12, setSex12] = useState('');
 const [sex13, setSex13] = useState('');
 const [sex14, setSex14] = useState('');
 const [sex15, setSex15] = useState('');
 const [sex16, setSex16] = useState('');
 const [sex17, setSex17] = useState('');
 const [sex18, setSex18] = useState('');
 const [sex19, setSex19] = useState('');
 const [sex20, setSex20] = useState('');

 const [sex21, setSex21] = useState('');
 const [sex22, setSex22] = useState('');
 const [sex23, setSex23] = useState('');
 const [sex24, setSex24] = useState('');
 const [sex25, setSex25] = useState('');
 const [sex26, setSex26] = useState('');
 const [sex27, setSex27] = useState('');
 const [sex28, setSex28] = useState('');
 const [sex29, setSex29] = useState('');
 const [sex30, setSex30] = useState('');







 const [sex1a, setSex1a] = useState('');
 const [sex2a, setSex2a] = useState('');
 const [sex3a, setSex3a] = useState('');
 const [sex4a, setSex4a] = useState('');
 const [sex5a, setSex5a] = useState('');
 const [sex6a, setSex6a] = useState('');
 const [sex7a, setSex7a] = useState('');
 const [sex8a, setSex8a] = useState('');
 const [sex9a, setSex9a] = useState('');
 const [sex10a, setSex10a] = useState('');

 const [sex1b, setSex1b] = useState('');
 const [sex2b, setSex2b] = useState('');
 const [sex3b, setSex3b] = useState('');
 const [sex4b, setSex4b] = useState('');
 const [sex5b, setSex5b] = useState('');
 const [sex6b, setSex6b] = useState('');
 const [sex7b, setSex7b] = useState('');
 const [sex8b, setSex8b] = useState('');
 const [sex9b, setSex9b] = useState('');
 const [sex10b, setSex10b] = useState('');

 const [sex1c, setSex1c] = useState('');
 const [sex2c, setSex2c] = useState('');
 const [sex3c, setSex3c] = useState('');
 const [sex4c, setSex4c] = useState('');
 const [sex5c, setSex5c] = useState('');
 const [sex6c, setSex6c] = useState('');
 const [sex7c, setSex7c] = useState('');
 const [sex8c, setSex8c] = useState('');
 const [sex9c, setSex9c] = useState('');
 const [sex10c, setSex10c] = useState('');

 const [sex1d, setSex1d] = useState('');
 const [sex2d, setSex2d] = useState('');
 const [sex3d, setSex3d] = useState('');
 const [sex4d, setSex4d] = useState('');
 const [sex5d, setSex5d] = useState('');
 const [sex6d, setSex6d] = useState('');
 const [sex7d, setSex7d] = useState('');
 const [sex8d, setSex8d] = useState('');
 const [sex9d, setSex9d] = useState('');
 const [sex10d, setSex10d] = useState('');

 const [sex1e, setSex1e] = useState('');
 const [sex2e, setSex2e] = useState('');
 const [sex3e, setSex3e] = useState('');
 const [sex4e, setSex4e] = useState('');
 const [sex5e, setSex5e] = useState('');
 const [sex6e, setSex6e] = useState('');
 const [sex7e, setSex7e] = useState('');
 const [sex8e, setSex8e] = useState('');
 const [sex9e, setSex9e] = useState('');
 const [sex10e, setSex10e] = useState('');

 const [sex1a1, setSex1a1] = useState('');
 const [sex2a1, setSex2a1] = useState('');
 const [sex3a1, setSex3a1] = useState('');
 const [sex4a1, setSex4a1] = useState('');
 const [sex5a1, setSex5a1] = useState('');
 const [sex6a1, setSex6a1] = useState('');
 const [sex7a1, setSex7a1] = useState('');
 const [sex8a1, setSex8a1] = useState('');
 const [sex9a1, setSex9a1] = useState('');
 const [sex10a1, setSex10a1] = useState('');

 const [itog_03, setItog_03] = useState('');
 const [itog_04, setItog_04] = useState('');
 const [itog_05, setItog_05] = useState('');
 const [itog_06, setItog_06] = useState('');


 const [lid_01, setLid_01] = useState('');
 const [lid_02, setLid_02] = useState('');
 const [lid_03, setLid_03] = useState('');
 const [lid_04, setLid_04] = useState('');
 const [lid_05, setLid_05] = useState('');
 const [lid_06, setLid_06] = useState('');



 const [sot_01, setSot_01] = useState('');
 const [sot_02, setSot_02] = useState('');
 const [sot_03, setSot_03] = useState('');
 const [sot_04, setSot_04] = useState('');
 const [sot_05, setSot_05] = useState('');

 const [sot_01_01, setSot_01_01] = useState('');
 const [sot_02_01, setSot_02_01] = useState('');
 const [sot_03_01, setSot_03_01] = useState('');
 const [sot_04_01, setSot_04_01] = useState('');
 const [sot_05_01, setSot_05_01] = useState('');

 const [sot_01_02, setSot_01_02] = useState('');
 const [sot_02_02, setSot_02_02] = useState('');
 const [sot_03_02, setSot_03_02] = useState('');
 const [sot_04_02, setSot_04_02] = useState('');
 const [sot_05_02, setSot_05_02] = useState('');

 const [sot_01_03, setSot_01_03] = useState('');
 const [sot_02_03, setSot_02_03] = useState('');
 const [sot_03_03, setSot_03_03] = useState('');
 const [sot_04_03, setSot_04_03] = useState('');
 const [sot_05_03, setSot_05_03] = useState('');

 const [sot_01_04, setSot_01_04] = useState('');
 const [sot_02_04, setSot_02_04] = useState('');
 const [sot_03_04, setSot_03_04] = useState('');
 const [sot_04_04, setSot_04_04] = useState('');
 const [sot_05_04, setSot_05_04] = useState('');

 const [sot_01_05, setSot_01_05] = useState('');
 const [sot_02_05, setSot_02_05] = useState('');
 const [sot_03_05, setSot_03_05] = useState('');
 const [sot_04_05, setSot_04_05] = useState('');
 const [sot_05_05, setSot_05_05] = useState('');


 const [sot_01_06, setSot_01_06] = useState('');
 const [sot_02_06, setSot_02_06] = useState('');
 const [sot_03_06, setSot_03_06] = useState('');
 const [sot_04_06, setSot_04_06] = useState('');
 const [sot_05_06, setSot_05_06] = useState('');

 const [sot_01_07, setSot_01_07] = useState('');
 const [sot_02_07, setSot_02_07] = useState('');
 const [sot_03_07, setSot_03_07] = useState('');
 const [sot_04_07, setSot_04_07] = useState('');
 const [sot_05_07, setSot_05_07] = useState('');

 const [sot_01_08, setSot_01_08] = useState('');
 const [sot_02_08, setSot_02_08] = useState('');
 const [sot_03_08, setSot_03_08] = useState('');
 const [sot_04_08, setSot_04_08] = useState('');
 const [sot_05_08, setSot_05_08] = useState('');

 const [sot_01_09, setSot_01_09] = useState('');
 const [sot_02_09, setSot_02_09] = useState('');
 const [sot_03_09, setSot_03_09] = useState('');
 const [sot_04_09, setSot_04_09] = useState('');
 const [sot_05_09, setSot_05_09] = useState('');

 const [sot_01_10, setSot_01_10] = useState('');
 const [sot_02_10, setSot_02_10] = useState('');
 const [sot_03_10, setSot_03_10] = useState('');
 const [sot_04_10, setSot_04_10] = useState('');
 const [sot_05_10, setSot_05_10] = useState('');






 const [sot_01_11, setSot_01_11] = useState('');
 const [sot_02_11, setSot_02_11] = useState('');
 const [sot_03_11, setSot_03_11] = useState('');
 const [sot_04_11, setSot_04_11] = useState('');
 const [sot_05_11, setSot_05_11] = useState('');

 const [sot_01_12, setSot_01_12] = useState('');
 const [sot_02_12, setSot_02_12] = useState('');
 const [sot_03_12, setSot_03_12] = useState('');
 const [sot_04_12, setSot_04_12] = useState('');
 const [sot_05_12, setSot_05_12] = useState('');

 const [sot_01_13, setSot_01_13] = useState('');
 const [sot_02_13, setSot_02_13] = useState('');
 const [sot_03_13, setSot_03_13] = useState('');
 const [sot_04_13, setSot_04_13] = useState('');
 const [sot_05_13, setSot_05_13] = useState('');

 const [sot_01_14, setSot_01_14] = useState('');
 const [sot_02_14, setSot_02_14] = useState('');
 const [sot_03_14, setSot_03_14] = useState('');
 const [sot_04_14, setSot_04_14] = useState('');
 const [sot_05_14, setSot_05_14] = useState('');

 const [sot_01_15, setSot_01_15] = useState('');
 const [sot_02_15, setSot_02_15] = useState('');
 const [sot_03_15, setSot_03_15] = useState('');
 const [sot_04_15, setSot_04_15] = useState('');
 const [sot_05_15, setSot_05_15] = useState('');

 const [sot_01_16, setSot_01_16] = useState('');
 const [sot_02_16, setSot_02_16] = useState('');
 const [sot_03_16, setSot_03_16] = useState('');
 const [sot_04_16, setSot_04_16] = useState('');
 const [sot_05_16, setSot_05_16] = useState('');




 const [sot_01_17, setSot_01_17] = useState('');
 const [sot_02_17, setSot_02_17] = useState('');
 const [sot_03_17, setSot_03_17] = useState('');
 const [sot_04_17, setSot_04_17] = useState('');
 const [sot_05_17, setSot_05_17] = useState('');

 const [sot_01_18, setSot_01_18] = useState('');
 const [sot_02_18, setSot_02_18] = useState('');
 const [sot_03_18, setSot_03_18] = useState('');
 const [sot_04_18, setSot_04_18] = useState('');
 const [sot_05_18, setSot_05_18] = useState('');

 const [sot_01_19, setSot_01_19] = useState('');
 const [sot_02_19, setSot_02_19] = useState('');
 const [sot_03_19, setSot_03_19] = useState('');
 const [sot_04_19, setSot_04_19] = useState('');
 const [sot_05_19, setSot_05_19] = useState('');





 const [sot_01_20, setSot_01_20] = useState('');
 const [sot_02_20, setSot_02_20] = useState('');
 const [sot_03_20, setSot_03_20] = useState('');
 const [sot_04_20, setSot_04_20] = useState('');
 const [sot_05_20, setSot_05_20] = useState('');

 const [sot_01_21, setSot_01_21] = useState('');
 const [sot_02_21, setSot_02_21] = useState('');
 const [sot_03_21, setSot_03_21] = useState('');
 const [sot_04_21, setSot_04_21] = useState('');
 const [sot_05_21, setSot_05_21] = useState('');



 


 const [showModal, setShowModal] = useState(false);
 const [data, setData] = useState('');


 var psdn = ''
 const handleOpenModal = () => {
   // передаем информацию в компонент Modal




   setData(`Заявка, продал ${psdn[0]}  на сумму ${psdn[1]} валюта продажи ${psdn[2]} покупатель ${psdn[3]}`);
 };

   

 /////// Забираем данные ////////////
  const fetchData = async () => {
    const result = await axios.get('https://8854-5-130-181-7.ngrok-free.app/api/188',{
      headers: {
        //Cookie: 'abuse_interstitial=6997-5-130-181-7.ngrok-free.app/api/180',
        'ngrok-skip-browser-warning': '2'
      },
    });
    console.log(result['data'])
 //////////// Завершили заберать данные//////////////////





 //////////!!!!! Разбераем данные !!!////////
 ///Итальянские станки///
let sex1 = result['data']["ITALIJA_STANKI"][0]
let sex2 = result['data']["ITALIJA_STANKI"][2]
let sex3 = result['data']["ITALIJA_STANKI"][4]
let sex4 = result['data']["ITALIJA_STANKI"][3]
sex4 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4);
let sex5 = result['data']["ITALIJA_STANKI"][5]
sex5 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5);
let sex6 = result['data']["ITALIJA_STANKI"][11]
var sex7 = ''
var sex8 = ''
if (Number(sex6) <= 0) {
    sex7 = '🔻'
    sex8 = 'Отставание'
} else {  
  sex7 = '☑️'
  sex8 = 'Перевыполнение'
}
let sex9_0 = (Number(sex3)/Number(sex2)*100).toFixed(2)
let sex9 = sex9_0 + '%'
if (sex9 == 'NaN%') {sex9 = '0%'}
var sex10 = ''
if ((Number(sex3)/Number(sex2)*100).toFixed(2) >= 80) {
  sex10 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sex10 = 'progress-bar progress-bar-striped bg-danger'
 }

let sex11 = 'Линия №1 (2014)'
let sex12 = result['data']["LINIA№1_2014"][2]
let sex13 = result['data']["LINIA№1_2014"][4]
let sex14 = result['data']["LINIA№1_2014"][3]
sex14 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex14);
let sex15 = result['data']["LINIA№1_2014"][5]
sex15 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex15);
let sex16 = result['data']["LINIA№1_2014"][11]
var sex17 = ''
var sex18 = ''
if (Number(sex16) <= 0) {
    sex17 = '🔻'
    sex18 = 'Отставание'
} else {  
  sex17 = '☑️'
  sex18 = 'Перевыполнение'
}
let sex19_0 = (Number(sex13)/Number(sex12)*100).toFixed(2)
let sex19 = sex19_0 + '%'
if (sex19 == 'NaN%') {sex19 = '0%'}
var sex20 = ''
if ((Number(sex13)/Number(sex12)*100).toFixed(2) >= 80) {
  sex20 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sex20 = 'progress-bar progress-bar-striped bg-danger'
 }

let sex21 = 'Линия №2 (2023)'
let sex22 = result['data']["LINIA№2_2023"][2]
let sex23 = result['data']["LINIA№2_2023"][4]
let sex24 = result['data']["LINIA№2_2023"][3]
sex24 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex24);
let sex25 = result['data']["LINIA№2_2023"][5]
sex25 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex25);
let sex26 = result['data']["LINIA№2_2023"][11]
var sex27 = ''
var sex28 = ''
if (Number(sex26) <= 0) {
    sex27 = '🔻'
    sex28 = 'Отставание'
} else {  
  sex27 = '☑️'
  sex28 = 'Перевыполнение'
}
let sex29_0 = (Number(sex23)/Number(sex22)*100).toFixed(2)
let sex29 = sex29_0 + '%'
if (sex29 == 'NaN%') {sex29 = '0%'}
var sex30 = ''

if ((Number(sex23)/Number(sex22)*100).toFixed(2) >= 80) {
  sex30 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sex30 = 'progress-bar progress-bar-striped bg-danger'
 }
//////Итальянские сита закончили //////

//////Финские сита начало //////
let sex1a = result['data']["FIN_STANKI"][0]
let sex2a = result['data']["FIN_STANKI"][2]
let sex3a = result['data']["FIN_STANKI"][4]
let sex4a = result['data']["FIN_STANKI"][3]
sex4a = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4a);
let sex5a = result['data']["FIN_STANKI"][5]
sex5a = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5a);
let sex6a = result['data']["FIN_STANKI"][11]
var sex7a = ''
var sex8a = ''
if (Number(sex6a) <= 0) {
    sex7a = '🔻'
    sex8a = 'Отставание'
} else {  
  sex7a = '☑️'
  sex8a = 'Перевыполнение'
}
let sex9_0a = (Number(sex3a)/Number(sex2a)*100).toFixed(2)
let sex9a = sex9_0a + '%'
if (sex9a == 'NaN%') {sex9a = '0%'}
var sex10a = ''
if ((Number(sex3a)/Number(sex2a)*100).toFixed(2) >= 80) {
  sex10a = 'progress-bar progress-bar-striped bg-success'
 } else {
  sex10a = 'progress-bar progress-bar-striped bg-danger'
 }

 let sex1b = 'Станок №1'
 let sex2b = result['data']["FIN_STANKI_01"][2]
 let sex3b = result['data']["FIN_STANKI_01"][4]
 let sex4b = result['data']["FIN_STANKI_01"][3]
 sex4b = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4b);
 let sex5b = result['data']["FIN_STANKI_01"][5]
 sex5b = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5b);
 let sex6b = result['data']["FIN_STANKI_01"][11]
 var sex7b = ''
 var sex8b = ''
 if (Number(sex6b) <= 0) {
     sex7b = '🔻'
     sex8b = 'Отставание'
 } else {  
   sex7b = '☑️'
   sex8b = 'Перевыполнение'
 }
 let sex9_0b = (Number(sex3b)/Number(sex2b)*100).toFixed(2)
 let sex9b = sex9_0b + '%'
 if (sex9b == 'NaN%') {sex9b = '0%'}
 var sex10b = ''
 if ((Number(sex3b)/Number(sex2b)*100).toFixed(2) >= 80) {
   sex10b = 'progress-bar progress-bar-striped bg-success'
  } else {
   sex10b = 'progress-bar progress-bar-striped bg-danger'
  }

 let sex1c = 'Станок №2'
 let sex2c = result['data']["FIN_STANKI_02"][2]
 let sex3c = result['data']["FIN_STANKI_02"][4]
 let sex4c = result['data']["FIN_STANKI_02"][3]
 sex4c = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4c);
 let sex5c = result['data']["FIN_STANKI_02"][5]
 sex5c = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5c);
 let sex6c= result['data']["FIN_STANKI_02"][11]
 var sex7c = ''
 var sex8c = ''
 if (Number(sex6c) <= 0) {
     sex7c = '🔻'
     sex8c = 'Отставание'
 } else {  
   sex7c = '☑️'
   sex8c = 'Перевыполнение'
 }
 let sex9_0c = (Number(sex3b)/Number(sex2b)*100).toFixed(2)
 let sex9c = sex9_0c + '%'
 if (sex9c == 'NaN%') {sex9c = '0%'}
 var sex10c = ''
 if ((Number(sex3c)/Number(sex2c)*100).toFixed(2) >= 80) {
   sex10c = 'progress-bar progress-bar-striped bg-success'
  } else {
   sex10c = 'progress-bar progress-bar-striped bg-danger'
  }

 let sex1d = 'Станок №3'
 let sex2d = result['data']["FIN_STANKI_03"][2]
 let sex3d = result['data']["FIN_STANKI_03"][4]
 let sex4d = result['data']["FIN_STANKI_03"][3]
 sex4d = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4d);
 let sex5d = result['data']["FIN_STANKI_03"][5]
 sex5d = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5d);
 let sex6d= result['data']["FIN_STANKI_03"][11]
 var sex7d = ''
 var sex8d = ''
 if (Number(sex6c) <= 0) {
     sex7d = '🔻'
     sex8d = 'Отставание'
 } else {  
   sex7d = '☑️'
   sex8d = 'Перевыполнение'
 }
 let sex9_0d = (Number(sex3b)/Number(sex2b)*100).toFixed(2)
 let sex9d = sex9_0d + '%'
 if (sex9d == 'NaN%') {sex9d = '0%'}
 var sex10d = ''
 if ((Number(sex3c)/Number(sex2c)*100).toFixed(2) >= 80) {
   sex10d = 'progress-bar progress-bar-striped bg-success'
  } else {
   sex10d = 'progress-bar progress-bar-striped bg-danger'
  }

  let sex1e = 'Станок №4'
 let sex2e = result['data']["FIN_STANKI_04"][2]
 let sex3e = result['data']["FIN_STANKI_04"][4]
 let sex4e = result['data']["FIN_STANKI_04"][3]
 sex4e = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4e);
 let sex5e = result['data']["FIN_STANKI_04"][5]
 sex5e = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5e);
 let sex6e= result['data']["FIN_STANKI_04"][11]
 var sex7e = ''
 var sex8e = ''
 if (Number(sex6e) <= 0) {
     sex7e = '🔻'
     sex8e = 'Отставание'
 } else {  
   sex7e = '☑️'
   sex8e = 'Перевыполнение'
 }
 let sex9_0e = (Number(sex3b)/Number(sex2b)*100).toFixed(2)
 let sex9e = sex9_0e + '%'
 if (sex9e == 'NaN%') {sex9e = '0%'}
 var sex10e = ''
 if ((Number(sex3e)/Number(sex2e)*100).toFixed(2) >= 80) {
   sex10e = 'progress-bar progress-bar-striped bg-success'
  } else {
   sex10e = 'progress-bar progress-bar-striped bg-danger'
  }




//////Финские сита закончили //////


////// Сита с фальцами ////
let sex1a1 = result['data']["SITO_S_FALC"][0]
let sex2a1 = result['data']["SITO_S_FALC"][2]
let sex3a1 = result['data']["SITO_S_FALC"][4]
let sex4a1 = result['data']["SITO_S_FALC"][3]
sex4a1 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex4a1);
let sex5a1 = result['data']["SITO_S_FALC"][5]
sex5a1 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sex5a1);
let sex6a1 = result['data']["SITO_S_FALC"][11]
var sex7a1 = ''
var sex8a1 = ''
if (Number(sex6a1) <= 0) {
    sex7a1 = '🔻'
    sex8a1 = 'Отставание'
} else {  
  sex7a1 = '☑️'
  sex8a1 = 'Перевыполнение'
}
let sex9_0a1 = (Number(sex3a)/Number(sex2a)*100).toFixed(2)
let sex9a1 = sex9_0a1 + '%'
if (sex9a1 == 'NaN%') {sex9a1 = '0%'}
var sex10a1 = ''
if ((Number(sex3a1)/Number(sex2a)*100).toFixed(2) >= 80) {
  sex10a1 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sex10a1 = 'progress-bar progress-bar-striped bg-danger'
 }

 /////// Сита с фальцами закончили/////


//////////// Закончили !!!////////



////////// круги начало ///////
let pusk = result['data']["ITOGO"][3]
let pusk1 = result['data']["ITOGO"][5]
let pusk2 = result['data']["ITOGO"][10]

var pu = Number((pusk1/pusk)*100)
console.log('Оюрати внимание ', pu, )
if (pu == 'NaN') {pu = 0}

var itog_06 = ''
if (pu < 80) {
    itog_06 = 'red'
} else {
  itog_06 = 'green'
}
var itog_03 = pu.toFixed(0)


var pu1 = Number((pusk2/pusk)*100)
console.log('Оюрати внимание ', pu1, )
if (pu1 == 'NaN') {pu1 = 0}


var itog_05 = ''
if (pu1 < 80) {
    itog_05 = 'red'
} else {
  itog_05 = 'green'
}
var itog_04 = pu1.toFixed(0)
////////////////////////////

///// Лидеры начало ///////
let lid_01 = result['data']["ZARPL"][0][0]
let lid_02 = result['data']["ZARPL"][0][5]
lid_02 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(lid_02);

let lid_03 = result['data']["ZARPL"][1][0]
let lid_04 = result['data']["ZARPL"][1][5]
lid_04 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(lid_04);

let lid_05 = result['data']["ZARPL"][2][0]
let lid_06 = result['data']["ZARPL"][2][5]
lid_06 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(lid_06);



///// Лидеры конец ///////


///// Сотрудники начало //////
let sot_01 = result['data']["ZARPL"][0][0]
let sot_02 = String((Number(result['data']["ZARPL"][0][5])/Number(result['data']["ZARPL"][0][3])*100).toFixed(2)) + '%'
let sot_03 = result['data']["ZARPL"][0][5]
sot_03 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03);

var sot_04 = ''
if ((Number(result['data']["ZARPL"][0][5])/Number(result['data']["ZARPL"][0][3])*100).toFixed(2) >= 80) {
  sot_04 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sot_04 = 'progress-bar progress-bar-striped bg-danger'
 }

let sot_01_01 = result['data']["ZARPL"][1][0]
let sot_02_01 = String((Number(result['data']["ZARPL"][1][5])/Number(result['data']["ZARPL"][1][3])*100).toFixed(2)) + '%'
let sot_03_01 = result['data']["ZARPL"][1][5]
sot_03_01 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_01);

var sot_04_01 = ''
if ((Number(result['data']["ZARPL"][1][5])/Number(result['data']["ZARPL"][1][3])*100).toFixed(2) >= 80) {
  sot_04_01 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sot_04_01 = 'progress-bar progress-bar-striped bg-danger'
 }



 let sot_01_02 = result['data']["ZARPL"][2][0]
let sot_02_02 = String((Number(result['data']["ZARPL"][2][5])/Number(result['data']["ZARPL"][2][3])*100).toFixed(2)) + '%'
let sot_03_02 = result['data']["ZARPL"][2][5]
sot_03_02 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_02);

var sot_04_02 = ''

if ((Number(result['data']["ZARPL"][2][5])/Number(result['data']["ZARPL"][2][3])*100).toFixed(2) >= 80) {
  sot_04_02 = 'progress-bar progress-bar-striped bg-success'
 } else {
  sot_04_02 = 'progress-bar progress-bar-striped bg-danger'
 }


 let sot_01_03 = result['data']["ZARPL"][3][0]
 let sot_02_03 = String((Number(result['data']["ZARPL"][3][5])/Number(result['data']["ZARPL"][3][3])*100).toFixed(2)) + '%'
 let sot_03_03 = result['data']["ZARPL"][3][5]
 sot_03_03 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_03);
 
 var sot_04_03 = ''
 
 if ((Number(result['data']["ZARPL"][3][5])/Number(result['data']["ZARPL"][3][3])*100).toFixed(2) >= 80) {
   sot_04_03 = 'progress-bar progress-bar-striped bg-success'
  } else {
   sot_04_03 = 'progress-bar progress-bar-striped bg-danger'
  }


  let sot_01_04 = result['data']["ZARPL"][4][0]
  let sot_02_04 = String((Number(result['data']["ZARPL"][4][5])/Number(result['data']["ZARPL"][4][3])*100).toFixed(2)) + '%'
  let sot_03_04 = result['data']["ZARPL"][4][5]
  sot_03_04 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_04);
  
  var sot_04_04 = ''
  console.log('Хоень ', (Number(result['data']["ZARPL"][4][5])/Number(result['data']["ZARPL"][4][3])*100).toFixed(2))
  if ((Number(result['data']["ZARPL"][4][5])/Number(result['data']["ZARPL"][4][3])*100).toFixed(2) >= 80) {
    sot_04_04 = 'progress-bar progress-bar-striped bg-success'
   } else {
    sot_04_04 = 'progress-bar progress-bar-striped bg-danger'
   }

   let sot_01_05 = result['data']["ZARPL"][5][0]
  let sot_02_05 = String((Number(result['data']["ZARPL"][5][5])/Number(result['data']["ZARPL"][5][3])*100).toFixed(2)) + '%'
  let sot_03_05 = result['data']["ZARPL"][5][5]
  sot_03_05 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_05);
  
  var sot_04_05 = ''

  if ((Number(result['data']["ZARPL"][5][5])/Number(result['data']["ZARPL"][5][3])*100).toFixed(2) >= 80) {
    sot_04_05 = 'progress-bar progress-bar-striped bg-success'
   } else {
    sot_04_05 = 'progress-bar progress-bar-striped bg-danger'
   }


   let sot_01_06 = result['data']["ZARPL"][6][0]
   let sot_02_06 = String((Number(result['data']["ZARPL"][6][5])/Number(result['data']["ZARPL"][6][3])*100).toFixed(2)) + '%'
   let sot_03_06 = result['data']["ZARPL"][6][5]
   sot_03_06 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_06);
   
   var sot_04_06 = '' 
   if ((Number(result['data']["ZARPL"][6][5])/Number(result['data']["ZARPL"][6][3])*100).toFixed(2) >= 80) {
     sot_04_06 = 'progress-bar progress-bar-striped bg-success'
    } else {
     sot_04_06 = 'progress-bar progress-bar-striped bg-danger'
    }


    let sot_01_07 = result['data']["ZARPL"][7][0]
   let sot_02_07 = String((Number(result['data']["ZARPL"][7][5])/Number(result['data']["ZARPL"][7][3])*100).toFixed(2)) + '%'
   let sot_03_07 = result['data']["ZARPL"][7][5]
   sot_03_07 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_07);
   
   var sot_04_07 = '' 
   if ((Number(result['data']["ZARPL"][7][5])/Number(result['data']["ZARPL"][7][3])*100).toFixed(2) >= 80) {
     sot_04_07 = 'progress-bar progress-bar-striped bg-success'
    } else {
     sot_04_07 = 'progress-bar progress-bar-striped bg-danger'
    }


    
    let sot_01_08 = result['data']["ZARPL"][8][0]
   let sot_02_08 = String((Number(result['data']["ZARPL"][8][5])/Number(result['data']["ZARPL"][8][3])*100).toFixed(2)) + '%'
   let sot_03_08 = result['data']["ZARPL"][8][5]
   sot_03_08 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_08);
   
   var sot_04_08 = '' 
   if ((Number(result['data']["ZARPL"][8][5])/Number(result['data']["ZARPL"][8][3])*100).toFixed(2) >= 80) {
     sot_04_08 = 'progress-bar progress-bar-striped bg-success'
    } else {
     sot_04_08 = 'progress-bar progress-bar-striped bg-danger'
    }



    let sot_01_09 = result['data']["ZARPL"][9][0]
    let sot_02_09 = String((Number(result['data']["ZARPL"][9][5])/Number(result['data']["ZARPL"][9][3])*100).toFixed(2)) + '%'
    let sot_03_09 = result['data']["ZARPL"][9][5]
    sot_03_09 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_09);
    
    var sot_04_09 = '' 
    if ((Number(result['data']["ZARPL"][9][5])/Number(result['data']["ZARPL"][9][3])*100).toFixed(2) >= 80) {
      sot_04_09 = 'progress-bar progress-bar-striped bg-success'
     } else {
      sot_04_09 = 'progress-bar progress-bar-striped bg-danger'
     }



     let sot_01_10 = result['data']["ZARPL"][10][0]
    let sot_02_10 = String((Number(result['data']["ZARPL"][10][5])/Number(result['data']["ZARPL"][10][3])*100).toFixed(2)) + '%'
    let sot_03_10 = result['data']["ZARPL"][10][5]
    sot_03_10 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_10);
    
    var sot_04_10 = '' 
    if ((Number(result['data']["ZARPL"][10][5])/Number(result['data']["ZARPL"][10][3])*100).toFixed(2) >= 80) {
      sot_04_10 = 'progress-bar progress-bar-striped bg-success'
     } else {
      sot_04_10 = 'progress-bar progress-bar-striped bg-danger'
     }



     let sot_01_11 = result['data']["ZARPL"][11][0]
     let sot_02_11 = String((Number(result['data']["ZARPL"][11][5])/Number(result['data']["ZARPL"][11][3])*100).toFixed(2)) + '%'
     let sot_03_11 = result['data']["ZARPL"][11][5]
     sot_03_11 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_11);
     
     var sot_04_11 = '' 
     if ((Number(result['data']["ZARPL"][11][5])/Number(result['data']["ZARPL"][11][3])*100).toFixed(2) >= 80) {
       sot_04_11 = 'progress-bar progress-bar-striped bg-success'
      } else {
       sot_04_11 = 'progress-bar progress-bar-striped bg-danger'
      }

      let sot_01_12 = result['data']["ZARPL"][12][0]
     let sot_02_12 = String((Number(result['data']["ZARPL"][12][5])/Number(result['data']["ZARPL"][12][3])*100).toFixed(2)) + '%'
     let sot_03_12 = result['data']["ZARPL"][12][5]
     sot_03_12 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_12);
     
     var sot_04_12 = '' 
     if ((Number(result['data']["ZARPL"][12][5])/Number(result['data']["ZARPL"][12][3])*100).toFixed(2) >= 80) {
       sot_04_12 = 'progress-bar progress-bar-striped bg-success'
      } else {
       sot_04_12 = 'progress-bar progress-bar-striped bg-danger'
      }



      let sot_01_13 = result['data']["ZARPL"][13][0]
      let sot_02_13 = String((Number(result['data']["ZARPL"][13][5])/Number(result['data']["ZARPL"][13][3])*100).toFixed(2)) + '%'
      let sot_03_13 = result['data']["ZARPL"][13][5]
      sot_03_13 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_13);
      
      var sot_04_13 = '' 
      if ((Number(result['data']["ZARPL"][13][5])/Number(result['data']["ZARPL"][13][3])*100).toFixed(2) >= 80) {
        sot_04_13 = 'progress-bar progress-bar-striped bg-success'
       } else {
        sot_04_13 = 'progress-bar progress-bar-striped bg-danger'
       }

       let sot_01_14 = result['data']["ZARPL"][14][0]
      let sot_02_14 = String((Number(result['data']["ZARPL"][14][5])/Number(result['data']["ZARPL"][14][3])*100).toFixed(2)) + '%'
      let sot_03_14 = result['data']["ZARPL"][14][5]
      sot_03_14 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_14);
      
      var sot_04_14 = '' 
      if ((Number(result['data']["ZARPL"][14][5])/Number(result['data']["ZARPL"][14][3])*100).toFixed(2) >= 80) {
        sot_04_14 = 'progress-bar progress-bar-striped bg-success'
       } else {
        sot_04_14 = 'progress-bar progress-bar-striped bg-danger'
       }


       let sot_01_15 = result['data']["ZARPL"][15][0]
       let sot_02_15 = String((Number(result['data']["ZARPL"][15][5])/Number(result['data']["ZARPL"][15][3])*100).toFixed(2)) + '%'
       let sot_03_15 = result['data']["ZARPL"][15][5]
       sot_03_15 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_15);
       
       var sot_04_15 = '' 
       if ((Number(result['data']["ZARPL"][15][5])/Number(result['data']["ZARPL"][15][3])*100).toFixed(2) >= 80) {
         sot_04_15 = 'progress-bar progress-bar-striped bg-success'
        } else {
         sot_04_15 = 'progress-bar progress-bar-striped bg-danger'
        }



        let sot_01_16 = result['data']["ZARPL"][16][0]
       let sot_02_16 = String((Number(result['data']["ZARPL"][16][5])/Number(result['data']["ZARPL"][16][3])*100).toFixed(2)) + '%'
       let sot_03_16 = result['data']["ZARPL"][16][5]
       sot_03_16 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_16);
       
       var sot_04_16 = '' 
       if ((Number(result['data']["ZARPL"][16][5])/Number(result['data']["ZARPL"][16][3])*100).toFixed(2) >= 80) {
         sot_04_16 = 'progress-bar progress-bar-striped bg-success'
        } else {
         sot_04_16 = 'progress-bar progress-bar-striped bg-danger'
        }

        let sot_01_17 = result['data']["ZARPL"][17][0]
        let sot_02_17 = String((Number(result['data']["ZARPL"][17][5])/Number(result['data']["ZARPL"][17][3])*100).toFixed(2)) + '%'
        let sot_03_17 = result['data']["ZARPL"][17][5]
        sot_03_17 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_17);
        
        var sot_04_17 = '' 
        if ((Number(result['data']["ZARPL"][17][5])/Number(result['data']["ZARPL"][17][3])*100).toFixed(2) >= 80) {
          sot_04_17 = 'progress-bar progress-bar-striped bg-success'
         } else {
          sot_04_17 = 'progress-bar progress-bar-striped bg-danger'
         }


         let sot_01_18 = result['data']["ZARPL"][18][0]
         let sot_02_18 = String((Number(result['data']["ZARPL"][18][5])/Number(result['data']["ZARPL"][18][3])*100).toFixed(2)) + '%'
         let sot_03_18 = result['data']["ZARPL"][18][5]
         sot_03_18 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_18);
         
         var sot_04_18 = '' 
         if ((Number(result['data']["ZARPL"][18][5])/Number(result['data']["ZARPL"][18][3])*100).toFixed(2) >= 80) {
           sot_04_18 = 'progress-bar progress-bar-striped bg-success'
          } else {
           sot_04_18 = 'progress-bar progress-bar-striped bg-danger'
          }


          let sot_01_19 = result['data']["ZARPL"][19][0]
          let sot_02_19 = String((Number(result['data']["ZARPL"][19][5])/Number(result['data']["ZARPL"][19][3])*100).toFixed(2)) + '%'
          let sot_03_19 = result['data']["ZARPL"][19][5]
          sot_03_19 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_19);
          
          var sot_04_19 = '' 
          if ((Number(result['data']["ZARPL"][19][5])/Number(result['data']["ZARPL"][19][3])*100).toFixed(2) >= 80) {
            sot_04_19 = 'progress-bar progress-bar-striped bg-success'
           } else {
            sot_04_19 = 'progress-bar progress-bar-striped bg-danger'
           }



           let sot_01_20 = result['data']["ZARPL"][20][0]
           let sot_02_20 = String((Number(result['data']["ZARPL"][20][5])/Number(result['data']["ZARPL"][20][3])*100).toFixed(2)) + '%'
           let sot_03_20 = result['data']["ZARPL"][20][5]
           sot_03_20 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_20);
           
           var sot_04_20 = '' 
           if ((Number(result['data']["ZARPL"][20][5])/Number(result['data']["ZARPL"][20][3])*100).toFixed(2) >= 80) {
             sot_04_20 = 'progress-bar progress-bar-striped bg-success'
            } else {
             sot_04_20 = 'progress-bar progress-bar-striped bg-danger'
            }



            let sot_01_21 = result['data']["ZARPL"][21][0]
           let sot_02_21 = String((Number(result['data']["ZARPL"][21][5])/Number(result['data']["ZARPL"][21][3])*100).toFixed(2)) + '%'
           let sot_03_21 = result['data']["ZARPL"][21][5]
           sot_03_21 = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency: 'KZT' }).format(sot_03_21);
           
           var sot_04_21 = '' 
           if ((Number(result['data']["ZARPL"][21][5])/Number(result['data']["ZARPL"][21][3])*100).toFixed(2) >= 80) {
             sot_04_21 = 'progress-bar progress-bar-striped bg-success'
            } else {
             sot_04_21 = 'progress-bar progress-bar-striped bg-danger'
            }
     
    
   
  
 









///// Сотрудники конец //////




    ///////////Модальное окно////////////////

    let inter = result['data']['zapisi'][0]
    var pid = inter
      // Функция, которая будет вызываться для проверки условия и показа модального окна
  const checkAndShowModal = () => {
    if (pid == '1') {
      psdn = result['data']['zapisi'][1]
      setShowModal(true);
      console.log('true')
      handleOpenModal() 
    }
  }

  checkAndShowModal()

  ///////////Модальное окно завершили////////////////





  ///////////Работаем с датой////////////////
 
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Определяем дату первого дня следующего месяца
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }
    let nextMonthFirstDay = new Date(nextYear, nextMonth, 1);

    // Определяем разницу в днях между текущей датой и первым днем следующего месяца
    let timeDiff = nextMonthFirstDay - currentDate;
    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    //console.log("Количество дней до конца текущего месяца: " + daysLeft);
    let sex78 = daysLeft

    


    const currentDate1 = new Date();

// Получаем первый день следующего месяца
const nextMonth1 = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

// Отнимаем текущую дату и время от первого дня следующего месяца
const timeDiff1 = nextMonth1.getTime() - currentDate.getTime();

// Переводим разницу в миллисекундах в дни и часы
const daysRemaining1 = Math.floor(timeDiff1 / (1000 * 60 * 60 * 24));
const hoursRemaining1 = Math.floor((timeDiff1 / (1000 * 60 * 60)) % 24);
const minutesRemaining = Math.floor((timeDiff1 / (1000 * 60)) % 60);

// Выводим результат
//console.log(`Осталось ${daysRemaining1} дней и ${hoursRemaining1} часов до конца месяца.`);


 let itog_07 = hoursRemaining1
 let itog_08 = minutesRemaining

 ///////////Работаем с датой завершили////////////////




 setSot_01_20(sot_01_20);
 setSot_02_20(sot_02_20);
 setSot_03_20(sot_03_20);
 setSot_04_20(sot_04_20);
 setSot_05_20(sot_05_20);

 setSot_01_21(sot_01_21);
 setSot_02_21(sot_02_21);
 setSot_03_21(sot_03_21);
 setSot_04_21(sot_04_21);
 setSot_05_21(sot_05_21);



 setSot_01_17(sot_01_17);
 setSot_02_17(sot_02_17);
 setSot_03_17(sot_03_17);
 setSot_04_17(sot_04_17);
 setSot_05_17(sot_05_17);

 setSot_01_18(sot_01_18);
 setSot_02_18(sot_02_18);
 setSot_03_18(sot_03_18);
 setSot_04_18(sot_04_18);
 setSot_05_18(sot_05_18);

 setSot_01_19(sot_01_19);
 setSot_02_19(sot_02_19);
 setSot_03_19(sot_03_19);
 setSot_04_19(sot_04_19);
 setSot_05_19(sot_05_19);














 setSot_01_11(sot_01_11);
 setSot_02_11(sot_02_11);
 setSot_03_11(sot_03_11);
 setSot_04_11(sot_04_11);
 setSot_05_11(sot_05_11);

 setSot_01_12(sot_01_12);
 setSot_02_12(sot_02_12);
 setSot_03_12(sot_03_12);
 setSot_04_12(sot_04_12);
 setSot_05_12(sot_05_12);

 setSot_01_13(sot_01_13);
 setSot_02_13(sot_02_13);
 setSot_03_13(sot_03_13);
 setSot_04_13(sot_04_13);
 setSot_05_13(sot_05_13);

 setSot_01_14(sot_01_14);
 setSot_02_14(sot_02_14);
 setSot_03_14(sot_03_14);
 setSot_04_14(sot_04_14);
 setSot_05_14(sot_05_14);

 setSot_01_15(sot_01_15);
 setSot_02_15(sot_02_15);
 setSot_03_15(sot_03_15);
 setSot_04_15(sot_04_15);
 setSot_05_15(sot_05_15);

 setSot_01_16(sot_01_16);
 setSot_02_16(sot_02_16);
 setSot_03_16(sot_03_16);
 setSot_04_16(sot_04_16);
 setSot_05_16(sot_05_16);















 setSot_01_10(sot_01_10);
 setSot_02_10(sot_02_10);
 setSot_03_10(sot_03_10);
 setSot_04_10(sot_04_10);
 setSot_05_10(sot_05_10);

 setSot_01_09(sot_01_09);
 setSot_02_09(sot_02_09);
 setSot_03_09(sot_03_09);
 setSot_04_09(sot_04_09);
 setSot_05_09(sot_05_09);


 setSot_01_08(sot_01_08);
 setSot_02_08(sot_02_08);
 setSot_03_08(sot_03_08);
 setSot_04_08(sot_04_08);
 setSot_05_08(sot_05_08);

 setSot_01_07(sot_01_07);
 setSot_02_07(sot_02_07);
 setSot_03_07(sot_03_07);
 setSot_04_07(sot_04_07);
 setSot_05_07(sot_05_07);

 setSot_01_06(sot_01_06);
 setSot_02_06(sot_02_06);
 setSot_03_06(sot_03_06);
 setSot_04_06(sot_04_06);
 setSot_05_06(sot_05_06);











 setSot_01_05(sot_01_05);
 setSot_02_05(sot_02_05);
 setSot_03_05(sot_03_05);
 setSot_04_05(sot_04_05);
 setSot_05_05(sot_05_05);

 setSot_01_04(sot_01_04);
 setSot_02_04(sot_02_04);
 setSot_03_04(sot_03_04);
 setSot_04_04(sot_04_04);
 setSot_05_04(sot_05_04);


 setSot_01_03(sot_01_03);
 setSot_02_03(sot_02_03);
 setSot_03_03(sot_03_03);
 setSot_04_03(sot_04_03);
 setSot_05_03(sot_05_03);

 setSot_01_02(sot_01_02);
 setSot_02_02(sot_02_02);
 setSot_03_02(sot_03_02);
 setSot_04_02(sot_04_02);
 setSot_05_02(sot_05_02);

 setSot_01_01(sot_01_01);
 setSot_02_01(sot_02_01);
 setSot_03_01(sot_03_01);
 setSot_04_01(sot_04_01);
 setSot_05_01(sot_05_01);
 

 
    setSot_01(sot_01);
    setSot_02(sot_02);
    setSot_03(sot_03);
    setSot_04(sot_04);
    setSot_05(sot_05);
    


    setLid_01(lid_01);
    setLid_02(lid_02);
    setLid_03(lid_03);
    setLid_04(lid_04);
    setLid_05(lid_05);
    setLid_06(lid_06);



    setItog_07(itog_07);
    setItog_08(itog_08);    
    setSex78(sex78);



    setSex1(sex1)
    setSex2(sex2)
    setSex3(sex3)
    setSex4(sex4)
    setSex5(sex5)
    setSex6(sex6)
    setSex7(sex7)
    setSex8(sex8)
    setSex9(sex9)
    setSex10(sex10)

    setSex11(sex11)
    setSex12(sex12)
    setSex13(sex13)
    setSex14(sex14)
    setSex15(sex15)
    setSex16(sex16)
    setSex17(sex17)
    setSex18(sex18)
    setSex19(sex19)
    setSex20(sex20)

    setSex21(sex21)
    setSex22(sex22)
    setSex23(sex23)
    setSex24(sex24)
    setSex25(sex25)
    setSex26(sex26)
    setSex27(sex27)
    setSex28(sex28)
    setSex29(sex29)
    setSex30(sex30)

    setSex1a(sex1a)
    setSex2a(sex2a)
    setSex3a(sex3a)
    setSex4a(sex4a)
    setSex5a(sex5a)
    setSex6a(sex6a)
    setSex7a(sex7a)
    setSex8a(sex8a)
    setSex9a(sex9a)
    setSex10a(sex10a)

    setSex1b(sex1b)
    setSex2b(sex2b)
    setSex3b(sex3b)
    setSex4b(sex4b)
    setSex5b(sex5b)
    setSex6b(sex6b)
    setSex7b(sex7b)
    setSex8b(sex8b)
    setSex9b(sex9b)
    setSex10b(sex10b)

    setSex1c(sex1c)
    setSex2c(sex2c)
    setSex3c(sex3c)
    setSex4c(sex4c)
    setSex5c(sex5c)
    setSex6c(sex6c)
    setSex7c(sex7c)
    setSex8c(sex8c)
    setSex9c(sex9c)
    setSex10c(sex10c)

    setSex1d(sex1d)
    setSex2d(sex2d)
    setSex3d(sex3d)
    setSex4d(sex4d)
    setSex5d(sex5d)
    setSex6d(sex6d)
    setSex7d(sex7d)
    setSex8d(sex8d)
    setSex9d(sex9d)
    setSex10d(sex10d)

    setSex1e(sex1e)
    setSex2e(sex2e)
    setSex3e(sex3e)
    setSex4e(sex4e)
    setSex5e(sex5e)
    setSex6e(sex6e)
    setSex7e(sex7e)
    setSex8e(sex8e)
    setSex9e(sex9e)
    setSex10e(sex10e)

    setSex1a1(sex1a1)
    setSex2a1(sex2a1)
    setSex3a1(sex3a1)
    setSex4a1(sex4a1)
    setSex5a1(sex5a1)
    setSex6a1(sex6a1)
    setSex7a1(sex7a1)
    setSex8a1(sex8a1)
    setSex9a1(sex9a1)
    setSex10a1(sex10a1)
    setItog_03(itog_03);
    setItog_04(itog_04);
    setItog_05(itog_05);
    setItog_06(itog_06);
   
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (




<div class="container">
<div class="container">


{showModal && <Modal1  data={data} />}
</div>



<div class="a2"> 
      <img src={logo} alt="логотип" style={{width: '380px', textAlign: 'center', backgroundColor: 'black'}} class="a2"/>
    </div>


  <div class="row">
    
    <div class="col-sm  er40" style={{transform: 'scale(0.95)'}}>
   
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-center"><h2 class="text-center pz4">Целевые показатели</h2></div>


          
      <div class="container">


     
      
      <div class="container er40" id='sex01'>
      <div class="text-center" style={{background: 'grey'}} ><h3 class="text-center pz42">{sex1}</h3></div>

      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz42'>{sex2}</td>
      <td class='pz42'>{sex3}</td>
    </tr>   
    
  </tbody>
</table>



<table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz42'>{sex4}</td>
      <td class='pz42'>{sex5}</td>
    </tr>   
    
  </tbody>
</table>




<div class="text-center pz42"><h4 class='pz42'>{sex8} {sex6} {sex7}</h4></div>




<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10} style={{ width: sex9,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9}</h4></div>
          </div>
        




          <div style={{display: 'inline-flex'}}>
          <div style={{display: 'inline-flex' , width: '1750px'}}>

          <div class="container er40">
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center pz45">{sex11}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz45'>{sex12}</td>
      <td class='pz45'>{sex13}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz45'>{sex14}</td>
      <td class='pz45'>{sex15}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center pz45" ><h4>{sex18} {sex16} {sex17}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex20} style={{ width: sex19,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex19}</h4></div>
          </div>
          </div>
<div class="container er40" >
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center pz45">{sex21}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz45'>{sex22}</td>
      <td class='pz45'>{sex23}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz45'>{sex24}</td>
      <td class='pz45'>{sex25}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center pz45"><h4>{sex28} {sex26} {sex27}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex30} style={{ width: sex29,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex29}</h4></div>
          </div>
</div>


          </div>

        </div>















      </div>
      



      <div class="container er40" >
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center pz42">{sex1a}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz42'>{sex2a}</td>
      <td class='pz42'>{sex3a}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class='pz42'>{sex4a}</td>
      <td class='pz42'>{sex5a}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center pz42"><h4 class='pz42'>{sex8a} {sex6a} {sex7a}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10a} style={{ width: sex9a,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9a}</h4></div>
          </div>
</div>
          
<div style={{display: 'inline-flex'}}>
<div style={{display: 'inline-flex'}}>
<div class="container er40">
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center">{sex1b}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex2b}</td>
      <td>{sex3b}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex4b}</td>
      <td>{sex5b}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center"><h4>{sex8b} {sex6b} {sex7b}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10b} style={{ width: sex9b,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9b}</h4></div>
          </div>
</div>
  </div>
  <div class="container er40">
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center">{sex1c}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex2c}</td>
      <td>{sex3c}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex4c}</td>
      <td>{sex5c}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center"><h4>{sex8c} {sex6c} {sex7c}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10c} style={{ width: sex9c,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9c}</h4></div>
          </div>
</div>
<div class="container er40">
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center">{sex1d}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex2d}</td>
      <td>{sex3d}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex4d}</td>
      <td>{sex5d}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center"><h4>{sex8d} {sex6d} {sex7d}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10d} style={{ width: sex9d,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9d}</h4></div>
          </div>
</div>
<div class="container er40">
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center">{sex1e}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex2e}</td>
      <td>{sex3e}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td>{sex4e}</td>
      <td>{sex5e}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center"><h4>{sex8e} {sex6e} {sex7e}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10e} style={{ width: sex9e,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9e}</h4></div>
          </div>
          </div> 



     
            
          





          </div>



         










    </div>

    </div>





    <div class="col-sm" style={{display: 'flex',  alignItems: 'center' , flexDirection: 'column', transform: 'scale(1.1)'}}>

    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br>
    
    
   
    
  
    <h2 class="text-center pz4">Выполнение плана</h2>

    <div 
  role="progressbar1"  aria-valuenow={itog_03}   aria-valuemin={0}   aria-valuemax={100} style={{ '--value': itog_03, '--primary': itog_06, boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
></div>

<br></br><br></br>
<h2 class="text-center pz4">Прогноз выполнения<br>
</br> плана</h2>


<div 
  role="progressbar1"  aria-valuenow={itog_04}   aria-valuemin={0}   aria-valuemax={100} style={{ '--value': itog_04, '--primary': itog_05, boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
></div>

<br></br>

      
    





<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⇩ Осталось ⇩ <br></br>  📅{sex78} дней, 🕑{itog_07} часов, ⏳{itog_08} минут </h3> 
<br></br><h1>🏆 ЛИДЕРЫ 🏆</h1>
<br></br>
<div style={{backgroundColor: 'gold',padding: '10px', borderRadius: '15px'}}>
<h1>1️⃣ {lid_01} {lid_02}  </h1>
<h1>2️⃣ {lid_03} {lid_04} </h1>
<h1>3️⃣ {lid_05} {lid_06} </h1>
</div>


<br></br>

<div class="container er40" style={{maxWidth: '950px'}}>
      <div class="text-center" style={{background: 'grey'}} ><h5 class="text-center pz42">{sex1a1}</h5></div>
      <table class="table table-striped table-bordere">
        <thead>
    <tr>
      <th scope="col">Паказатели в м2</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class="pz45">{sex2a1}</td>
      <td class="pz45">{sex3a1}</td>
    </tr> 
    
  </tbody>
</table>
<table class="table table-striped table-bordere">
        <thead>    <tr>
      <th scope="col">Паказатели в KZT</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Количество</td>
      <td class="pz42">{sex4a1}</td>
      <td class="pz42">{sex5a1}</td>
    </tr>       
  </tbody>
</table>
<div class="text-center pz45"><h4 class='pz42'>{sex8a1} {sex6a1} {sex7a1}</h4></div>
<div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sex10a1} style={{ width: sex9a1,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sex9a1}</h4></div>
          </div>
</div>


    







    </div>
   

    <div class="col-sm" >
    <br></br><h2 class="text-center pz4">Cотрудники</h2>

  


          <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class='container pz47' >
      <h3 class='pz46' style={{fontSize: 'bold'}}>{sot_01}</h3>
      <h3 class='pz46'>{sot_03}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04} style={{ width: sot_02,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_02}</h3>
      <h3 class='pz46'>{sot_03_02}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_02} style={{ width: sot_02_02,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_02}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_04}</h3>
      <h3 class='pz46'>{sot_03_04}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_04} style={{ width: sot_02_04,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_04}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_06}</h3>
      <h3 class='pz46'>{sot_03_06}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_06} style={{ width: sot_02_06,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_06}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_08}</h3>
      <h3 class='pz46'>{sot_03_08}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_08} style={{ width: sot_02_08,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_08}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_10}</h3>
      <h3 class='pz46'>{sot_03_10}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_10} style={{ width: sot_02_10,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_10}</h4></div>
          </div>
          </div>

          
          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_12}</h3>
      <h3 class='pz46'>{sot_03_12}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_12} style={{ width: sot_02_12,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_12}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_14}</h3>
      <h3 class='pz46'>{sot_03_14}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_14} style={{ width: sot_02_14,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_14}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_16}</h3>
      <h3 class='pz46'>{sot_03_16}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_16} style={{ width: sot_02_16,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_16}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_18}</h3>
      <h3 class='pz46'>{sot_03_18}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_18} style={{ width: sot_02_18,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_18}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_20}</h3>
      <h3 class='pz46'>{sot_03_20}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_20} style={{ width: sot_02_20,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_20}</h4></div>
          </div>
          </div>










    </div>
    <div class="col-sm">
    <div class='container pz47' >
      <h3 class='pz46'>{sot_01_01}</h3>
      <h3 class='pz46'>{sot_03_01}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_01} style={{ width: sot_02_01,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_01}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_03}</h3>
      <h3 class='pz46'>{sot_03_03}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_03} style={{ width: sot_02_02,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_03}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_05}</h3>
      <h3 class='pz46'>{sot_03_05}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_05} style={{ width: sot_02_05,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_05}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_07}</h3>
      <h3 class='pz46'>{sot_03_07}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_07} style={{ width: sot_02_07,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_07}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_09}</h3>
      <h3 class='pz46'>{sot_03_09}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_09} style={{ width: sot_02_09,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_09}</h4></div>
          </div>
          </div>



          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_11}</h3>
      <h3 class='pz46'>{sot_03_11}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_11} style={{ width: sot_02_11,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_11}</h4></div>
          </div>
          </div>



          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_13}</h3>
      <h3 class='pz46'>{sot_03_13}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_13} style={{ width: sot_02_13,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_13}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_15}</h3>
      <h3 class='pz46'>{sot_03_15}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_15} style={{ width: sot_02_15,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_15}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_17}</h3>
      <h3 class='pz46'>{sot_03_17}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_17} style={{ width: sot_02_17,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_17}</h4></div>
          </div>
          </div>

          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_19}</h3>
      <h3 class='pz46'>{sot_03_19}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_19} style={{ width: sot_02_19,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_19}</h4></div>
          </div>
          </div>


          <div class='container pz47' >
      <h3 class='pz46'>{sot_01_21}</h3>
      <h3 class='pz46'>{sot_03_21}</h3>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{ height: '30px'}}>
          <div className={sot_04_21} style={{ width: sot_02_21,  alignItems: 'center'}} height='100px' ><h4 style={{paddingTop: '10px'}}>{sot_02_21}</h4></div>
          </div>
          </div>










    </div>
   
  </div>
</div>




    </div>

    </div>




  
</div>












    
    
  );
};

export default Dashboard;



