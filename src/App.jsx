// First import
// import { SharedCounter } from './components/SharedCounter'
// Second import of the same module
// import { SharedCounter as SharedCounter2 } from './components/SharedCounter'

import { useState } from 'react'

function App() {
  const [Component1, setComponent1] = useState(null)
  const [Component2, setComponent2] = useState(null)

  const handleImport1 = async () => {
    const { SharedCounter } = await import('./components/SharedCounter')
    setComponent1(() => SharedCounter)
  }

  const handleImport2 = async () => {
    const { SharedCounter } = await import('./components/SharedCounter')
    setComponent2(() => SharedCounter)
  }

  return (
    <div>
      <h1>动态导入相同模块演示</h1>
      <p>点击下面的按钮来动态导入相同的模块两次</p>
      <p>查看控制台 - 你会看到模块加载消息只出现一次！</p>
      
      <div>
        <h2>第一次导入：</h2>
        <button onClick={handleImport1}>导入第一个组件</button>
        {Component1 && <Component1 />}
      </div>

      <div>
        <h2>第二次导入：</h2>
        <button onClick={handleImport2}>导入第二个组件</button>
        {Component2 && <Component2 />}
      </div>
    </div>
  )
}

export default App
