export function filterData(arr, value) {
    try {
   
      return arr.filter((data) => {
          return data.title.toLowerCase().includes(value.toLowerCase())
      });
    } catch (e) {
      return e;
    }
  }