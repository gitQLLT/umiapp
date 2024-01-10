import styles from './index.less';
import {history} from 'umi'
import { useRef } from 'react';

export default function IndexPage() {
  const name = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);

  function submit1() {
    const body = JSON.stringify({
      name: name.current?.value,
      pass: pass.current?.value,
    });
    fetch('http://localhost:8000/api/login', {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res:any)=>{
      if(res.status===200){
        return res.json()
      }
    }).then((data:any)=>{
      if(data.code===200){
        history.push('/table')
      }else{
        alert('登录失败，请修改账号密码')
      }
    })
  }
  return (
    <div className={styles.loginForm}>
      <label htmlFor="name">用户名：</label>
      <input ref={name} id="name" type="text" />
      <br />
      <label htmlFor="pass">密码：</label>
      <input ref={pass} id="pass" type="password" />
      <br />
      <button onClick={submit1}>提交</button>
    </div>
  );
}
