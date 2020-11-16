function get_json(url, data) {
  return fetch(url, {
      credentials: 'same-origin',  // параметр определяющий передвать ли разные сессионные данные вместе с запросом
      method: 'POST',              // метод POST
      body: JSON.stringify(data),  // типа запрашиаемого документа
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
  })
      .then(response => response.json()) // возвращаем промис
}