console.log('============= Balanced Parenthesis =============');


function parenthesisAreBalanced(s: string): boolean {
  let stack = [];
  let parenthesis = '[](){}';

  for (let i = 0, ii = s.length; i < ii; i++) {
    let parenthesisIndex = parenthesis.indexOf(s[i]);

    if (parenthesisIndex === -1) {
      continue;
    }

    if (parenthesisIndex % 2 === 0) {
      stack.push(parenthesisIndex + 1);
    } else {
      if (stack.pop() !== parenthesisIndex) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const test1 = '(([[Thomas]]))()';
const test2 = '(([[Thomas]))()';
const test3 = '(([[Thomas]))(])';

console.log(test1, parenthesisAreBalanced(test1));
console.log(test2, parenthesisAreBalanced(test2));
console.log(test3, parenthesisAreBalanced(test3));