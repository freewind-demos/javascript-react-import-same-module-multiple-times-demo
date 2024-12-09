import { useState } from 'react'

console.log('SharedCounter 模块正在被加载！')

export function SharedCounter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>共享计数器组件</h3>
      <p>计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  )
}
