// https://juejin.cn/post/6844903929705136141
function deepCopy(target, map = new Map()) {
  if (typeof target === "object" && target !== null) {
    let cloneTarget = target instanceof Array ? [] : {};

    // 处理循环应用的情况   通过map来按照key为原数据值为拷贝数据的形式来看是否拷贝过这个对象
    if (map.get(target)) {
      return map.get(target);
    }

    map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = deepCopy(target[key], map);
    }
    return aaa;
  }

  return target;
}

// 拷贝函数
let cloneFn = (fn) => {
  return new Function("return " + fn.toString())();
};

function fn(aaa) {
  console.log(aaa);
}

// 测试
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  field5: null,
};
target.target = target;
