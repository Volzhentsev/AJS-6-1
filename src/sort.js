export default function orderByProps(obj, props) {
  const arr = [];
  const res = [];

  props.forEach((prop) => {
    res.push({ key: prop, value: obj[prop] });
  });
  for (const prop in obj) {
    if (!props.includes(prop)) {
      arr.push({ key: prop, value: obj[prop] });
    }
  }
  arr.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return res.concat(arr);
}
