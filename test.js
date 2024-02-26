// 定义一个查询构建器
class QueryBuilder {
  constructor(data) {
      this.data = data;
  }

  // 过滤操作
  where(predicate) {
      this.data = this.data.filter(predicate);
      return this;
  }

  // 排序操作
  sortBy(key) {
      this.data.sort((a, b) => a[key] - b[key]);
      return this;
  }

  // 分组操作
  groupBy(key) {
      const groups = {};
      this.data.forEach(item => {
          const groupKey = item[key].toString();
          if (!groups[groupKey]) {
              groups[groupKey] = [];
          }
          groups[groupKey].push(item);
      });
      this.data = Object.values(groups).flat();
      return this;
  }

  // 执行操作并返回结果
  execute() {
      return this.data;
  }
}

// 定义 query 函数，接收一个列表并返回一个查询构建器
function query(list) {
  return new QueryBuilder(list);
}

// 示例数据
const list = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 5, name: 'Bob', age: 17 },
  { id: 8, name: 'Bob', age: 30 },
  { id: 3, name: 'Alice', age: 20 },
  { id: 7, name: 'Bob', age: 22 },
  { id: 4, name: 'Bob', age: 10 },
];

// 执行查询操作
const result = query(list)
  .where(item => item.age > 18) // 年龄大于 18
  .sortBy('id')                  // 按 id 排序
  .groupBy('name')               // 按名字分组
  .execute();                    // 执行查询

// 输出结果
console.log(result);
