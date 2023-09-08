export default function Demo() {
  const showData = () =>{
    const {input1} = this
    alert(input1);
  }
  return(
    <div>
      {/* 回调形式ref */}
      <input ref={c => this.input1 = c} type="text" />
      <button onClick={this.showData}>按钮</button>
    </div>
  )
}