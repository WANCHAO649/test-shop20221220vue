import Mock from 'mockjs';
import data from './data.json';

Mock.mock('http://www.weichuang.com/getList', {data: data.list});

Mock.mock('http://www.weichuang.com/getUser', {
    'name|2': 'weichaung',
    'age|18-35': 20
});

Mock.mock('http://www.weichuang.com/regexp', {
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\d{5,10}/
});

let Random = Mock.Random;
let productData = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.weichuang.com/getVarietyItem', productData);