import axios from "axios";

export const trackingApi = {
  getOrderInfo(hash) {
    function randomInteger(min, max) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const random = randomInteger(1, 3)
    const orderInfo = {
      data: {
        "statusCode": 200,
        "statusText": "OK",
        "data": {
          "orderNumber": 427410,
          "items": [
            {
              "id": 1155396,
              "status": "Отправлена",
              "statusId": random === 1 ? '20' : random === 2 ? '40' : '50',
              "receiverName": "John Doy",
              "receiverEmail": "john.doy@notexist.com",
              "receiverPhone": "78120001589",
              "isImmediateSending": true,
              "payedAt": "16.02.2021 15:41",
              "wasSent": true,
              "sentAt": "17.02.2021 11:12",
              "wasDelivered": true,
              "deliveredAt": "18.02.2021 14:23",
              "wasViewed": false,
              "viewedAt": ""
            }
          ]
        }
      }
    }
    return axios({
      url: `http://127.0.0.1:9080/public/order/info/${hash}`,
      method: "get",
      withCredentials: true,
    })
      .then(function (response) {
        // return response.data;
        return orderInfo.data;
      })
      .catch(function (error) {
        return orderInfo.data;
      });
  },
  getPartnerInfo(hash) {
    const partnerInfo = {
      data: {
        "statusCode": 200,
        "statusText": "OK",
        "data": {
          "code": "hoff",
          "brandColor": "#e60000",
          "name": "Hoff",
          "logo": "https://hoff.digift.ru/usr/img/631a332c03cdc3ccfbc2b3a683892324_original.png",
          "rules": {
            "text": "<ol>\r\n<li>Срок действия подарочной мультикарты составляет <b>3 года</b> от даты отправки.</li>\r\n<li>Номинал от 300 до 120 000 рублей.<br></li>\r\n<li>Использовать подарочную мультикарту можно для обмена на подарочные карты любимых брендов на сайте <a target=\"_blank\" class=\"link\" href=\"https://www.digift.ru\">digift.ru</a></li>\r\n<li>Для входа на сайт необходимо ввести номер вашей Digift Card и ПИН-код.</li>\r\n<li> Digift Card можно обменять на сколько угодно подарочных карт брендов-партнеров&nbsp;<b>в рамках номинала.\r\n</b></li>\r\n<li>Для приобретения товаров и услуг выбранных брендов, предъявите соответствующую карту бренда на кассе или в интернет-магазине. Непосредственно Digift Card не предназначена для использования в качестве оплаты покупки.</li></ol>",
            "title": "ПРАВИЛА ИСПОЛЬЗОВАНИЯ ЭЛЕКТРОННЫХ ПОДАРОЧНЫХ КАРТ И СЕРТИФИКАТОВ"
          }
        }
      }
    }
    return axios({
      url: `http://127.0.0.1:9080/public/partner/info/${hash}`,
      method: "get",
      withCredentials: true,
    })
        .then(function (response) {
         // return response.data;
          return partnerInfo.data;
        })
        .catch(function (error) {
          return partnerInfo.data;
        });
  },
};