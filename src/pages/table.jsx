import {connect} from 'umi'

function Table(props) {
  function getDvaData(){
    props.dispatch({
      type: 'global/getUser',
      payload: {user: 'zs'}
    })
  }
  const {userList} = props.global
  return (
    <div>
      my-table
      <ul>
        {userList && userList.map(item=>{
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
      <button onClick={getDvaData}>获取dva数据</button>
    </div>
  );
}

export const mapStateToProps = ({global,loading})=>{
  return {global,loading: loading.models.user}
}
export default connect(mapStateToProps)(Table)
