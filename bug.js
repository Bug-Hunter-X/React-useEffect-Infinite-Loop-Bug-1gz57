```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because it sets the count state
    // in the useEffect which triggers the useEffect again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}```