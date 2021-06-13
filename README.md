react hooks:

1.useState：不能用到 if 语句，数组解构赋值出来

2.useEffect：接收 2 个参数，第一个参数是函数，第二个是触发依赖的值，相当于 componentDidMount/componentDidUpdate 和 componentWillUnMount
useEffect(()=>{},[]);

3.useRef：操作 dom 节点，保存变量

4.useCallback：缓存函数

5.useMemo：性能优化 useMemo(()=>{},[]);
class 类组件有 shouldComponentUpdate 这个生命周期去判断是否要渲染，函数组件没有
场景：父组件更新了，子组件不管什么时候也跟着更新，所以用 useMemo 第二个依赖值发生变化才更新

6.useContext,createContext ：createContext 创建共享上下文，useContext 拿到共享上下文

7.useReducer：useReducer(reducer 函数,初始值);

8.自定义 hooks....

FAQ：使用 hooks 实现一个类似 rudex：
用到的钩子函数有 useContext 和 useReducer，可以先用 createContext 创建一个共享的上下文，然后把需要共享的组件用 createContext 上下文包裹住，共享的值放在 CreateContext.Provider 的 value 值上，在组件内通过 useContext 拿到这些共享的值，这样就实现了状态共享。然后可以创建一个 reducer 函数，useReducer 钩子函数接收两个参数，第一个是 reducer 函数，第二个是作为 reducer 的初始值，然后把初始值和 dispatch 解构共享出去，在组件内触发改变状态值。

ahooks:
useSetState：useSetState 跟 useState 一样。useState 会全部替换 state，所以你每次都需要传递完整的对象，useSetState 就不需要，可以传递部分，没有传的属性，就不变

```js
const [payload, setPayload] = useSetState({
  pageNum: 1,
  pageSize: 10,
})
setPayload({
  ...payload,
  pageSize: 20,
})
```

useRequest：ajax 请求的方式
useUnmount：卸载组件的钩子函数，跟 ueEffect 第一个参数的 return 回调一个意思

```js
useEffect(() => {
  return () => {
    clearInterval()
  }
}, [])
useUnmount(() => {
  clearInterval()
})
```
