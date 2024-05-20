export const convertDateToISOFormat = (date: Date) => {
    const d = new Date(date),
          month = ('0' + (d.getMonth() + 1)).slice(-2),
          day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
};