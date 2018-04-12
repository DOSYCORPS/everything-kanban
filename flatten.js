function flatten(arr) {
  const stack = [arr];
  const flat = [];
  while( stack.length ) {
    const top = stack.pop(); 
    if ( Array.isArray(top) ) {
      stack.push(...top);
    } else {
      flat.push(top);
    }
  }
  return flat;
}

