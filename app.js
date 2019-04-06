const seneca = require('seneca');
const service = seneca({ log: 'silent' });

const stack = [];

// 값(value)이 필요하다는 것을 명시적으로 지정했으나, 값이 무엇인지는 신경 쓰지 않음
service.add('stack:push,value:*', (msg, next) => {
  stack.push(msg.value);

  next(null, stack);
});

service.add('stack:pop', (msg, next) => {
  stack.pop();

  next(null, stack);
});

service.add('stack:get', (msg, next) => {
  next(null, stack);
});

service.listen(3000);
