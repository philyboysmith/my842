import moment from 'moment';

export function humanDate(date) {
	return moment(date).format('DD MMMM Y');
}

export function tick(boolean) {
	return boolean ? 'Yes' : 'No'
}

export function money(decimal = 0) {
  if(!decimal) return '£0';
	return '£' + parseInt(decimal, 10).toLocaleString()
}

export function transformData(data, is_business) {
    var newObj = {};

    const clean = function (str) {
    	return str
    }

	Object.keys(data).map(function(key, i) {
      if(key.startsWith('__')) {
        if(is_business){
          return newObj[key.substring(2)] = clean(data[key]);
        } else {
          return false
        }
      } else {
      	return newObj[key] = clean(data[key])
      }
    });

	return newObj;
}

export function transformContacts(contacts) {
	let string = '';
	contacts.map(contact => {
		return string += contact.first_name + ' ' + contact.last_name + ', '
	});

	if (string.length) return string.substring(0, string.length - 2)

}

export function percentage(percentage) {
	if (percentage) return percentage + '%';
	return '–';
}

export function whoIsThis (id, clients) {
          const i = clients.findIndex((client) => client.id === parseInt(id, 10));
          if(clients[i]) {
            return clients[i].first_name +  ' ' + clients[i].last_name;
          } else {
            return '–';
          }
}