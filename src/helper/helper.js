export function formatDate(time) {
  const myDate = new Date(time);
  const result = myDate.getTime();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit'
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(result);
}

export function sortASC(arr, type) {
  const formatDate = arr.map(item => {
    const myDate = new Date(item.created);
    const result = myDate.getTime();

    return {
      ...item,
      created: result
    }
  });

  if (type === 'asc') {
    return formatDate.sort((a,b) => a.created - b.created);
  }

  return formatDate.sort((a,b) => b.created - a.created);
}