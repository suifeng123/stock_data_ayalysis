/**
 * Created by Administrator on 2018/4/14.
 */
/*
原理：1.交易活跃股票，换手率小于1% 定义为非活跃股票
     2.将换手率1%~2%  换手率 2%~3% 依次类推统计出来，观察换手率与股票涨跌的关系
     3.数据来源 2018/04/13
 */
var stock1 = [1.1,2.89,0.45,1,1,0.86,0.43,0.69,0.95,0.49,0.27,1.04,1.44,3.89,0.35,0,2.63,1.67,1.22,2.24,
           1.16,0.5,0.94,0.38,0.51,0.68,0.55];

var stock2 = [0.52,1.04,0.28,1.04,0.78,1.39,2.64,1.05,2.91,1.24,0.24,2.67,0.64,0.21,0.75];

var stock3 = [-0.4,1.13,6.9,0.78,2.19,2.48,1.98,0.67,4.4,0.05,3.3,5.57];

var stock4 = [3.44,2.65,-4.12,1.86,1.48,3.96,3.57,1.65,1.8,8.47,1.07,3.08,2.24,0.18];

var stock5 = [1.72,1.1,2.82,0.61,1.56,4.08,1.64,9.96,2.82,1.06,3.38,0.18,0.42,5.13,0.2];

var stock6 = [0.42,3.3,1.78,2.89,1.52,0.21,5.84,2.8,3.06, 4.53,2.56,0.02];

var stock7 = [5.65,2.76,2.6,2.06,1.52,0.78,2.11,1.02,4.92,3.54,3.1,3.76,9.97,0.13,8.45,1.83,0.03];

var stock8 = [1.06,1.93,0.05,3.2,1.52,0.92,1.41,10.01,6.7,1.91,1.56,0.82];

var stock9 = [0.43,1.02,3.22,2.25,1.12,1.96,0.42,0.09];

var stock10 = [2.72,1.34,3.13,1.34,1.66,0.98,3.21,3.89,10,5.56,4.63];

var stock11 = [2.21,0.39,1.36,1.72,2.03,1.48,2.09,2.25,0.83,0.43];

var stock12 = [3.06,1.3,1.4,0.41,0.92];

var stock13 = [6.4,9.98,0.69,2,1.5,10.01,0.47,4.86,2.47,10];

var stock14 = [2.01,1.44,2.33,3.43,2.71,1.15,2.05,1.6];

var stock15 = [1.04,0.83,10,10,4.36,3.01,0.13,0.16,0.55,4.14,2.31,1.16,3.41,5.15];

var stock20 = [4,0.39,1.21,4.63,0.37,6.27,1.71,3.67,1.82,3.17,3.66,10,3.27,2.26,0.74,2.29,
         2.96,2.75,10,4.29,3.02,5.23,1.36];
var arr = [];
var sum1 = 0;
for(var i = 0; i < stock1.length;i++){
     sum1 += stock1[i];
}
arr.push((sum1/stock1.length).toFixed(2));

var sum2 = 0;
for(var i = 0; i<stock2.length;i++){
     sum2 += stock2[i];
}
arr.push((sum2/stock2.length).toFixed(2));


var sum3 = 0;
for(var i = 0; i < stock3.length; i++){
     sum3 += stock3[i];
}
arr.push((sum3/stock3.length).toFixed(2));

var sum4 = 0;
for(var i = 0; i < stock4.length; i++){
     sum4 += stock4[i];
}
arr.push((sum4/stock4.length).toFixed(2));

var sum5 = 0;
for(var i = 0; i < stock5.length; i++){
     sum5 += stock5[i];
}
arr.push((sum5/stock5.length).toFixed(2));

var sum6 = 0;
for(var i = 0; i < stock6.length; i++){
     sum6 += stock6[i];
}
arr.push((sum6/stock6.length).toFixed(2));

var sum7 = 0;
for(var i = 0; i < stock7.length; i++){
     sum7 += stock7[i];
}
arr.push((sum7/stock7.length).toFixed(2));

var sum8 = 0;
for(var i = 0; i < stock8.length; i++){
     sum8 += stock8[i];
}
arr.push((sum8/stock8.length).toFixed(2));

var sum9 = 0;
for(var i = 0; i < stock9.length; i++){
     sum9 += stock9[i];
}
arr.push((sum9/stock9.length).toFixed(2));

var sum10 = 0;
for(var i = 0; i < stock10.length; i++){
     sum10 += stock10[i];
}
arr.push((sum10/stock10.length).toFixed(2));

var sum11 = 0;
for(var i = 0; i < stock11.length; i++){
     sum11 += stock11[i];
}
arr.push((sum11/stock11.length).toFixed(2));

var sum12 = 0;
for(var i = 0; i < stock12.length; i++){
     sum12 += stock12[i];
}
arr.push((sum12/stock12.length).toFixed(2));

var sum13 = 0;
for(var i = 0; i < stock13.length; i++){
     sum13 += stock13[i];
}
arr.push((sum13/stock13.length).toFixed(2));

var sum14 = 0;
for(var i = 0; i < stock14.length; i++){
     sum14 += stock14[i];
}
arr.push((sum14/stock14.length).toFixed(2));

var sum15 = 0;
for(var i = 0; i < stock15.length; i++){
     sum15 += stock15[i];
}
arr.push((sum15/stock15.length).toFixed(2));

var sum20 = 0;
for(var i = 0; i < stock20.length; i++){
     sum20 += stock20[i];
}
arr.push((sum20/stock20.length).toFixed(2));
console.log('hand over,average:'+arr);