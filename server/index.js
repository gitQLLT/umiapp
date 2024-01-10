const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser');

// 使用body-parser中间件来解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/login',(req,res)=>{
  let {name,pass} = req.body
  if(name==='admin' && pass==='123456'){
    res.send({
      code: 200,
      message: '登录成功'
    })
  }else{
    res.send({
      code: 401,
      message: '账号或密码错误'
    })
  }
})

router.get('/userList',(req,res)=>{
  res.send({
    code: 200,
    data: [
      {
        id: 1,
        name: 'zs',
        age: 12
      },
      {
        id: 2,
        name: 'ls',
        age: 14
      },
      {
        id: 3,
        name: 'ww',
        age: 16
      },
      {
        id: 4,
        name: 'll',
        age: 18
      },
      {
        id: 5,
        name: 'hy',
        age: 20
      },
    ]
  })
})

app.use(router)

app.listen(3000,()=>{
  console.log('you server has run at http://localhost:3000')
})
